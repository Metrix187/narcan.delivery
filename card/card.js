/* narcan.delivery print card: wire the Print / Save as PDF button.
   Kept as an external file so it complies with the site's script-src 'self' CSP. */
document.getElementById('print')?.addEventListener('click', () => window.print());
