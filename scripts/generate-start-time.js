const fs = require('fs');
const path = require('path');

const output = path.join(__dirname, '..', 'public', 'start-time.js');
const now = Date.now();
const iso = new Date(now).toISOString();

fs.writeFileSync(
  output,
  `// Generated automatically during deployment/build.\nwindow.TIMER_STARTED_AT = ${now};\nwindow.TIMER_STARTED_AT_ISO = ${JSON.stringify(iso)};\n\n// Local testing fallback: Live Server / localhost starts a fresh local timer.\nif (location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1') {\n  window.TIMER_STARTED_AT = Date.now();\n  window.TIMER_STARTED_AT_ISO = new Date(window.TIMER_STARTED_AT).toISOString();\n}\n`,
  'utf8'
);

console.log(`[141] deploy timer started at ${iso}`);
