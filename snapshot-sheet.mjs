#!/usr/bin/env node
/* Mirror the published Google Sheet into version control as a durable backup.
 *
 * The live site already survives a deleted sheet (build.mjs falls back to the
 * committed data.js baseline). What it does NOT survive is losing the *edits*
 * made in the sheet since they were last folded into data.js. This script
 * captures that delta continuously so it can never silently disappear.
 *
 *   fetch the CSV
 *     -> validateSheet() (shared rules: reject HTML error pages, empty bodies,
 *        header-less payloads, and sudden row collapses vs. last known-good)
 *     -> if GOOD and changed: write backup/sheet-latest.csv + a timestamped
 *        history entry, refresh backup/manifest.json
 *     -> if BAD: touch nothing but the manifest status, warn, exit 0
 *        (never overwrite a good snapshot with garbage)
 *
 * The ESP32-C6 guardian firmware runs a hand-port of this same loop against
 * its onboard SD card, as a second copy that lives outside the cloud.
 *
 * Usage:  node snapshot-sheet.mjs
 * Env:    SHEET_CSV_URL  override the source CSV URL
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { validateSheet } from './sheet-csv.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const BACKUP = path.join(ROOT, 'backup');
const HISTORY = path.join(BACKUP, 'history');
const LATEST = path.join(BACKUP, 'sheet-latest.csv');
const MANIFEST = path.join(BACKUP, 'manifest.json');

// Keep the source URL identical to build.mjs so the backup mirrors exactly what
// the build consumes.
const SHEET_CSV_URL = process.env.SHEET_CSV_URL ||
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQo7lo4oD6rLjt4NWISOR3AJy1AtPOA3com6ntoo6LX_lSV8dmylHDjLcj3KIklR44peURjksWPo86R/pub?gid=0&single=true&output=csv';

const sha256 = (s) => crypto.createHash('sha256').update(s).digest('hex');
const nowISO = () => new Date().toISOString();
const stamp = () => nowISO().replace(/[:.]/g, '-');           // filesystem-safe
const warn = (m) => console.log(`::warning::${m}`);            // surfaces in GH Actions

async function readManifest() {
  try { return JSON.parse(await fs.readFile(MANIFEST, 'utf8')); }
  catch { return { status: 'none', sha256: null, rows: 0, history_count: 0 }; }
}

async function writeManifest(m) {
  await fs.writeFile(MANIFEST, JSON.stringify(m, null, 2) + '\n');
}

async function main() {
  await fs.mkdir(HISTORY, { recursive: true });
  const prev = await readManifest();

  let csv = null, fetchError = null;
  try {
    const res = await fetch(SHEET_CSV_URL, { headers: { 'cache-control': 'no-cache' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    csv = await res.text();
  } catch (err) {
    fetchError = err.message;
  }

  const check = fetchError
    ? { ok: false, reason: `fetch failed: ${fetchError}` }
    : validateSheet(csv, { prevRows: prev.rows || 0 });

  if (!check.ok) {
    // BAD snapshot: do NOT touch the last known-good. Record the failure so the
    // dashboard / device display can show the sheet has gone stale or dead --
    // but only when the status actually CHANGES, so a persistently broken sheet
    // doesn't re-commit (and re-deploy) every single hour.
    warn(`Sheet snapshot rejected (${check.reason}); keeping last known-good.`);
    const status = prev.sha256 ? 'stale' : 'dead';   // stale = we still hold a good copy
    if (prev.status !== status || prev.last_error !== check.reason) {
      await writeManifest({ ...prev, status, last_checked_at: nowISO(), last_error: check.reason, source_url: SHEET_CSV_URL });
    }
    return; // exit 0 so the hourly job stays green; the warning is the signal
  }

  const hash = sha256(csv);
  if (hash === prev.sha256) {
    // Healthy and unchanged: leave the manifest untouched so nothing is
    // committed this run, UNLESS we're recovering from a prior stale/dead state.
    console.log(`No change (${check.rows} rows, ${hash.slice(0, 12)}). Last good still current.`);
    if (prev.status !== 'ok' || prev.last_error) {
      await writeManifest({ ...prev, status: 'ok', last_checked_at: nowISO(), last_error: null });
    }
    return;
  }

  // GOOD and changed: persist it as the new last known-good + an immutable
  // timestamped history entry (so we keep every distinct version of the sheet).
  const histName = `${stamp()}.csv`;
  await fs.writeFile(path.join(HISTORY, histName), csv);
  await fs.writeFile(LATEST, csv);
  await writeManifest({
    status: 'ok',
    source_url: SHEET_CSV_URL,
    sha256: hash,
    rows: check.rows,
    last_good_at: nowISO(),
    last_checked_at: nowISO(),
    last_error: null,
    history_count: (prev.history_count || 0) + 1,
    latest_history: histName,
  });
  console.log(`✓ New snapshot saved: ${check.rows} rows, ${hash.slice(0, 12)} -> history/${histName}`);
}

main().catch(err => { console.error(err); process.exit(1); });
