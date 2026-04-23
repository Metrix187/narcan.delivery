// Amplitude analytics + session replay init.
// Kept in a separate file so index.html has no inline executable scripts
// (lets CSP stay strict: no 'unsafe-inline' in script-src).
// Depends on the two Amplitude CDN scripts loaded immediately before this one.
(function () {
  if (!window.amplitude || !window.sessionReplay) return;
  window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
  window.amplitude.init('8f6e685f58514638a77de822e21ae0a9', {
    autocapture: { elementInteractions: true }
  });
})();
