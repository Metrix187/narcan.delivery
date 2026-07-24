/* narcan.delivery data guardian -- Waveshare ESP32-C6-LCD-1.47
 * ------------------------------------------------------------------------
 * An always-on, off-cloud backup of the published dataset (data.json).
 * The google sheet is gone; git is the source of truth and the live site
 * publishes /data.json. This device keeps a copy outside the cloud.
 *
 * Loop: fetch DATA_JSON_URL -> validate (reject HTML error pages, empty
 * bodies, and payloads that lost half their states) -> if good and changed,
 * save a timestamped snapshot to the onboard microSD and update
 * /latest.json. A bad fetch never overwrites the last known-good copy; it
 * just trips the status to STALE, then DEAD.
 *
 * The LCD is the status panel; the RGB LED is a health light
 * (green OK / amber STALE / red DEAD). The device serves its last known-good
 * copy at  http://<device-ip>/latest.json , and -- if the site is declared
 * DEAD -- it POSTs an optional Cloudflare deploy hook, which rebuilds the
 * site from git and can clear a bad deploy.
 *
 * Defense-in-depth chain, post-sheet:
 *   1. git (github + every clone)   -- the dataset's real home
 *   2. cloudflare's deployed copy   -- serves it even if github is down
 *   3. THIS device                  -- survives losing the cloud itself
 *
 * Libraries (Library Manager):
 *   - Arduino_GFX_Library   (moononournation)   ST7789 LCD
 *   - Adafruit_NeoPixel                         onboard RGB LED
 * Board: "ESP32C6 Dev Module" (arduino-esp32 core 3.x). Flash 4MB.
 *
 * PINOUT: verified against the CircuitPython board definition for this exact
 * board (adafruit/circuitpython .../waveshare_esp32_c6_lcd_1_47). The SD card
 * and LCD SHARE one SPI bus (MOSI 6 / SCLK 7); SD adds CS 4 + MISO 5. That
 * shared bus -- not the pin numbers -- is the thing to watch: if SD init ever
 * fails after the display comes up, that's the bus contention to debug.
 * (GPIO4/5 are also broken out to the header; they are dual-purpose.)
 */

#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <HTTPClient.h>
#include <SPI.h>
#include <SD.h>
#include <WebServer.h>
#include <time.h>
#include <Arduino_GFX_Library.h>
#include <Adafruit_NeoPixel.h>
#include "secrets.h"

// ---- Pins (Waveshare ESP32-C6-LCD-1.47) ---------------------------------
#define LCD_MOSI 6
#define LCD_SCLK 7
#define LCD_CS   14
#define LCD_DC   15
#define LCD_RST  21
#define LCD_BL   22
#define SD_CS    4
#define SD_MISO  5          // SD shares MOSI(6)/SCLK(7) with the LCD bus
#define RGB_PIN  8          // onboard WS2812

// ---- Tunables -----------------------------------------------------------
const uint32_t CHECK_INTERVAL_MS = 30UL * 60UL * 1000UL;  // every 30 min
const int      DEAD_AFTER_FAILS  = 6;     // ~3h of failures -> declare DEAD
const float    COLLAPSE_RATIO    = 0.5f;  // reject if rows drop below half
const size_t   MAX_CSV_BYTES     = 256UL * 1024UL;        // sanity ceiling

// ---- Display / LED ------------------------------------------------------
Arduino_DataBus *bus = new Arduino_ESP32SPI(LCD_DC, LCD_CS, LCD_SCLK, LCD_MOSI, GFX_NOT_DEFINED);
Arduino_GFX     *gfx = new Arduino_ST7789(bus, LCD_RST, 0 /*rotation*/, true /*IPS*/, 172, 320, 34, 0, 34, 0);
Adafruit_NeoPixel led(1, RGB_PIN, NEO_GRB + NEO_KHZ800);
WebServer server(80);

// ---- State --------------------------------------------------------------
enum Status { ST_BOOT, ST_OK, ST_STALE, ST_DEAD };
Status   status        = ST_BOOT;
uint64_t lastHash      = 0;
int      lastRows      = 0;
int      snapCount     = 0;
int      checkCount    = 0;
int      consecFails   = 0;
time_t   lastGoodTime  = 0;
time_t   lastCheckTime = 0;
String   lastError     = "";
bool     deployTriggered = false;
uint32_t lastCheckMs   = 0;

// ---- Forward declarations (Arduino auto-prototypes, but be explicit) -----
void onFail();
void runCheck();
void drawScreen();

// ---- Helpers ------------------------------------------------------------
// FNV-1a 64-bit: cheap content hash, only used to detect "did the sheet change".
uint64_t fnv1a(const String &s) {
  uint64_t h = 1469598103934665603ULL;
  for (size_t i = 0; i < s.length(); i++) { h ^= (uint8_t)s[i]; h *= 1099511628211ULL; }
  return h;
}

