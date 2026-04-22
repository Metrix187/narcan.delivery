#!/usr/bin/env node
/* narcan.delivery — prerender build
 *
 * Reads data.js + index.html and emits:
 *   /states/<slug>/index.html   (one per state, with content inlined and
 *                                unique <title>/canonical/description)
 *   /data.json                  (machine-readable mirror of the dataset,
 *                                for automation consumers)
 *   /sitemap.xml                (clean-URL sitemap)
 *
 * The SPA still works from the homepage. Prerendered pages give crawlers,
 * link-unfurlers, and JS-disabled users real HTML for every state.
 *
 * Usage:
 *   node build.mjs
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SITE = 'https://narcan.delivery';

// Same Google Sheet URL used by the client. If this URL is reachable at build
// time, its values are merged INTO the prerendered HTML — so crawlers see the
// same data humans see. Override via SHEET_CSV_URL env var.
const SHEET_CSV_URL = process.env.SHEET_CSV_URL ||
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQo7lo4oD6rLjt4NWISOR3AJy1AtPOA3com6ntoo6LX_lSV8dmylHDjLcj3KIklR44peURjksWPo86R/pub?gid=0&single=true&output=csv';

// ---------------------------------------------------------------------------
// Load dataset by evaluating data.js in a minimal shim (Node has no `window`).
// ---------------------------------------------------------------------------
async function loadData() {
  const src = await fs.readFile(path.join(ROOT, 'data.js'), 'utf8');
  const sandbox = { window: {} };
  // eslint-disable-next-line no-new-func
  new Function('window', src)(sandbox.window);
  const data = sandbox.window.NALOXONE_DATA;
  if (!Array.isArray(data)) throw new Error('data.js did not set window.NALOXONE_DATA');
  return data.slice().sort((a, b) => a.state.localeCompare(b.state));
}

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const esc = (s) => String(s ?? '').replace(/[&<>"']/g,
  (m) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[m])
);

const formatDate = (iso) => {
  if (!iso) return '';
  const d = new Date(iso); if (isNaN(d)) return '';
  return d.toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' });
};

const isStale = (iso) => {
  if (!iso) return false;
  const d = new Date(iso); if (isNaN(d)) return false;
  const cutoff = new Date(); cutoff.setMonth(cutoff.getMonth() - 6);
  return d < cutoff;
};

// ---------------------------------------------------------------------------
// Server-side mirror of the state-card renderer in app.js.
// Keep the HTML shape in sync with #tpl-state in index.html.
// ---------------------------------------------------------------------------
function orgItemHTML(org) {
  const parts = [`<strong>${esc(org.name)}</strong>`];
  if (org.services) parts.push(`<span class="services">${esc(org.services)}</span>`);
  const contact = [];
  if (org.website) contact.push(`<a href="${esc(org.website)}" target="_blank" rel="noopener noreferrer">Visit website ↗</a>`);
  if (org.phone)   contact.push(`<a href="tel:${esc(org.phone.replace(/[^0-9+]/g,''))}">${esc(org.phone)}</a>`);
  if (org.email)   contact.push(`<a href="mailto:${esc(org.email)}">${esc(org.email)}</a>`);
  if (contact.length) parts.push(`<span class="contact">${contact.join('')}</span>`);
  const cost = org.cost ? `<span class="cost-tag">${esc(org.cost)}</span>` : '';
  return `<li class="org-item"><div style="flex:1;min-width:0;">${parts.join('')}</div>${cost}</li>`;
}

function renderStateHTML(s) {
  const gs   = s.legal_framework?.good_samaritan_overdose_immunity || {};
  const legal = s.legal_framework?.naloxone_legal_status;
  const upd   = s.last_updated;
  const ph    = s.access_channels?.pharmacies || {};
  const mail  = s.access_channels?.mail_based_programs || [];
  const comm  = s.access_channels?.community_programs || [];

  const pills = [];
  if (legal) pills.push(`<span class="pill pill-legal">${esc(legal)}</span>`);
  pills.push(gs.exists
    ? `<span class="pill pill-gs ok">Good Samaritan law: yes</span>`
    : `<span class="pill pill-gs none">Good Samaritan law: limited</span>`);
  if (upd) {
    const stale = isStale(upd);
    pills.push(`<span class="pill pill-updated${stale ? ' stale' : ''}">${stale ? 'Needs review · ' : 'Verified '}${esc(formatDate(upd))}</span>`);
  }

  return `
  <article class="wrap narrow state-article">
    <header class="state-header">
      <p class="eyebrow"><a href="/" class="change-state">← Change state</a></p>
      <h2 class="state-title">Naloxone in ${esc(s.state)}</h2>
      <div class="pills" role="list">${pills.join('')}</div>
    </header>

    <div class="card card-lead">
      <p class="card-kicker">Your fastest option</p>
      <p class="lead-text">${esc(s.practical_guidance?.how_to_get_naloxone_quickly || '')}</p>
    </div>

    <div class="card">
      <div class="card-head">
        <span class="card-badge badge-sky" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.8" fill="none"/></svg>
        </span>
        <h3>At a pharmacy</h3>
      </div>
      <dl class="kv">
        <dt>How it's dispensed</dt><dd>${esc(ph.mechanism || '—')}</dd>
        <dt>Medicaid</dt><dd>${esc(ph.medicaid_coverage_notes || '—')}</dd>
        <dt>Typical cost</dt><dd>${esc(ph.typical_cost || '—')}</dd>
      </dl>
    </div>

    ${mail.length ? `
    <div class="card">
      <div class="card-head">
        <span class="card-badge badge-mint" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="7" width="18" height="12" rx="1.5" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M3 9l9 6 9-6" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>
        </span>
        <h3>Free by mail</h3>
      </div>
      <ul class="org-list">${mail.map(orgItemHTML).join('')}</ul>
    </div>` : ''}

    ${comm.length ? `
    <div class="card">
      <div class="card-head">
        <span class="card-badge badge-peach" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 21s-7-7.58-7-12a7 7 0 1114 0c0 4.42-7 12-7 12z" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="1.8" fill="none"/></svg>
        </span>
        <h3>Local programs</h3>
      </div>
      <ul class="org-list">${comm.map(orgItemHTML).join('')}</ul>
    </div>` : ''}

    <div class="card card-legal">
      <div class="card-head">
        <span class="card-badge badge-lavender" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 3l8 4v5c0 4.5-3.2 8.3-8 9-4.8-.7-8-4.5-8-9V7l8-4z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/></svg>
        </span>
        <h3>What the Good Samaritan law actually covers</h3>
      </div>
      <p class="card-body">${esc(gs.scope || 'No specific Good Samaritan protections are documented for this state.')}</p>
    </div>

    ${s.practical_guidance?.barriers_and_workarounds ? `
    <div class="card">
      <div class="card-head">
        <span class="card-badge badge-peach" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 3l10 18H2L12 3z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/><path d="M12 10v5M12 18v.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
        <h3>Known barriers &amp; workarounds</h3>
      </div>
      <p class="card-body">${esc(s.practical_guidance.barriers_and_workarounds)}</p>
    </div>` : ''}

    <div class="share">
      <button class="btn btn-ghost" id="share-btn" type="button">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M10 14a3.5 3.5 0 004.9 0l4-4a3.5 3.5 0 00-5-5l-1 1M14 10a3.5 3.5 0 00-4.9 0l-4 4a3.5 3.5 0 005 5l1-1" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>
        <span id="share-label">Copy link to this state</span>
      </button>
      <a class="btn btn-ghost" href="/#how-to-use">How to use it →</a>
    </div>
  </article>`;
}

// ---------------------------------------------------------------------------
// Per-state structured data (JSON-LD) — GovernmentService + BreadcrumbList
// ---------------------------------------------------------------------------
function jsonLdForState(s, url) {
  const gs = s.legal_framework?.good_samaritan_overdose_immunity;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentService",
        "name": `How to get naloxone in ${s.state}`,
        "serviceType": "Opioid overdose reversal medication access",
        "areaServed": { "@type": "State", "name": s.state },
        "audience": { "@type": "Audience", "audienceType": "General public" },
        "termsOfService": gs?.scope || '',
        "url": url
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
          { "@type": "ListItem", "position": 2, "name": s.state, "item": url }
        ]
      }
    ]
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Optional: fetch Google Sheet at build time and merge overrides into the
// dataset BEFORE prerendering. Mirrors the runtime merge in app.js so the
// HTML served to crawlers matches what users see in the browser.
// ---------------------------------------------------------------------------
function parseSheetCSV(csv) {
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

function mergeSheet(base, ov) {
  if (!ov) return base;
  const gs = base.legal_framework?.good_samaritan_overdose_immunity || {};
  const gsExists = ov.gs_exists === 'true' ? true : ov.gs_exists === 'false' ? false : gs.exists;
  return {
    ...base,
    last_updated: ov.last_updated || base.last_updated,
    legal_framework: {
      ...base.legal_framework,
      naloxone_legal_status: ov.naloxone_legal_status || base.legal_framework?.naloxone_legal_status,
      good_samaritan_overdose_immunity: { exists: gsExists, scope: ov.gs_scope || gs.scope }
    },
    access_channels: {
      ...base.access_channels,
      pharmacies: {
        ...base.access_channels.pharmacies,
        mechanism:               ov.pharmacy_mechanism || base.access_channels.pharmacies?.mechanism,
        medicaid_coverage_notes: ov.medicaid_notes     || base.access_channels.pharmacies?.medicaid_coverage_notes,
        typical_cost:            ov.typical_cost       || base.access_channels.pharmacies?.typical_cost,
      }
    },
    practical_guidance: {
      how_to_get_naloxone_quickly: ov.how_to_get_quickly || base.practical_guidance?.how_to_get_naloxone_quickly,
      barriers_and_workarounds:    ov.barriers           || base.practical_guidance?.barriers_and_workarounds,
    }
  };
}

async function applySheetOverrides(data) {
  if (!SHEET_CSV_URL) return data;
  try {
    const res = await fetch(SHEET_CSV_URL, { headers: { 'cache-control': 'no-cache' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const csv = await res.text();
    const map = parseSheetCSV(csv);
    const hits = Object.keys(map).length;
    if (!hits) { console.log('  (sheet returned no rows, using embedded only)'); return data; }
    console.log(`✓ Fetched Google Sheet — ${hits} row(s) merged`);
    return data.map(s => map[s.abbreviation] ? mergeSheet(s, map[s.abbreviation]) : s);
  } catch (err) {
    console.log(`  (sheet fetch skipped: ${err.message} — using embedded only)`);
    return data;
  }
}

async function main() {
  let data = await loadData();
  data = await applySheetOverrides(data);
  const tpl  = await fs.readFile(path.join(ROOT, 'index.html'), 'utf8');

  // ----- per-state HTML -----
  for (const s of data) {
    const slug = slugify(s.state);
    const url  = `${SITE}/states/${slug}/`;
    const fastest = s.practical_guidance?.how_to_get_naloxone_quickly || '';
    const desc = `${fastest} Pharmacy, mail, and local options for naloxone in ${s.state}. Good Samaritan law explained.`.trim();

    let html = tpl
      // Title
      .replace(
        /<title>[\s\S]*?<\/title>/,
        `<title>Naloxone in ${esc(s.state)} — how to get it fast | narcan.delivery</title>`
      )
      // Meta description
      .replace(
        /<meta name="description"[^>]*>/,
        `<meta name="description" content="${esc(desc)}" />`
      )
      // Canonical
      .replace(
        /<link rel="canonical"[^>]*>/,
        `<link rel="canonical" href="${url}" />`
      )
      // OG title
      .replace(
        /<meta property="og:title"[^>]*>/,
        `<meta property="og:title" content="Naloxone in ${esc(s.state)} — how to get it fast" />`
      )
      // OG description
      .replace(
        /<meta property="og:description"[^>]*>/,
        `<meta property="og:description" content="${esc(desc)}" />`
      )
      // OG URL
      .replace(
        /<meta property="og:url"[^>]*>/,
        `<meta property="og:url" content="${url}" />`
      )
      // Inline the state view so crawlers see real content (remove `hidden`)
      .replace(
        /<section id="state-view"[^>]*hidden><\/section>/,
        `<section id="state-view" class="state-view" aria-live="polite">${renderStateHTML(s)}</section>`
      )
      // Prerendered pages don't need the client-side <template> (the content
      // is already inlined). Strip it to save bytes.
      .replace(/<template id="tpl-state">[\s\S]*?<\/template>\s*/, '');

    // Append per-state JSON-LD just before </head>
    const ld = `\n<script type="application/ld+json">${JSON.stringify(jsonLdForState(s, url))}</script>\n`;
    html = html.replace('</head>', ld + '</head>');

    const outDir = path.join(ROOT, 'states', slug);
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, 'index.html'), html, 'utf8');
  }

  // ----- data.json (public, for automation consumers) -----
  const dataJson = {
    generated_at: new Date().toISOString(),
    source: SITE,
    license: 'Public domain (CC0). Attribution appreciated.',
    count: data.length,
    states: data
  };
  await fs.writeFile(path.join(ROOT, 'data.json'), JSON.stringify(dataJson, null, 2), 'utf8');

  // ----- sitemap.xml (clean URLs) -----
  // Sitemap spec requires W3C Datetime for <lastmod>. Anything else (e.g. the
  // sentinel "UNKNOWN" used in data.js) causes Google Search Console to reject
  // the whole file. Validate, otherwise fall back to the build date.
  const BUILD_DATE = new Date().toISOString().slice(0, 10);
  const isW3CDate = v => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:?\d{2})?)?$/.test(v);
  const safeLastmod = v => (isW3CDate(v) ? v : BUILD_DATE);

  const urls = [
    { loc: `${SITE}/`, lastmod: BUILD_DATE, freq: 'weekly', pri: '1.0' },
    ...data.map(s => ({
      loc: `${SITE}/states/${slugify(s.state)}/`,
      lastmod: safeLastmod(s.last_updated),
      freq: 'monthly',
      pri: '0.8'
    }))
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pri}</priority>
  </url>`).join('\n')}
</urlset>
`;
  await fs.writeFile(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf8');

  console.log(`✓ Prerendered ${data.length} state pages`);
  console.log(`✓ Wrote data.json (${data.length} states)`);
  console.log(`✓ Wrote sitemap.xml (${urls.length} URLs)`);
}

main().catch(err => { console.error(err); process.exit(1); });
