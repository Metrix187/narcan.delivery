# narcan.delivery

A plain-English, state-by-state guide to getting free naloxone (Narcan) in the United States. No prescription required in most states.

Live site: https://narcan.delivery
A Quantara Innovations project (https://quantara.cv) | contact@narcan.delivery

---

## Why this exists

Naloxone reverses opioid overdose and saves lives. Getting it should not require navigating insurance, a doctor's visit, or knowing the right terminology. This site gives anyone in the US a direct, honest answer: here's where you go in your state, what it costs, and what to say.

No tracking. No ads. No accounts. Just information.

---

## What's inside

- Static HTML/CSS site, one page per state under /states/state-slug/
- - State data in /data/states.json -- source-of-truth for availability, cost, and pharmacy access
  - - index.html is the homepage with state picker
    - - build.py regenerates state pages from the JSON data
     
      - ---

      ## Run locally

      Clone the repo and serve it:

        git clone https://github.com/Metrix187/narcan.delivery
        cd narcan.delivery
        python -m http.server 8000

      Open http://localhost:8000 in your browser.

      To rebuild state pages after editing data: python build.py

      ---

      ## Contributing

      State laws and pharmacy programs change. If you spot outdated information for your state, open an issue or PR. Please include a source and date.

      ---

      ## Status

      Active - updated as state policies change.

      ## License

      MIT