// Validate a data.json payload without a JSON library: it must look like the
// real file and hold a sane number of states. Returns the state count, or -1
// if the payload is not a usable snapshot (reason written to `reason`).
int validateSnapshot(const String &body, int prevRows, String &reason) {
  String t = body; t.trim();
  if (t.length() == 0)              { reason = "blank response"; return -1; }
  if (t.startsWith("<"))            { reason = "HTML/error page"; return -1; }
  if (!t.startsWith("{"))           { reason = "not json"; return -1; }
  if (t.indexOf("\"states\"") < 0)  { reason = "no states key"; return -1; }

  // Count states by their abbreviation keys. build.mjs pretty-prints, so each
  // state contributes exactly one "abbreviation": marker.
  int rows = 0, at = 0;
  while ((at = t.indexOf("\"abbreviation\":", at)) >= 0) { rows++; at += 15; }

  if (rows < 1) { reason = "no states"; return -1; }
  if (prevRows > 1 && rows < (int)ceil(prevRows * COLLAPSE_RATIO)) {
    reason = "state collapse " + String(prevRows) + " -> " + String(rows);
    return -1;
  }
  return rows;
}

String stampNow() {
  time_t now = time(nullptr);
  struct tm tm; gmtime_r(&now, &tm);
  char buf[32];
  strftime(buf, sizeof buf, "%Y%m%dT%H%M%SZ", &tm);
  return String(buf);
}

String relAge(time_t t) {
  if (t == 0) return "never";
  long s = time(nullptr) - t;
  if (s < 90)   return String(s) + "s ago";
  if (s < 5400) return String(s / 60) + "m ago";
  if (s < 172800) return String(s / 3600) + "h ago";
  return String(s / 86400) + "d ago";
}

// ---- SD persistence -----------------------------------------------------
void saveSnapshot(const String &body, int rows, uint64_t hash) {
  if (!SD.exists("/snapshots")) SD.mkdir("/snapshots");
  String path = "/snapshots/" + stampNow() + ".json";
  File f = SD.open(path, FILE_WRITE);
  if (f) { f.print(body); f.close(); }
  File l = SD.open("/latest.json", FILE_WRITE);
  if (l) { l.print(body); l.close(); }

  File m = SD.open("/manifest.json", FILE_WRITE);
  if (m) {
    m.printf("{\"status\":\"ok\",\"rows\":%d,\"hash\":\"%016llx\",\"snapshots\":%d,"
             "\"last_good\":%ld,\"latest\":\"%s\"}\n",
             rows, hash, snapCount, (long)lastGoodTime, path.c_str());
    m.close();
  }
}

void loadManifest() {
  File m = SD.open("/manifest.json", FILE_READ);
  if (!m) return;
  String j = m.readString(); m.close();
  // Tiny hand-parse; full JSON lib is overkill for five fields.
  auto num = [&](const char *k) -> long {
    int i = j.indexOf(k); if (i < 0) return 0;
    i = j.indexOf(':', i); return i < 0 ? 0 : atol(j.c_str() + i + 1);
  };
  lastRows     = num("\"rows\"");
  snapCount    = num("\"snapshots\"");
  lastGoodTime = num("\"last_good\"");
}

// ---- Network ------------------------------------------------------------
bool fetchSnapshot(String &out) {
  WiFiClientSecure client;
  client.setInsecure();                      // TODO: pin the site's CA for strictness
  HTTPClient http;
  if (!http.begin(client, DATA_JSON_URL)) return false;
  http.addHeader("cache-control", "no-cache");
  int code = http.GET();
  if (code != HTTP_CODE_OK) { lastError = "HTTP " + String(code); http.end(); return false; }
  int len = http.getSize();
  if (len > (int)MAX_CSV_BYTES) { lastError = "too large"; http.end(); return false; }
  out = http.getString();
  http.end();
  return true;
}

void firePostHook(const char *url) {
  if (!url || strlen(url) == 0) return;
  WiFiClientSecure client; client.setInsecure();
  HTTPClient http;
  if (http.begin(client, url)) { http.POST(""); http.end(); }
}

// ---- The guardian loop body --------------------------------------------
void runCheck() {
  checkCount++;
  lastCheckTime = time(nullptr);
  String body;
  if (!fetchSnapshot(body)) { onFail(); return; }

  String reason;
  int rows = validateSnapshot(body, lastRows, reason);
  if (rows < 0) { lastError = reason; onFail(); return; }

  // Good snapshot.
  consecFails = 0; deployTriggered = false; lastError = "";
  uint64_t hash = fnv1a(body);
  if (hash != lastHash) {
    lastHash = hash; lastRows = rows; snapCount++;
    lastGoodTime = time(nullptr);
    saveSnapshot(body, rows, hash);
  }
  status = ST_OK;
}

void onFail() {
  consecFails++;
  status = (consecFails >= DEAD_AFTER_FAILS) ? ST_DEAD : ST_STALE;
  if (status == ST_DEAD && !deployTriggered) {
    // Site looks gone or is serving garbage. Kick a rebuild from git; that
    // can clear a bad deploy. The device keeps serving /latest.json either way.
    firePostHook(DEPLOY_HOOK_URL);
    deployTriggered = true;
  }
}

