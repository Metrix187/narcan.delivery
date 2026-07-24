// registers the service worker so the rescue steps work offline.
// separate file (not inline) because CSP blocks inline scripts.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => { /* offline support is a bonus, never an error */ });
  });
}
