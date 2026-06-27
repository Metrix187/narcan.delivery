/* Shared sheet CSV parsing + snapshot validation.
 *
 * One definition of "what is a good snapshot", used by:
 *   - build.mjs          (merge live sheet / backup mirror into the dataset)
 *   - snapshot-sheet.mjs (mirror the sheet into version control as a backup)
 *   - the ESP32-C6 guardian firmware runs a hand-port of validateSheet()
 *
 * Keeping this in one place is what lets the laptop build, the CI mirror, and
 * the hardware backup all agree on when the sheet is healthy vs. degraded.
 */

// Parse a Google-Sheets-published CSV into { ABBR: { header: value, ... } }.
// Quote-aware. Keys by the uppercased `abbreviation` column; rows without one
// are dropped. (Identical behaviour to the merge the site has always used.)
export function parseSheetCSV(csv) {
  const rows = []; let field = '', row = [], inQ = false;
  for (let i = 0; i < csv.length; i++) {
    const ch = csv[i], next = csv[i + 1];
    if (inQ) {
      if (ch === '"' && next === '"') { field += '"'; i++; }
      else if (ch === '"') inQ = false;
      else field += ch;
    } else {
      if (ch === '"') inQ = true;
      else if (ch === ',') { row.push(field); field = ''; }
      else if (ch === '\n' || ch === '\r') {
        if (field.length || row.length) { row.push(field); rows.push(row); row = []; field = ''; }
        if (ch === '\r' && next === '\n') i++;
      } else field += ch;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  if (!rows.length) return {};
  const headers = rows[0].map(h => h.trim());
  const out = {};
  for (let r = 1; r < rows.length; r++) {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = (rows[r][i] || '').trim(); });
    if (obj.abbreviation) out[obj.abbreviation.toUpperCase()] = obj;
  }
  return out;
}

/* Decide whether a freshly fetched payload is a GOOD snapshot worth keeping.
 *
 * The whole point of the backup is to never replace good data with garbage,
 * so this is deliberately strict and conservative:
 *   - a deleted / unpublished sheet usually returns an HTML error page  -> reject
 *   - an empty body or one missing the `abbreviation` header             -> reject
 *   - zero parseable state rows                                          -> reject
 *   - a sudden collapse vs. the last known-good (e.g. 50 rows -> 2)      -> reject
 *
 * `prevRows` is the row count of the current last-known-good snapshot (0 if
 * none yet). The collapse guard only kicks in once we have a real baseline.
 *
 * Returns { ok, reason } and, when ok, { rows, map }.
 */
export function validateSheet(csv, { prevRows = 0, collapseRatio = 0.5 } = {}) {
  if (csv == null) return { ok: false, reason: 'empty response' };
  const text = String(csv);
  if (!text.trim()) return { ok: false, reason: 'blank response' };

  const firstLine = text.split(/\r?\n/, 1)[0] || '';
  if (text.trimStart().startsWith('<')) return { ok: false, reason: 'HTML/error page, not CSV' };
  if (!/\babbreviation\b/i.test(firstLine)) return { ok: false, reason: 'missing abbreviation header' };

  const map = parseSheetCSV(text);
  const rows = Object.keys(map).length;
  if (rows < 1) return { ok: false, reason: 'no data rows' };

  if (prevRows > 1 && rows < Math.ceil(prevRows * collapseRatio)) {
    return { ok: false, reason: `row collapse ${prevRows} -> ${rows}` };
  }
  return { ok: true, rows, map };
}
