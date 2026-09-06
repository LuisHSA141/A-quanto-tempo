// Generated automatically during deployment/build.
window.TIMER_STARTED_AT = 1788657199189;
window.TIMER_STARTED_AT_ISO = "2026-09-06T01:13:19.189Z";

// Local testing fallback: Live Server / localhost starts a fresh local timer.
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  window.TIMER_STARTED_AT = Date.now();
  window.TIMER_STARTED_AT_ISO = new Date(window.TIMER_STARTED_AT).toISOString();
}
