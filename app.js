/* narcan.delivery app.js
 * Vanilla JS. No framework. No build step.
 *
 * Responsibilities:
 *   - Populate the state picker.
 *   - Read / write the state from the URL (clean /states/<slug>/ or ?state=XX).
 *   - Render the state view from the embedded dataset (data.js, the single
 *     source of truth; edits land via git and redeploy).
 *   - Update <title>, <meta description>, and canonical on state change.
 */

(() => {
  'use strict';

  const DATA = (window.NALOXONE_DATA || []).slice().sort((a, b) =>
    a.state.localeCompare(b.state)
  );

  // slug <-> abbreviation maps for clean URLs (/states/california/)
  const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const SLUG_TO_ABBR = Object.fromEntries(DATA.map(s => [slugify(s.state), s.abbreviation]));
  const ABBR_TO_SLUG = Object.fromEntries(DATA.map(s => [s.abbreviation, slugify(s.state)]));
  const ABBR_TO_NAME = Object.fromEntries(DATA.map(s => [s.abbreviation, s.state]));
  const ADJACENCY = window.NALOXONE_ADJACENCY || {};

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

  // Appended to links that open a new tab so screen readers warn before activating.
  const NEW_TAB = ' <span class="sr-only">(opens in new tab)</span>';

  // Briefly announce a message in the polite live region (clears first so the
  // same message re-announces).
  const announce = (msg) => {
    const r = $('#sr-status');
    if (!r) return;
    r.textContent = '';
    requestAnimationFrame(() => { r.textContent = msg; });
  };

  const formatDate = (iso) => {
    if (!iso) return null;
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return null;
    // Date-only values (YYYY-MM-DD) parse as UTC midnight; format in UTC too so
    // a "2026-06-10" date never displays as the previous day west of Greenwich.
    return d.toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric', timeZone:'UTC' });
  };

  const isStale = (iso) => {
    if (!iso) return false;
    const d = new Date(iso); if (Number.isNaN(d.getTime())) return false;
    const cutoff = new Date(); cutoff.setMonth(cutoff.getMonth() - 6);
    return d < cutoff;
  };

  // Human-readable label for a source URL (bare hostname).
  const hostLabel = (url) => {
    try { return new URL(url).hostname.replace(/^www\./, ''); }
    catch { return String(url); }
  };

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
  const getState = (abbr) => DATA.find(s => s.abbreviation === abbr) || null;

  function orgItemHTML(org) {
    const parts = [];
    parts.push(`<strong>${escapeHTML(org.name)}</strong>`);
    if (org.services) parts.push(`<span class="services">${escapeHTML(org.services)}</span>`);
    const contact = [];
    if (org.website) contact.push(`<a href="${encodeURI(org.website)}" target="_blank" rel="noopener noreferrer">Visit website ↗${NEW_TAB}</a>`);
    if (org.phone)   contact.push(`<a href="tel:${escapeHTML(org.phone.replace(/[^0-9+]/g,''))}">${escapeHTML(org.phone)}</a>`);
    if (org.email)   contact.push(`<a href="mailto:${escapeHTML(org.email)}">${escapeHTML(org.email)}</a>`);
    if (contact.length) parts.push(`<span class="contact">${contact.join('')}</span>`);
    const cost = org.cost ? `<span class="cost-tag">${escapeHTML(org.cost)}</span>` : '';
    return `<li class="org-item"><div style="flex:1;min-width:0;">${parts.join('')}</div>${cost}</li>`;
  }

  // Wire up the interactive bits inside a state view. Works on both
  // client-rendered nodes and build-prerendered HTML.
  function hydrateView(view) {
    const changeLink = view.querySelector('.change-state');
    if (changeLink) changeLink.addEventListener('click', (e) => {
      e.preventDefault();
      clearState();
      $('#state').focus();
    });

    const btn = view.querySelector('#share-btn');
    const lbl = view.querySelector('#share-label');
    if (btn && lbl) btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        const prev = lbl.textContent;
        lbl.textContent = 'Link copied ✓';
        announce('Link copied');
        setTimeout(() => lbl.textContent = prev, 2000);
      } catch { /* no-op */ }
    });
  }

  function renderState(abbr, { focus = false } = {}) {
    const view = $('#state-view');
    const tpl  = $('#tpl-state');
    const s = getState(abbr);

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
    node.querySelector('[data-k="mechanism"]').textContent = ph.mechanism || 'Not listed';
    node.querySelector('[data-k="medicaid"]').textContent  = ph.medicaid_coverage_notes || 'Not listed';
    node.querySelector('[data-k="cost"]').textContent      = ph.typical_cost || 'Not listed';

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

    // Sources (provenance / link-rot trail)
    const srcWrap = node.querySelector('[data-k="sources-wrap"]');
    const srcList = node.querySelector('[data-k="sources"]');
    const sources = Array.isArray(s.sources) ? s.sources : [];
    if (sources.length) {
      srcList.innerHTML = sources.map(u =>
        `<li><a href="${encodeURI(u)}" target="_blank" rel="noopener noreferrer">${escapeHTML(hostLabel(u))}${NEW_TAB}</a></li>`
      ).join('');
    } else srcWrap.remove();

    // Bordering states (compare access across the line)
    const nbrWrap = node.querySelector('[data-k="neighbors-wrap"]');
    const nbrEl   = node.querySelector('[data-k="neighbors"]');
    const nbrs = (ADJACENCY[abbr] || []).filter(a => ABBR_TO_SLUG[a]);
    if (nbrs.length) {
      nbrEl.innerHTML = nbrs.map(a =>
        `<a class="chip" href="${stateUrl(a)}">${escapeHTML(ABBR_TO_NAME[a])}</a>`
      ).join('');
    } else nbrWrap.remove();

    // Mount. Once we render client-side, the prerendered marker no longer
    // describes what's in the DOM, so drop it (popstate back to the original
    // state must re-render, not skip).
    view.innerHTML = '';
    view.appendChild(node);
    view.hidden = false;
    delete view.dataset.prerendered;
    hydrateView(view);

    // SEO metadata
    updateDocMeta(s);

    // On user-initiated changes, move focus to the heading so screen-reader and
    // keyboard users land on the new content. Reveal it either way, honoring
    // the reduced-motion preference for the scroll.
    const heading = view.querySelector('.state-title');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (focus && heading) heading.focus({ preventScroll: true });
    requestAnimationFrame(() => {
      view.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
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
    renderState(abbr, { focus: true });
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
    document.title = `Naloxone in ${s.state}. How to get it fast | narcan.delivery`;
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
        renderState(abbr, { focus: true });
      } else clearState();
    });

    // Initial view. If the build already prerendered this exact state, keep
    // the server HTML (it can be fresher than a cached data.js) and just wire
    // up the buttons. Otherwise render client-side (e.g. /?state=XX).
    const initial = abbrFromLocation();
    if (initial) {
      select.value = initial;
      const view = $('#state-view');
      if (view && view.dataset.prerendered === initial && view.children.length) {
        hydrateView(view);
      } else {
        renderState(initial);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else init();
})();
