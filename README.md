# narcan.delivery

A plain-English, state-by-state guide to getting naloxone (Narcan) in the
United States. Static site. No tracking of user identity. No ads.

**Live:** https://narcan.delivery

## How it works

- `index.html` is the homepage; picking a state navigates to
  `/states/<slug>/`, which is pre-rendered at build time.
- `data.js` holds the baseline dataset for all 50 states.
- A published Google Sheet can override any field at build time *and* at
  runtime — editors don't need to touch code to fix a number.
- `build.mjs` emits pre-rendered HTML for every state, plus `data.json` and
  `sitemap.xml`. Runs in Node 18+ with zero dependencies.

```
.
├── index.html            homepage + SPA shell
├── styles.css            design system
├── app.js                client-side state switcher + sheet merge
├── data.js               embedded 50-state dataset
├── build.mjs             prerender script
├── states/<slug>/        generated per-state pages
├── data.json             generated public JSON mirror
├── sitemap.xml           generated sitemap
├── .htaccess             Apache config (if ever hosted on cPanel)
└── .github/workflows/    CI + nightly rebuild
```

## Editing state data

**Fast, no redeploy needed:** edit the Google Sheet at the URL hard-coded in
`app.js` / `build.mjs`. Users see changes within an hour (next nightly
rebuild bakes them into the pre-rendered HTML; clients also merge them live).

**Permanent:** edit `data.js` and commit. Cloudflare Pages rebuilds on push.

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
once a day so Google Sheet edits flow into pre-rendered HTML even when
there's no commit.

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
