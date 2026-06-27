# backup/: durable mirror of the Google Sheet

Written by [`snapshot-sheet.mjs`](../snapshot-sheet.mjs), refreshed hourly by
`.github/workflows/mirror-sheet.yml`. Do not edit by hand.

- `sheet-latest.csv`: last known-good CSV. `build.mjs` reads this if the live
  sheet is ever unreachable, so a deleted sheet still yields the latest *real*
  data instead of dropping to the embedded baseline.
- `history/<timestamp>.csv`: every distinct version of the sheet, immutable.
- `manifest.json`: `status` (ok / stale / dead), row count, content hash,
  last-good / last-checked timestamps, last error.

The snapshotter only writes when the fetch is **both valid and changed**, and
**never** overwrites `sheet-latest.csv` with an error page, an empty body, or a
sudden row collapse. A broken sheet shows up as `status: "stale"` (we still hold
a good copy) or `"dead"`, not as corrupted backup data.
