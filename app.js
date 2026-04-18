/* narcan.delivery — app.js
 * Vanilla JS. No framework. No build step.
 *
 * Responsibilities:
 *   - Populate the state picker.
 *   - Read / write ?state=XX in the URL.
 *   - Render the state view from the embedded dataset.
 *   - If a published Google Sheet CSV is available, fetch it and override
 *     matching fields at runtime (automation-friendly — no redeploy needed).
 *   - Update <title>, <meta description>, and canonical on state change.
 */

(() => {
  'use strict';

  // =========================================================================
  // CONFIG
  // Paste your published Google Sheet CSV export URL here to enable live data.
  // Sheet columns (row 1 = headers, exact names):
  //   abbreviation, last_updated, naloxone_legal_status,
  //   gs_exists, gs_scope, pharmacy_mechanism, medicaid_notes,
  //   typical_cost, how_to_get_quickly, barriers
  // Publish: File → Share → Publish to web → CSV
  // =========================================================================
  const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQo7lo4oD6rLjt4NWISOR3AJy1AtPOA3com6ntoo6LX_lSV8dmylHDjLcj3KIklR44peURjksWPo86R/pub?gid=0&single=true&output=csv";

  const DATA = (window.NALOXONE_DATA || []).slice().sort((a, b) =>
    a.state.localeCompare(b.state)
  );

  // slug <-> abbreviation maps for clean URLs (/states/california/)
  const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const SLUG_TO_ABBR = Object.fromEntries(DATA.map(s => [slugify(s.state), s.abbreviation]));
  const ABBR_TO_SLUG = Object.fromEntries(DATA.map(s => [s.abbreviation, slugify(s.state)]));

  // Read the requested state from either /states/<slug>/ or ?state=XX
  function abbrFromLocation() {
    const m = location.pathname.match(/\/states\/([a-z0-9-]+)\/?$/i);
    if (m && SLUG_TO_ABBR[m[1].toLowerCase()]) return SLUG_TO_ABBR[m[1].toLowerCase()];
    const q = new URLSearchParams(location.search).get('state');
    return q ? q.toUpperCase() : null;
  }

  function stateUrl(abbr) {
    const slug = ABBR_TO_SLUG[abbr];
    return slug ? `/states/${slug}/` : `/?state=${abbr}`;
  }

  // =========================================================================
  // Utilities
  // =========================================================================
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const escapeHTML = (s) => String(s ?? '').replace(/[&<>"']/g,
    (m) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[m])
  );

  const formatDate = (iso) => {
    if (!iso) return null;
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' });
  };

  const isStale = (iso) => {
    if (!iso) return false;
    const d = new Date(iso); if (Number.isNaN(d.getTime())) return false;
    const cutoff = new Date(); cutoff.setMonth(cutoff.getMonth() - 6);
    return d < cutoff;
  };

  // =========================================================================
  // CSV merge pipeline (Google Sheet → live overrides)
  // =========================================================================
  function parseSheetCSV(csv) {
    const rows = [];
    let field = '', row = [], inQ = false;
    for (let i = 0; i < csv.length; i++) {
      const ch = csv[i], next = csv[i + 1];
      if (inQ) {
        if (ch === '"' && next === '"') { field += '"'; i++; }
        else if (ch === '"') { inQ = false; }
        else { field += ch; }
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
    if (!ov || !base) return base;
    const gsExists = ov.gs_exists === 'true' ? true
                   : ov.gs_exists === 'false' ? false
                   : base.legal_framework?.good_samaritan_overdose_immunity?.exists;
    return {
      ...base,
      last_updated: ov.last_updated || base.last_updated,
      legal_framework: {
        ...base.legal_framework,
        naloxone_legal_status: ov.naloxone_legal_status || base.legal_framework?.naloxone_legal_status,
        good_samaritan_overdose_immunity: {
          exists: gsExists,
          scope:  ov.gs_scope || base.legal_framework?.good_samaritan_overdose_immunity?.scope,
        }
      },
      access_channels: {
        ...base.access_channels,
        pharmacies: {
          ...base.access_channels.pharmacies,
          mechanism:               ov.pharmacy_mechanism || base.access_channels.pharmacies.mechanism,
          medicaid_coverage_notes: ov.medicaid_notes     || base.access_channels.pharmacies.medicaid_coverage_notes,
          typical_cost:            ov.typical_cost       || base.access_channels.pharmacies.typical_cost,
        }
      },
      practical_guidance: {
        how_to_get_naloxone_quickly: ov.how_to_get_quickly || base.practical_guidance.how_to_get_naloxone_quickly,
        barriers_and_workarounds:    ov.barriers           || base.practical_guidance.barriers_and_workarounds,
      }
    };
  }

  let liveOverrides = null;

  async function loadLiveData() {
    if (!SHEET_CSV_URL) return;
    try {
      const r = await fetch(SHEET_CSV_URL, { cache: 'no-store' });
      if (!r.ok) throw new Error('sheet fetch failed');
      const csv = await r.text();
      liveOverrides = parseSheetCSV(csv);
      const label = $('#data-source-label');
      if (label) label.textContent = 'Live (Google Sheet)';
      // If we're already rendering a state, re-render with overrides applied.
      const abbr = new URLSearchParams(location.search).get('state');
      if (abbr) renderState(abbr.toUpperCase());
    } catch { /* silent — embedded data is fine */ }
  }

  // =========================================================================
  // Populate state picker
  // =========================================================================
  function fillPicker() {
    const select = $('#state');
    const frag = document.createDocumentFragment();
    DATA.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.abbreviation;
      opt.textContent = `${s.state} (${s.abbreviation})`;
      frag.appendChild(opt);
    });
    select.appendChild(frag);

    // If the URL already has a state, preselect it.
    const preset = new URLSearchParams(location.search).get('state');
    if (preset) select.value = preset.toUpperCase();

    // Footer: most recent update across all states
    const latest = DATA.reduce((acc, s) => {
      if (!s.last_updated) return acc;
      return !acc || new Date(s.last_updated) > new Date(acc) ? s.last_updated : acc;
    }, null);
    const el = $('#last-reviewed');
    if (el && latest) {
      el.textContent = formatDate(latest);
      el.setAttribute('datetime', latest);
    }

    // Footer: current year
    const yrEl = $('#copyright-year');
    if (yrEl) yrEl.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // Render state view
  // =========================================================================
  function getMergedState(abbr) {
    const base = DATA.find(s => s.abbreviation === abbr);
    if (!base) return null;
    return liveOverrides && liveOverrides[abbr] ? mergeSheet(base, liveOverrides[abbr]) : base;
  }

  function orgItemHTML(org) {
    const parts = [];
    parts.push(`<strong>${escapeHTML(org.name)}</strong>`);
    if (org.services) parts.push(`<span class="services">${escapeHTML(org.services)}</span>`);
    const contact = [];
    if (org.website) contact.push(`<a href="${encodeURI(org.website)}" target="_blank" rel="noopener noreferrer">Visit website ↗</a>`);
    if (org.phone)   contact.push(`<a href="tel:${escapeHTML(org.phone.replace(/[^0-9+]/g,''))}">${escapeHTML(org.phone)}</a>`);
    if (org.email)   contact.push(`<a href="mailto:${escapeHTML(org.email)}">${escapeHTML(org.email)}</a>`);
    if (contact.length) parts.push(`<span class="contact">${contact.join('')}</span>`);
    const cost = org.cost ? `<span class="cost-tag">${escapeHTML(org.cost)}</span>` : '';
    return `<li class="org-item"><div style="flex:1;min-width:0;">${parts.join('')}</div>${cost}</li>`;
  }

  function renderState(abbr) {
    const view = $('#state-view');
    const tpl  = $('#tpl-state');
    const s = getMergedState(abbr);

    if (!s) {
      view.hidden = true; view.innerHTML = '';
      resetDocMeta();
      return;
    }

    const node = tpl.content.cloneNode(true);

    // Title + pills
    node.querySelector('.state-title').textContent = `Naloxone in ${s.state}`;

    const gs = s.legal_framework?.good_samaritan_overdose_immunity;
    const legal = s.legal_framework?.naloxone_legal_status;
    const updated = s.last_updated;

    const pillLegal = node.querySelector('[data-k="legal"]');
    if (legal) pillLegal.textContent = legal; else pillLegal.remove();

    const pillGs = node.querySelector('[data-k="gs"]');
    if (gs?.exists) {
      pillGs.classList.add('ok');
      pillGs.textContent = 'Good Samaritan law: yes';
    } else {
      pillGs.classList.add('none');
      pillGs.textContent = 'Good Samaritan law: limited';
    }

    const pillUpd = node.querySelector('[data-k="updated"]');
    if (updated) {
      pillUpd.textContent = `${isStale(updated) ? 'Needs review · ' : 'Verified '}${formatDate(updated)}`;
      if (isStale(updated)) pillUpd.classList.add('stale');
    } else pillUpd.remove();

    // Fastest option (lead)
    node.querySelector('[data-k="fastest"]').textContent =
      s.practical_guidance?.how_to_get_naloxone_quickly || '';

    // Pharmacy
    const ph = s.access_channels?.pharmacies || {};
    node.querySelector('[data-k="mechanism"]').textContent = ph.mechanism || '—';
    node.querySelector('[data-k="medicaid"]').textContent  = ph.medicaid_coverage_notes || '—';
    node.querySelector('[data-k="cost"]').textContent      = ph.typical_cost || '—';

    // Mail
    const mailWrap = node.querySelector('[data-k="mail-wrap"]');
    const mailList = node.querySelector('[data-k="mail"]');
    const mail = s.access_channels?.mail_based_programs || [];
    if (mail.length) mailList.innerHTML = mail.map(orgItemHTML).join('');
    else mailWrap.remove();

    // Community
    const commWrap = node.querySelector('[data-k="community-wrap"]');
    const commList = node.querySelector('[data-k="community"]');
    const comm = s.access_channels?.community_programs || [];
    if (comm.length) commList.innerHTML = comm.map(orgItemHTML).join('');
    else commWrap.remove();

    // Legal scope
    const gsScope = node.querySelector('[data-k="gs-scope"]');
    gsScope.textContent = gs?.scope || 'No specific Good Samaritan protections are documented for this state.';

    // Barriers
    const barWrap = node.querySelector('[data-k="barriers-wrap"]');
    const barEl   = node.querySelector('[data-k="barriers"]');
    if (s.practical_guidance?.barriers_and_workarounds) {
      barEl.textContent = s.practical_guidance.barriers_and_workarounds;
    } else barWrap.remove();

    // Mount
    view.innerHTML = '';
    view.appendChild(node);
    view.hidden = false;

    // Back/change state handler
    const changeLink = view.querySelector('.change-state');
    if (changeLink) changeLink.addEventListener('click', (e) => {
      e.preventDefault();
      clearState();
      $('#state').focus();
    });

    // Share button
    const btn = view.querySelector('#share-btn');
    const lbl = view.querySelector('#share-label');
    if (btn && lbl) btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        const prev = lbl.textContent;
        lbl.textContent = 'Link copied ✓';
        setTimeout(() => lbl.textContent = prev, 2000);
      } catch { /* no-op */ }
    });

    // SEO metadata
    updateDocMeta(s);

    // Smooth scroll to the state view
    requestAnimationFrame(() => {
      view.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // =========================================================================
  // URL + meta sync
  // =========================================================================
  function selectState(abbr, { push = true } = {}) {
    if (!abbr) { clearState(); return; }
    const href = stateUrl(abbr);
    (push ? history.pushState : history.replaceState).call(history, {}, '', href);
    $('#state').value = abbr;
    renderState(abbr);
  }

  function clearState() {
    // Return to the site root (works whether we were on /states/<slug>/ or /?state=)
    history.pushState({}, '', '/');
    $('#state').value = '';
    $('#state-view').hidden = true;
    $('#state-view').innerHTML = '';
    resetDocMeta();
  }

  const DEFAULT_TITLE = document.title;
  const DEFAULT_DESC  = 'The fastest way to get naloxone (Narcan) where you live. State-by-state guide to pharmacies, mail-order programs, local distributors, and Good Samaritan laws.';

  function updateDocMeta(s) {
    document.title = `Naloxone in ${s.state} — how to get it fast | narcan.delivery`;
    setMeta('description', `${s.practical_guidance?.how_to_get_naloxone_quickly || ''} Pharmacy, mail, and local options for naloxone in ${s.state}.`.trim());
    setCanonical(`https://narcan.delivery${stateUrl(s.abbreviation)}`);
  }
  function resetDocMeta() {
    document.title = DEFAULT_TITLE;
    setMeta('description', DEFAULT_DESC);
    setCanonical('https://narcan.delivery/');
  }
  function setMeta(name, content) {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) { tag = document.createElement('meta'); tag.setAttribute('name', name); document.head.appendChild(tag); }
    tag.setAttribute('content', content);
  }
  function setCanonical(href) {
    let tag = document.querySelector('link[rel="canonical"]');
    if (!tag) { tag = document.createElement('link'); tag.rel = 'canonical'; document.head.appendChild(tag); }
    tag.href = href;
  }

  // =========================================================================
  // Wire up
  // =========================================================================
  function init() {
    fillPicker();

    const form = $('#picker');
    const select = $('#state');

    // Submit button or Enter key.
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      selectState(select.value);
    });

    // Change fires on keyboard select; immediate UX.
    select.addEventListener('change', () => {
      if (select.value) selectState(select.value);
    });

    // Back/forward support (handles both clean URLs and ?state=).
    window.addEventListener('popstate', () => {
      const abbr = abbrFromLocation();
      if (abbr) {
        select.value = abbr;
        renderState(abbr);
      } else clearState();
    });

    // Initial render if the URL already points at a state.
    const initial = abbrFromLocation();
    if (initial) {
      select.value = initial;
      renderState(initial);
    }

    // Pull live overrides after first paint so the page is never blocked.
    if ('requestIdleCallback' in window) requestIdleCallback(loadLiveData, { timeout: 2000 });
    else setTimeout(loadLiveData, 600);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else init();
})();
