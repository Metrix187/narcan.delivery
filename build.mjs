#!/usr/bin/env node
/* narcan.delivery prerender build
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
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SITE = 'https://narcan.delivery';

// ---------------------------------------------------------------------------
// Content-hashed ?v= stamps on script URLs. _headers marks *.js as immutable
// for a year, and these files never change name, so without a version in the
// URL a repeat visitor could run year-old code against year-old data. The
// stamp changes only when the file's bytes do.
// ---------------------------------------------------------------------------
async function assetVersions() {
  const hash = async (rel) => createHash('sha256')
    .update(await fs.readFile(path.join(ROOT, rel)))
    .digest('hex').slice(0, 10);
  return {
    '/data.js': await hash('data.js'),
    '/app.js': await hash('app.js'),
    '/card/card.js': await hash('card/card.js'),
  };
}

const stampAssets = (html, ver) => html.replace(
  /src="(\/data\.js|\/app\.js|\/card\/card\.js)(?:\?v=[a-z0-9]+)?"/g,
  (m, p) => `src="${p}?v=${ver[p]}"`
);

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
  return {
    data: data.slice().sort((a, b) => a.state.localeCompare(b.state)),
    adjacency: sandbox.window.NALOXONE_ADJACENCY || {},
  };
}

// Spanish translation overlay (data.es.js). Optional; absent file = no /es/ pages.
async function loadES() {
  try {
    const src = await fs.readFile(path.join(ROOT, 'data.es.js'), 'utf8');
    const sandbox = { window: {} };
    // eslint-disable-next-line no-new-func
    new Function('window', src)(sandbox.window);
    return { states: sandbox.window.NALOXONE_ES || {}, labels: sandbox.window.NALOXONE_ES_LABELS };
  } catch {
    return { states: {}, labels: null };
  }
}

// Overlay a state's Spanish fields onto its English object (English fallback).
function localizeState(en, es) {
  const s = JSON.parse(JSON.stringify(en));
  if (!es) return s;
  const L = s.legal_framework, gs = L.good_samaritan_overdose_immunity || (L.good_samaritan_overdose_immunity = {});
  if (es.naloxone_legal_status) L.naloxone_legal_status = es.naloxone_legal_status;
  if (es.gs_scope) gs.scope = es.gs_scope;
  const p = s.access_channels.pharmacies || (s.access_channels.pharmacies = {});
  if (es.pharmacy_mechanism) p.mechanism = es.pharmacy_mechanism;
  if (es.medicaid_notes) p.medicaid_coverage_notes = es.medicaid_notes;
  if (es.typical_cost) p.typical_cost = es.typical_cost;
  if (es.how) s.practical_guidance.how_to_get_naloxone_quickly = es.how;
  if (es.barriers) s.practical_guidance.barriers_and_workarounds = es.barriers;
  (es.community_services || []).forEach((t, i) => { if (t && s.access_channels.community_programs?.[i]) s.access_channels.community_programs[i].services = t; });
  (es.mail_services || []).forEach((t, i) => { if (t && s.access_channels.mail_based_programs?.[i]) s.access_channels.mail_based_programs[i].services = t; });
  return s;
}

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const esc = (s) => String(s ?? '').replace(/[&<>"']/g,
  (m) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[m])
);

const formatDate = (iso, locale = 'en-US') => {
  if (!iso) return '';
  const d = new Date(iso); if (isNaN(d)) return '';
  // Date-only values (YYYY-MM-DD) parse as UTC midnight; format in UTC too so
  // a "2026-06-10" date never displays as the previous day west of Greenwich.
  return d.toLocaleDateString(locale, { year:'numeric', month:'short', day:'numeric', timeZone:'UTC' });
};

const isStale = (iso) => {
  if (!iso) return false;
  const d = new Date(iso); if (isNaN(d)) return false;
  const cutoff = new Date(); cutoff.setMonth(cutoff.getMonth() - 6);
  return d < cutoff;
};

// Human-readable label for a source URL (bare hostname).
const hostLabel = (url) => {
  try { return new URL(url).hostname.replace(/^www\./, ''); }
  catch { return String(url); }
};

// ---------------------------------------------------------------------------
// Server-side mirror of the state-card renderer in app.js.
// Keep the HTML shape in sync with #tpl-state in index.html.
// ---------------------------------------------------------------------------
// UI chrome strings for the state card. EN is the default; ES comes from
// data.es.js (window.NALOXONE_ES_LABELS) so all Spanish copy lives in one file.
const EN_LABELS = {
  lang: 'en', interactive: true,
  changeStateHref: '/', changeState: '← Change state',
  naloxoneIn: 'Naloxone in',
  gsYes: 'Good Samaritan law: yes', gsLimited: 'Good Samaritan law: limited',
  verified: 'Verified ', needsReview: 'Needs review · ', dateLocale: 'en-US',
  fastest: 'Your fastest option',
  pharmacy: 'At a pharmacy', howDispensed: "How it's dispensed", medicaid: 'Medicaid',
  typicalCost: 'Typical cost', notListed: 'Not listed',
  mailTitle: 'Free by mail', communityTitle: 'Local programs',
  fallbackTitle: 'If a link here stops working',
  fallbackBody: 'Programs and websites change. These free phone lines work nationwide and can point you to naloxone near you, no internet needed.',
  samhsaName: 'SAMHSA National Helpline',
  samhsaDesc: 'Free, confidential, 24/7, in English &amp; Spanish. Finds naloxone and treatment in any state.',
  crisisName: '988 Suicide &amp; Crisis Lifeline', crisisDesc: 'Call or text, 24/7.',
  emergencyName: 'If someone is overdosing right now', emergencyDesc: 'Emergency services.',
  legalTitle: 'What the Good Samaritan law actually covers',
  noGs: 'No specific Good Samaritan protections are documented for this state.',
  barriersTitle: 'Known barriers &amp; workarounds',
  neighborsTitle: 'Near a border?',
  neighborsBody: 'Access and laws change at the state line. If you live near one of these, check there too.',
  sourcesSummary: 'Sources &amp; how this was verified',
  shareLabel: 'Copy link to this state',
  howToUse: 'How to use it →', howToUseHref: '/#how-to-use',
  visitWebsite: 'Visit website ↗', newTab: '(opens in new tab)',
  jsonLdName: 'How to get naloxone in', home: 'Home',
};

function orgItemHTML(org, L = EN_LABELS) {
  const parts = [`<strong>${esc(org.name)}</strong>`];
  if (org.services) parts.push(`<span class="services">${esc(org.services)}</span>`);
  const contact = [];
  if (org.website) contact.push(`<a href="${esc(org.website)}" target="_blank" rel="noopener noreferrer">${L.visitWebsite}<span class="sr-only"> ${L.newTab}</span></a>`);
  if (org.phone)   contact.push(`<a href="tel:${esc(org.phone.replace(/[^0-9+]/g,''))}">${esc(org.phone)}</a>`);
  if (org.email)   contact.push(`<a href="mailto:${esc(org.email)}">${esc(org.email)}</a>`);
  if (contact.length) parts.push(`<span class="contact">${contact.join('')}</span>`);
  const cost = org.cost ? `<span class="cost-tag">${esc(org.cost)}</span>` : '';
  return `<li class="org-item"><div style="flex:1;min-width:0;">${parts.join('')}</div>${cost}</li>`;
}

function renderStateHTML(s, neighbors = [], L = EN_LABELS) {
  const gs   = s.legal_framework?.good_samaritan_overdose_immunity || {};
  const legal = s.legal_framework?.naloxone_legal_status;
  const upd   = s.last_updated;
  const ph    = s.access_channels?.pharmacies || {};
  const mail  = s.access_channels?.mail_based_programs || [];
  const comm  = s.access_channels?.community_programs || [];

  const pills = [];
  if (legal) pills.push(`<span class="pill pill-legal" role="listitem">${esc(legal)}</span>`);
  pills.push(gs.exists
    ? `<span class="pill pill-gs ok" role="listitem">${L.gsYes}</span>`
    : `<span class="pill pill-gs none" role="listitem">${L.gsLimited}</span>`);
  if (upd) {
    const stale = isStale(upd);
    pills.push(`<span class="pill pill-updated${stale ? ' stale' : ''}" role="listitem">${stale ? L.needsReview : L.verified}${esc(formatDate(upd, L.dateLocale))}</span>`);
  }

  return `
  <article class="wrap narrow state-article">
    <header class="state-header">
      <p class="eyebrow"><a href="${L.changeStateHref}" class="change-state">${L.changeState}</a></p>
      <h2 class="state-title" tabindex="-1">${L.naloxoneIn} ${esc(s.state)}</h2>
      <div class="pills" role="list">${pills.join('')}</div>
    </header>

    <div class="card card-lead">
      <p class="card-kicker">${L.fastest}</p>
      <p class="lead-text">${esc(s.practical_guidance?.how_to_get_naloxone_quickly || '')}</p>
    </div>

    <div class="card">
      <div class="card-head">
        <span class="card-badge badge-sky" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.8" fill="none"/></svg>
        </span>
        <h3>${L.pharmacy}</h3>
      </div>
      <dl class="kv">
        <dt>${L.howDispensed}</dt><dd>${esc(ph.mechanism || L.notListed)}</dd>
        <dt>${L.medicaid}</dt><dd>${esc(ph.medicaid_coverage_notes || L.notListed)}</dd>
        <dt>${L.typicalCost}</dt><dd>${esc(ph.typical_cost || L.notListed)}</dd>
      </dl>
    </div>

    ${mail.length ? `
    <div class="card">
      <div class="card-head">
        <span class="card-badge badge-mint" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="7" width="18" height="12" rx="1.5" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M3 9l9 6 9-6" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>
        </span>
        <h3>${L.mailTitle}</h3>
      </div>
      <ul class="org-list">${mail.map(o => orgItemHTML(o, L)).join('')}</ul>
    </div>` : ''}

    ${comm.length ? `
    <div class="card">
      <div class="card-head">
        <span class="card-badge badge-peach" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 21s-7-7.58-7-12a7 7 0 1114 0c0 4.42-7 12-7 12z" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="1.8" fill="none"/></svg>
        </span>
        <h3>${L.communityTitle}</h3>
      </div>
      <ul class="org-list">${comm.map(o => orgItemHTML(o, L)).join('')}</ul>
    </div>` : ''}

    <div class="card card-fallback">
      <div class="card-head">
        <span class="card-badge badge-sky" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M5 4h3l2 5-2.2 1.1a11 11 0 005.1 5.1L14 14l5 2v3a1 1 0 01-1 1A14 14 0 014 5a1 1 0 011-1z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/></svg>
        </span>
        <h3>${L.fallbackTitle}</h3>
      </div>
      <p class="card-body">${L.fallbackBody}</p>
      <ul class="org-list fallback-list">
        <li class="org-item"><div style="flex:1;min-width:0;"><strong>${L.samhsaName}</strong><span class="services">${L.samhsaDesc}</span><span class="contact"><a href="tel:18006624357">1-800-662-4357</a></span></div></li>
        <li class="org-item"><div style="flex:1;min-width:0;"><strong>${L.crisisName}</strong><span class="services">${L.crisisDesc}</span><span class="contact"><a href="tel:988">988</a></span></div></li>
        <li class="org-item"><div style="flex:1;min-width:0;"><strong>${L.emergencyName}</strong><span class="services">${L.emergencyDesc}</span><span class="contact"><a href="tel:911">911</a></span></div></li>
      </ul>
    </div>

    <div class="card card-legal">
      <div class="card-head">
        <span class="card-badge badge-lavender" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 3l8 4v5c0 4.5-3.2 8.3-8 9-4.8-.7-8-4.5-8-9V7l8-4z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/></svg>
        </span>
        <h3>${L.legalTitle}</h3>
      </div>
      <p class="card-body">${esc(gs.scope || L.noGs)}</p>
    </div>

    ${s.practical_guidance?.barriers_and_workarounds ? `
    <div class="card">
      <div class="card-head">
        <span class="card-badge badge-peach" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 3l10 18H2L12 3z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/><path d="M12 10v5M12 18v.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
        <h3>${L.barriersTitle}</h3>
      </div>
      <p class="card-body">${esc(s.practical_guidance.barriers_and_workarounds)}</p>
    </div>` : ''}

    ${neighbors.length ? `
    <div class="card card-neighbors">
      <div class="card-head">
        <span class="card-badge badge-sky" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3V7z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/><path d="M9 4v13M15 7v13" stroke="currentColor" stroke-width="1.8" fill="none"/></svg>
        </span>
        <h3>${L.neighborsTitle}</h3>
      </div>
      <p class="card-body">${L.neighborsBody}</p>
      <div class="neighbor-chips">${neighbors.map(n => `<a class="chip" href="${n.url}">${esc(n.name)}</a>`).join('')}</div>
    </div>` : ''}

    ${Array.isArray(s.sources) && s.sources.length ? `
    <details class="sources">
      <summary>${L.sourcesSummary}</summary>
      <ul class="source-list">${s.sources.map(u => `<li><a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(hostLabel(u))}<span class="sr-only"> ${L.newTab}</span></a></li>`).join('')}</ul>
    </details>` : ''}

    <div class="share">
      ${L.interactive ? `<button class="btn btn-ghost" id="share-btn" type="button">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M10 14a3.5 3.5 0 004.9 0l4-4a3.5 3.5 0 00-5-5l-1 1M14 10a3.5 3.5 0 00-4.9 0l-4 4a3.5 3.5 0 005 5l1-1" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>
        <span id="share-label">${L.shareLabel}</span>
      </button>` : ''}
      <a class="btn btn-ghost" href="${L.howToUseHref}">${L.howToUse}</a>
    </div>
  </article>`;
}

// ---------------------------------------------------------------------------
// Per-state structured data (JSON-LD): GovernmentService + BreadcrumbList
// ---------------------------------------------------------------------------
function jsonLdForState(s, url, L = EN_LABELS) {
  const gs = s.legal_framework?.good_samaritan_overdose_immunity;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentService",
        "name": `${L.jsonLdName} ${s.state}`,
        "serviceType": "Opioid overdose reversal medication access",
        "areaServed": { "@type": "State", "name": s.state },
        "audience": { "@type": "Audience", "audienceType": "General public" },
        "inLanguage": L.lang,
        "termsOfService": gs?.scope || '',
        "url": url
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": L.home, "item": SITE + L.changeStateHref },
          { "@type": "ListItem", "position": 2, "name": s.state, "item": url }
        ]
      }
    ]
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
// Refresh the inlined <style> block in index.html from styles.css (single
// source of truth for the stylesheet) and stamp asset versions, writing the
// file back if anything changed. Returns the final homepage HTML, which also
// serves as the per-state page template.
async function prepareTemplate(ver) {
  const htmlPath = path.join(ROOT, 'index.html');
  const [html, css] = await Promise.all([
    fs.readFile(htmlPath, 'utf8'),
    fs.readFile(path.join(ROOT, 'styles.css'), 'utf8'),
  ]);
  const re = /<!-- BUILD:INLINE-CSS[^>]*-->[\s\S]*?<!-- \/BUILD:INLINE-CSS -->/;
  if (!re.test(html)) {
    throw new Error('index.html is missing the BUILD:INLINE-CSS sentinels');
  }
  let next = html.replace(
    re,
    `<!-- BUILD:INLINE-CSS (regenerated from styles.css by build.mjs; edit styles.css, not here) -->\n<style>\n${css}</style>\n<!-- /BUILD:INLINE-CSS -->`
  );
  next = stampAssets(next, ver);
  if (next !== html) {
    await fs.writeFile(htmlPath, next, 'utf8');
    console.log('✓ Refreshed index.html (inline CSS + asset versions)');
  }
  return next;
}

async function main() {
  const { data, adjacency } = await loadData();
  const byAbbr = Object.fromEntries(data.map(s => [s.abbreviation, s]));
  const neighborsFor = (s) => (adjacency[s.abbreviation] || [])
    .map(a => byAbbr[a]).filter(Boolean)
    .map(n => ({ name: n.state, url: `/states/${slugify(n.state)}/` }));
  const ver = await assetVersions();
  const tpl  = await prepareTemplate(ver);

  // The card page references its own script; keep it versioned too.
  {
    const cardPath = path.join(ROOT, 'card', 'index.html');
    const cardHtml = await fs.readFile(cardPath, 'utf8');
    const stamped = stampAssets(cardHtml, ver);
    if (stamped !== cardHtml) {
      await fs.writeFile(cardPath, stamped, 'utf8');
      console.log('✓ Stamped card/index.html asset versions');
    }
  }

  const es = await loadES();
  const hasES = (abbr) => !!(es.states[abbr] && byAbbr[abbr]);
  const esPages = [];

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
        `<title>Naloxone in ${esc(s.state)}. How to get it fast | narcan.delivery</title>`
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
      // State pages have no per-state translation, so drop the homepage's
      // hreflang set (keeping it would point en/x-default at the wrong page).
      .replace(/\n?\s*<link rel="alternate" hreflang="[^"]*"[^>]*>/g, '')
      // OG title
      .replace(
        /<meta property="og:title"[^>]*>/,
        `<meta property="og:title" content="Naloxone in ${esc(s.state)}. How to get it fast" />`
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
      // Inline the state view so crawlers see real content (remove `hidden`).
      // data-prerendered tells app.js this HTML is already correct for the
      // state, so it hydrates the buttons instead of re-rendering (a client
      // re-render could swap fresh server HTML for a stale cached data.js).
      // The <template> stays: picking a different state renders client-side.
      .replace(
        /<section id="state-view"[^>]*hidden><\/section>/,
        `<section id="state-view" class="state-view" data-prerendered="${s.abbreviation}">${renderStateHTML(s, neighborsFor(s))}</section>`
      );

    // If a Spanish translation exists, link it with reciprocal hreflang.
    if (hasES(s.abbreviation)) {
      const esUrl = `${SITE}/es/states/${slug}/`;
      html = html.replace(/(<link rel="canonical"[^>]*>)/,
        `$1\n<link rel="alternate" hreflang="en" href="${url}" />\n<link rel="alternate" hreflang="es" href="${esUrl}" />\n<link rel="alternate" hreflang="x-default" href="${url}" />`);
    }

    // Append per-state JSON-LD just before </head>
    const ld = `\n<script type="application/ld+json">${JSON.stringify(jsonLdForState(s, url))}</script>\n`;
    html = html.replace('</head>', ld + '</head>');

    const outDir = path.join(ROOT, 'states', slug);
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, 'index.html'), html, 'utf8');
  }

  // ----- Spanish per-state pages (/es/states/<slug>/) -----
  // Generated only for states present in data.es.js. The /es/ landing is reused
  // as the template (so the chrome and styles match), with the localized card
  // injected and the state-links directory stripped.
  if (Object.keys(es.states).length && es.labels) {
    const L = es.labels;
    const esTpl = await fs.readFile(path.join(ROOT, 'es', 'index.html'), 'utf8');
    const esNeighborsFor = (s) => (adjacency[s.abbreviation] || [])
      .map(a => byAbbr[a]).filter(Boolean)
      .map(n => ({
        name: n.state,
        url: hasES(n.abbreviation) ? `/es/states/${slugify(n.state)}/` : `/states/${slugify(n.state)}/`,
      }));
    for (const abbr of Object.keys(es.states)) {
      if (!byAbbr[abbr]) { console.log(`  (skipping es:${abbr}: no English state)`); continue; }
      const sLoc = localizeState(byAbbr[abbr], es.states[abbr]);
      const slug = slugify(sLoc.state);
      const url = `${SITE}/es/states/${slug}/`;
      const enUrl = `${SITE}/states/${slug}/`;
      const fastest = sLoc.practical_guidance?.how_to_get_naloxone_quickly || '';
      const desc = `${fastest} Opciones de farmacia, correo y programas locales para conseguir naloxona en ${sLoc.state}.`.trim();
      let html = esTpl
        .replace(/<title>[\s\S]*?<\/title>/, `<title>Naloxona en ${esc(sLoc.state)}. Cómo conseguirla rápido | narcan.delivery</title>`)
        .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(desc)}" />`)
        .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
        .replace(/<link rel="alternate" hreflang="es"[^>]*>/, `<link rel="alternate" hreflang="es" href="${url}" />`)
        .replace(/<link rel="alternate" hreflang="en"[^>]*>/, `<link rel="alternate" hreflang="en" href="${enUrl}" />`)
        .replace(/<link rel="alternate" hreflang="x-default"[^>]*>/, `<link rel="alternate" hreflang="x-default" href="${enUrl}" />`)
        .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="Naloxona en ${esc(sLoc.state)}. Cómo conseguirla rápido" />`)
        .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(desc)}" />`)
        .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
        .replace(/<!-- ES-STATE-LINKS:START -->[\s\S]*?<!-- ES-STATE-LINKS:END -->/, '')
        .replace(
          /<section id="state-view"[^>]*hidden><\/section>/,
          `<section id="state-view" class="state-view">${renderStateHTML(sLoc, esNeighborsFor(sLoc), L)}</section>`
        );
      const ld = `\n<script type="application/ld+json">${JSON.stringify(jsonLdForState(sLoc, url, L))}</script>\n`;
      html = html.replace('</head>', ld + '</head>');
      const outDir = path.join(ROOT, 'es', 'states', slug);
      await fs.mkdir(outDir, { recursive: true });
      await fs.writeFile(path.join(outDir, 'index.html'), html, 'utf8');
      esPages.push({ slug, state: sLoc.state, url });
    }
    // /es/ landing: inject a directory of the available Spanish state pages.
    const dir = esPages.slice().sort((a, b) => a.state.localeCompare(b.state))
      .map(p => `<a href="/es/states/${p.slug}/">${esc(p.state)}</a>`).join(' · ');
    const linksBlock = `<!-- ES-STATE-LINKS:START -->${dir ? `<p class="picker-help">Páginas por estado en español: ${dir}</p>` : ''}<!-- ES-STATE-LINKS:END -->`;
    const landing = esTpl.replace(/<!-- ES-STATE-LINKS:START -->[\s\S]*?<!-- ES-STATE-LINKS:END -->/, linksBlock);
    if (landing !== esTpl) await fs.writeFile(path.join(ROOT, 'es', 'index.html'), landing, 'utf8');
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
    { loc: `${SITE}/es/`, lastmod: BUILD_DATE, freq: 'monthly', pri: '0.7' },
    { loc: `${SITE}/card/`, lastmod: BUILD_DATE, freq: 'monthly', pri: '0.6' },
    ...data.map(s => ({
      loc: `${SITE}/states/${slugify(s.state)}/`,
      lastmod: safeLastmod(s.last_updated),
      freq: 'monthly',
      pri: '0.8'
    })),
    ...esPages.map(p => ({ loc: p.url, lastmod: BUILD_DATE, freq: 'monthly', pri: '0.7' }))
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
  if (esPages.length) console.log(`✓ Prerendered ${esPages.length} Spanish state page(s): ${esPages.map(p => p.slug).join(', ')}`);
  console.log(`✓ Wrote data.json (${data.length} states)`);
  console.log(`✓ Wrote sitemap.xml (${urls.length} URLs)`);
}

main().catch(err => { console.error(err); process.exit(1); });
