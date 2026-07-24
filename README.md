# narcan.delivery

A plain-English, state-by-state guide to getting naloxone (Narcan) in the
United States. Static site. No tracking of user identity. No ads.

**Live:** https://narcan.delivery

## How it works

- `index.html` is the homepage; picking a state navigates to
  `/states/<slug>/`, which is pre-rendered at build time.
- `data.js` is the dataset for all 50 states and the single source of truth.
  Edits land as commits; there is no external data layer.
- `build.mjs` emits pre-rendered HTML for every state, plus `data.json` and
  `sitemap.xml`. Runs in Node 18+ with zero dependencies.

```
.
├── index.html            homepage + SPA shell
├── styles.css            design system
├── app.js                client-side state switcher
├── data.js               the 50-state dataset (source of truth)
├── data.es.js            Spanish overlay for the per-state pages
├── build.mjs             prerender script
├── states/<slug>/        generated per-state pages
├── es/                   Spanish landing + generated state pages
├── data.json             generated public JSON mirror
├── sitemap.xml           generated sitemap
├── .htaccess             Apache config (if ever hosted on cPanel)
└── .github/workflows/    CI + nightly rebuild
```

## Editing state data

Edit `data.js`, commit, push. Cloudflare Pages rebuilds on every push to
`main`, so a data fix is live in a couple of minutes. Every change gets git
history, review, and CI for free — which is the whole durability story too:
the dataset lives in this repo, mirrored on every clone and on Cloudflare's
deploy. (An optional off-cloud copy, an ESP32-C6 that watches the published
`data.json`, lives in [`firmware/`](firmware/).)

This replaced an earlier Google Sheet override layer; the sheet's final state
was baked into `data.js` before it was retired.

## Running locally

```bash
npm run build     # prerender + emit data.json + sitemap.xml
npm run serve     # serves on http://localhost:8080
```

## Deploying

Hosted on **Cloudflare Pages**, connected to this GitHub repo.

- Build command: `npm run build`
- Output directory: `/` (root)
- Node version: 20

Cloudflare builds on every push to `main`. A nightly GitHub Action
(`.github/workflows/nightly-rebuild.yml`) pings the Cloudflare deploy hook
once a day so time-derived output (the "Needs review" staleness pills,
sitemap dates) stays honest even when nothing is committed.

### Secrets

| Secret | Where | What it does |
| --- | --- | --- |
| `CLOUDFLARE_DEPLOY_HOOK` | GitHub repo → Settings → Secrets → Actions | URL from Cloudflare Pages → Settings → Builds → Deploy hooks. Lets the nightly action trigger a rebuild. |

## Data policy

All data in this repository is public-interest information aggregated from
state health departments, pharmacy boards, and harm-reduction nonprofits.
Treat it as a reference starting point, not a legal or medical authority.
Corrections welcome — open an issue or PR.

## License

Content: CC0. Code: MIT.
