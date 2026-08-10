# narcan.delivery

[![Build](https://github.com/Metrix187/narcan.delivery/actions/workflows/build-check.yml/badge.svg)](https://github.com/Metrix187/narcan.delivery/actions/workflows/build-check.yml)
![Status: Active](https://img.shields.io/badge/status-active-brightgreen)
[![License](https://img.shields.io/badge/license-CC0%20%2F%20MIT-blue)](#license)

Plain-English, state-by-state guide to getting naloxone (Narcan) in the United States. Static site. No tracking. No ads.

**Live:** https://narcan.delivery
A project by **Quantara Innovations** · [contact@narcan.delivery](mailto:contact@narcan.delivery)

---

## Why this exists

Opioid overdose is reversible with naloxone — but access varies wildly by state. Some let you walk into any pharmacy; others require a prescription; some offer it free through harm-reduction programs. This site distills that patchwork into one honest, current, plain-English reference. The dataset lives in this repo as plain JS, updated by PR, rebuilt in minutes on every push. No external data layer, no admin dashboard, no single point of failure.

## How it works

| File | Purpose |
|------|---------|
| `index.html` | Homepage + SPA shell |
| `data.js` | 50-state dataset — single source of truth |
| `data.es.js` | Spanish overlay |
| `build.mjs` | Validates data, pre-renders state pages, emits `data.json` / `sitemap.xml` / service worker (Node 18+, zero deps) |
| `sw.js` | Service worker — offline-caches all 50 states after first visit |

A weekly Action probes every source link and keeps a "link rot" issue updated.

## Installation

Requires **Node 18+**.

```bash
npm run build    # validate + prerender + emit data.json / sitemap / sw
npm test         # data-gate test suite (also runs in CI before every build)
npm run validate # dataset checks only
npm run serve    # http://localhost:8080
```

## Deployment

Hosted on **Cloudflare Pages**. Build command: `npm run build`. Output directory: `/`. A nightly Action pings the deploy hook so time-derived output stays current even with no commits.

| Secret | Where | Purpose |
|--------|-------|---------|
| `CLOUDFLARE_DEPLOY_HOOK` | Repo → Settings → Secrets → Actions | Triggers nightly rebuild |

## Editing state data

Edit `data.js`, commit, push. CI validates before build; Cloudflare deploys in a few minutes. Git history, review, and CI are the whole durability story.

## Status

Active. Data reviewed regularly. Open an issue or PR for corrections; corrections are the point.

## License

Content: [CC0](https://creativecommons.org/publicdomain/zero/1.0/). Code: [MIT](LICENSE).

Data sourced from state health departments, pharmacy boards, and harm-reduction nonprofits. Reference only — not legal or medical advice.

---

> **Quantara Innovations** · [contact@narcan.delivery](mailto:contact@narcan.delivery)