// ---- HTTP server (serve the backup on the LAN) --------------------------
void serveFile(const char *path, const char *type) {
  File f = SD.open(path, FILE_READ);
  if (!f) { server.send(404, "text/plain", "no snapshot yet"); return; }
  server.streamFile(f, type);
  f.close();
}

void setupServer() {
  server.on("/", []() {
    server.send(200, "text/html",
      "<h2>narcan.delivery data guardian</h2>"
      "<p><a href='/latest.json'>latest.json</a> &middot; "
      "<a href='/manifest.json'>manifest.json</a></p>");
  });
  server.on("/latest.json",   []() { serveFile("/latest.json", "application/json"); });
  server.on("/manifest.json", []() { serveFile("/manifest.json", "application/json"); });
  server.begin();
}

// ---- Display ------------------------------------------------------------
uint16_t statusColor() {
  switch (status) {
    case ST_OK:    return RGB565_GREEN;
    case ST_STALE: return RGB565_YELLOW;
    case ST_DEAD:  return RGB565_RED;
    default:       return RGB565_CYAN;
  }
}
const char *statusText() {
  switch (status) { case ST_OK: return "OK"; case ST_STALE: return "STALE";
                    case ST_DEAD: return "DEAD"; default: return "BOOT"; }
}

void setLed() {
  uint32_t c;
  switch (status) {
    case ST_OK:    c = led.Color(0, 18, 0);  break;   // dim green
    case ST_STALE: c = led.Color(22, 14, 0); break;   // amber
    case ST_DEAD:  c = led.Color(28, 0, 0);  break;   // red
    default:       c = led.Color(0, 0, 18);  break;   // blue
  }
  led.setPixelColor(0, c); led.show();
}

void drawScreen() {
  gfx->fillScreen(RGB565_BLACK);
  gfx->setTextColor(RGB565_WHITE);
  gfx->setTextSize(2);
  gfx->setCursor(8, 8);  gfx->print("narcan.delivery");
  gfx->setTextSize(1);
  gfx->setTextColor(0x8410);                          // grey
  gfx->setCursor(8, 30); gfx->print("data guardian");

  gfx->fillRect(0, 46, 172, 30, statusColor());
  gfx->setTextColor(RGB565_BLACK); gfx->setTextSize(3);
  gfx->setCursor(10, 50); gfx->print(statusText());

  gfx->setTextSize(1); gfx->setTextColor(RGB565_WHITE);
  int y = 92; const int dy = 16;
  auto row = [&](const String &s) { gfx->setCursor(8, y); gfx->print(s); y += dy; };
  row("states:    " + String(lastRows));
  row("snapshots: " + String(snapCount));
  row("last good: " + relAge(lastGoodTime));
  row("checked:   " + relAge(lastCheckTime));
  row("checks:    " + String(checkCount));
  row("fails:     " + String(consecFails));
  uint32_t freeMB = (SD.totalBytes() - SD.usedBytes()) / (1024 * 1024);
  row("SD free:   " + String(freeMB) + " MB");
  row("ip: " + (WiFi.status() == WL_CONNECTED ? WiFi.localIP().toString() : String("--")));
  if (status >= ST_STALE && lastError.length()) {
    gfx->setTextColor(RGB565_YELLOW); row(lastError.substring(0, 26));
  }
  setLed();
}

// ---- Arduino entrypoints ------------------------------------------------
void setup() {
  Serial.begin(115200);
  pinMode(LCD_BL, OUTPUT); digitalWrite(LCD_BL, HIGH);
  gfx->begin(); gfx->fillScreen(RGB565_BLACK);
  led.begin(); led.setBrightness(40); setLed();

  gfx->setCursor(8, 8); gfx->setTextColor(RGB565_WHITE);
  gfx->setTextSize(1); gfx->print("booting...");

  // Shared SPI bus for the SD card (LCD already owns MOSI/SCLK).
  SPI.begin(LCD_SCLK, SD_MISO, LCD_MOSI, SD_CS);
  if (!SD.begin(SD_CS, SPI)) {
    gfx->setCursor(8, 24); gfx->setTextColor(RGB565_RED); gfx->print("SD init failed");
  } else {
    loadManifest();
  }

  WiFi.mode(WIFI_STA); WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  for (int i = 0; i < 40 && WiFi.status() != WL_CONNECTED; i++) delay(250);

  configTime(0, 0, "pool.ntp.org", "time.nist.gov");   // UTC for stamps
  setupServer();

  runCheck();                 // first check immediately
  lastCheckMs = millis();
  drawScreen();
}

void loop() {
  server.handleClient();
  if (millis() - lastCheckMs >= CHECK_INTERVAL_MS) {
    if (WiFi.status() != WL_CONNECTED) WiFi.reconnect();
    runCheck();
    lastCheckMs = millis();
    drawScreen();
  }
  delay(20);
}
