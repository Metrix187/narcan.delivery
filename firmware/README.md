# narcan.delivery data guardian (ESP32-C6)

An always-on, off-cloud backup of the published dataset, on a
**Waveshare ESP32-C6-LCD-1.47**. The google sheet is retired; git is the
source of truth and the live site publishes it at
`https://narcan.delivery/data.json`. This device keeps a copy of that file
outside the cloud entirely:

| Copy | Where | Survives |
|------|-------|----------|
| 1. git (GitHub + every clone) | the cloud | the dataset's real home |
| 2. Cloudflare's deployed copy | the cloud | GitHub being down or locked |
| 3. **this device** | your desk | losing the cloud itself |

## What it does

- Every 30 min: fetch `data.json` → validate → if good **and changed**, write
  a timestamped snapshot to microSD and update `/latest.json`.
- A bad fetch (HTML error page, empty body, not-JSON, or a payload that lost
  half its states) **never overwrites** the last known-good copy. It trips the
  status to `STALE`, then `DEAD` after ~3h of failures.
- **LCD** shows status, state count, snapshot count, last-good age, fail
  count, IP, free SD.
- **RGB LED**: green `OK` / amber `STALE` / red `DEAD`.
- Serves the backup on the LAN: `http://<device-ip>/latest.json` and
  `/manifest.json`.
- On `DEAD`, optionally POSTs your Cloudflare deploy hook, which rebuilds the
  site from git and can clear a bad deploy.

> **Reflash needed:** this firmware was rewritten for the post-sheet world
> (JSON validation, `DATA_JSON_URL`, `/latest.json`). A device still running
> the sheet-era build will go STALE once the sheet is unpublished, which is
> harmless but red. It has not been compiled/flashed since the rewrite; build
> it once in the IDE before flashing day.

## Build & flash

1. **Arduino IDE** with the **arduino-esp32** core (3.x). Board:
   *ESP32C6 Dev Module*.
2. Library Manager → install **Arduino_GFX_Library** (moononournation) and
   **Adafruit NeoPixel**.
3. `cp secrets.h.example secrets.h` and fill in WiFi + (optional) deploy hook.
   `secrets.h` is gitignored.
4. Insert a FAT32 microSD. Flash. First boot fetches and seeds `/latest.json`.

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

If the cloud copies are ever gone, the device's `latest.json` holds the full
dataset (all 50 states, every field). Rebuilding `data.js` from it is a
mechanical transform of `states[]`; the repo history also has every prior
version.

```bash
curl http://<device-ip>/latest.json -o data-recovered.json
```
