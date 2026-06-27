# narcan.delivery sheet guardian (ESP32-C6)

An always-on, off-cloud backup of the published Google Sheet, on a
**Waveshare ESP32-C6-LCD-1.47**. It is the third copy in a defense-in-depth chain:

| Copy | Where | Survives |
|------|-------|----------|
| 1. `data.js` baseline | git | a deleted sheet (site rebuilds from baseline) |
| 2. `backup/` mirror | git, hourly via `snapshot-sheet.mjs` | lost *edits* (the un-backed-up delta) |
| 3. **this device** | your desk | losing the cloud itself (GitHub/Cloudflare down or locked) |

It runs a hand-port of the same `validateSheet()` rules as
[`snapshot-sheet.mjs`](../snapshot-sheet.mjs), so all three copies agree on what
a healthy snapshot looks like and none of them ever overwrites good data with an
error page.

## What it does

- Every 30 min: fetch the CSV → validate → if good **and changed**, write a
  timestamped snapshot to microSD and update `/latest.csv`.
- A bad fetch (HTML error page, empty body, header-less, or a sudden row
  collapse) **never overwrites** the last known-good copy. It trips the status
  to `STALE`, then `DEAD` after ~3h of failures.
- **LCD** shows status, rows, snapshot count, last-good age, fail count, IP, free SD.
- **RGB LED**: green `OK` / amber `STALE` / red `DEAD`.
- Serves the backup on the LAN: `http://<device-ip>/latest.csv` and `/manifest.json`.
- On `DEAD`, optionally POSTs your Cloudflare deploy hook to rebuild the live
  site (which falls back to the git `backup/` mirror).

## Build & flash

1. **Arduino IDE** with the **arduino-esp32** core (3.x). Board:
   *ESP32C6 Dev Module*.
2. Library Manager → install **Arduino_GFX_Library** (moononournation) and
   **Adafruit NeoPixel**.
3. `cp secrets.h.example secrets.h` and fill in WiFi + (optional) deploy hook.
   `secrets.h` is gitignored.
4. Insert a FAT32 microSD. Flash. First boot fetches and seeds `/latest.csv`.

## Pinout (verified)

Verified against the [CircuitPython board definition](https://github.com/adafruit/circuitpython/tree/main/ports/espressif/boards/waveshare_esp32_c6_lcd_1_47)
for this exact board. The **SD card and LCD share one SPI bus** (MOSI 6 / SCLK 7);
GPIO4/5 are dual-purpose (also on the header). If SD init ever fails *after* the
display initialises, that shared bus is the thing to debug, not the pin numbers.

| Signal | GPIO | | Signal | GPIO |
|--------|------|-|--------|------|
| LCD MOSI | 6 | | LCD DC | 15 |
| LCD SCLK | 7 | | LCD RST | 21 |
| LCD CS | 14 | | LCD BL | 22 |
| SD CS | 4 | | SD MISO | 5 |
| RGB (WS2812) | 8 | | Boot button | 9 |

## Re-seeding from the device

If the sheet is ever lost, grab the device's copy and either re-create the sheet
from it or feed it straight to the build:

```bash
curl http://<device-ip>/latest.csv -o backup/sheet-latest.csv   # then commit
# or point a one-off build straight at the device:
SHEET_CSV_URL="http://<device-ip>/latest.csv" npm run build
```
