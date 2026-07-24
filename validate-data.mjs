// Data quality gate for data.js. With the google sheet gone, git commits are
// the only path to production, so this is where bad data gets caught: the
// build refuses to ship a dataset that fails these checks.
//
// Errors fail the build. Warnings print and pass.
// Run standalone:  node validate-data.mjs

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));

const isHttpUrl = (u) => {
  try { const p = new URL(u); return p.protocol === 'https:' || p.protocol === 'http:'; }
  catch { return false; }
};
const isISODate = (v) => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(new Date(v).getTime());

// house style: plain hyphens and straight quotes only
const BANNED_CHARS = [
  ['—', 'em dash'],
  ['–', 'en dash'],
  ['‑', 'non-breaking hyphen'],
  ['‘', 'curly quote'], ['’', 'curly quote'],
  ['“', 'curly quote'], ['”', 'curly quote'],
];

export function validateData(data, adjacency = {}, { esStates = null } = {}) {
  const errors = [];
  const warnings = [];
  const err = (m) => errors.push(m);
  const warn = (m) => warnings.push(m);

  if (!Array.isArray(data)) return { errors: ['NALOXONE_DATA is not an array'], warnings };
  if (data.length !== 50) err(`expected 50 states, found ${data.length}`);

  const seenAbbr = new Set();
  const seenName = new Set();
  const sorted = data.slice().sort((a, b) => String(a.state).localeCompare(String(b.state)));
  data.forEach((s, i) => {
    if (s.state !== sorted[i]?.state) { /* order is enforced once, below */ }
  });
  if (data.map(s => s.state).join('|') !== sorted.map(s => s.state).join('|')) {
    err('states are not sorted alphabetically (data.js says they should be)');
  }

  // scan every string in a state for banned characters / sentinels
  const scanStrings = (val, where) => {
    if (typeof val === 'string') {
      if (val.trim().toUpperCase() === 'UNKNOWN') err(`${where}: literal UNKNOWN sentinel leaked into the dataset`);
      for (const [ch, label] of BANNED_CHARS) {
        if (val.includes(ch)) err(`${where}: contains ${label} (house style: plain punctuation only)`);
      }
    } else if (Array.isArray(val)) {
      val.forEach((v, i) => scanStrings(v, `${where}[${i}]`));
    } else if (val && typeof val === 'object') {
      for (const [k, v] of Object.entries(val)) scanStrings(v, `${where}.${k}`);
    }
  };

  const checkOrg = (org, where) => {
    if (!org.name || !String(org.name).trim()) err(`${where}: org missing name`);
    if (org.website && !isHttpUrl(org.website)) err(`${where} (${org.name}): bad website url: ${org.website}`);
    // letters in a phone (vanity numbers) break the tel: link the renderer
    // builds by stripping non-digits, so those are errors, not style nits.
    if (org.phone && /[a-z]/i.test(org.phone)) err(`${where} (${org.name}): phone has letters; tel: links dial digits only (${org.phone})`);
    else if (org.phone && !/^[0-9()+\-. ]{3,20}$/.test(org.phone)) warn(`${where} (${org.name}): odd phone format: ${org.phone}`);
  };

  for (const s of data) {
    const ab = s.abbreviation;
    const where = ab || s.state || '??';

    if (!/^[A-Z]{2}$/.test(ab || '')) err(`${where}: bad abbreviation`);
    if (seenAbbr.has(ab)) err(`${where}: duplicate abbreviation`);
    seenAbbr.add(ab);
    if (!s.state || !String(s.state).trim()) err(`${where}: missing state name`);
    if (seenName.has(s.state)) err(`${where}: duplicate state name`);
    seenName.add(s.state);

    if (!isISODate(s.last_updated)) err(`${where}: last_updated is not YYYY-MM-DD (${s.last_updated})`);
    else if (new Date(s.last_updated) > new Date(Date.now() + 86400000)) err(`${where}: last_updated is in the future`);

    const L = s.legal_framework || {};
    if (!L.naloxone_legal_status?.trim()) err(`${where}: missing naloxone_legal_status`);
    else if (L.naloxone_legal_status.length > 80) warn(`${where}: naloxone_legal_status is ${L.naloxone_legal_status.length} chars; it renders in a pill, keep it short`);
    const gs = L.good_samaritan_overdose_immunity || {};
    if (typeof gs.exists !== 'boolean') err(`${where}: good_samaritan.exists must be true/false`);
    if (!gs.scope?.trim()) err(`${where}: missing good_samaritan.scope`);

    const ph = s.access_channels?.pharmacies || {};
    for (const k of ['mechanism', 'medicaid_coverage_notes', 'typical_cost']) {
      if (!ph[k]?.trim()) err(`${where}: missing pharmacies.${k}`);
    }

    const pg = s.practical_guidance || {};
    if (!pg.how_to_get_naloxone_quickly?.trim()) err(`${where}: missing how_to_get_naloxone_quickly`);
    if (!pg.barriers_and_workarounds?.trim()) warn(`${where}: no barriers_and_workarounds (card will be omitted)`);

    const comm = s.access_channels?.community_programs || [];
    const mail = s.access_channels?.mail_based_programs || [];
    if (!comm.length) warn(`${where}: no community programs listed`);
    if (!mail.length) warn(`${where}: no mail programs listed`);
    comm.forEach((o, i) => checkOrg(o, `${where}.community[${i}]`));
    mail.forEach((o, i) => checkOrg(o, `${where}.mail[${i}]`));

    if (!Array.isArray(s.sources) || !s.sources.length) warn(`${where}: no sources (provenance gap)`);
    else s.sources.forEach((u, i) => { if (!isHttpUrl(u)) err(`${where}.sources[${i}]: bad url: ${u}`); });

    scanStrings(s, where);
  }

  // adjacency sanity: every code real, no self-loops, all edges symmetric
  for (const [a, list] of Object.entries(adjacency)) {
    if (!seenAbbr.has(a)) err(`adjacency: unknown state ${a}`);
    for (const b of list || []) {
      if (b === a) err(`adjacency: ${a} borders itself`);
      if (!seenAbbr.has(b)) err(`adjacency: ${a} lists unknown neighbor ${b}`);
      else if (!(adjacency[b] || []).includes(a)) err(`adjacency: ${a} lists ${b} but not vice versa`);
    }
  }

  // spanish overlay, if provided: keys must be real states, arrays must fit
  if (esStates) {
    const byAbbr = Object.fromEntries(data.map(s => [s.abbreviation, s]));
    for (const [ab, es] of Object.entries(esStates)) {
      if (!byAbbr[ab]) { err(`data.es.js: unknown state ${ab}`); continue; }
      const en = byAbbr[ab];
      const enComm = en.access_channels?.community_programs?.length || 0;
      const enMail = en.access_channels?.mail_based_programs?.length || 0;
      if ((es.community_services?.length || 0) > enComm) warn(`data.es.js ${ab}: more community_services than english orgs (extras ignored)`);
      if ((es.mail_services?.length || 0) > enMail) warn(`data.es.js ${ab}: more mail_services than english orgs (extras ignored)`);
    }
  }

  return { errors, warnings };
}

// CLI entry: validate the repo's real data files.
const isMain = process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url;
if (isMain) {
  const load = (src) => { const w = {}; new Function('window', src)(w); return w; };
  const w = load(await fs.readFile(path.join(ROOT, 'data.js'), 'utf8'));
  let esStates = null;
  try { esStates = load(await fs.readFile(path.join(ROOT, 'data.es.js'), 'utf8')).NALOXONE_ES || null; } catch {}
  const { errors, warnings } = validateData(w.NALOXONE_DATA, w.NALOXONE_ADJACENCY || {}, { esStates });
  warnings.forEach(m => console.warn('  warn:', m));
  if (errors.length) {
    errors.forEach(m => console.error(' ERROR:', m));
    console.error(`\n${errors.length} error(s). Refusing to bless this dataset.`);
    process.exit(1);
  }
  console.log(`✓ data.js valid (${w.NALOXONE_DATA.length} states, ${warnings.length} warning(s))`);
}
