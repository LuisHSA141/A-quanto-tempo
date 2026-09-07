const fs = require('fs');
const path = require('path');

// Tempo "já passado" que deve entrar no cronômetro assim que este deploy
// for ao ar. Deixe tudo em 0 pra reiniciar a contagem normalmente do zero.
// Se quiser que o site já nasça marcando, por exemplo, 1 dia / 4 horas /
// 10 min (porque ele já estava parado por esse tempo antes da atualização),
// defina os valores abaixo ANTES de commitar. Depois desse deploy, volte
// tudo pra 0 de novo pro próximo update resetar normal.
const OFFSET_DAYS = 1;
const OFFSET_HOURS = 4;
const OFFSET_MINUTES = 10;

const output = path.join(__dirname, '..', 'public', 'start-time.js');
const offsetMs = (OFFSET_DAYS * 86400 + OFFSET_HOURS * 3600 + OFFSET_MINUTES * 60) * 1000;
const now = Date.now() - offsetMs;
const iso = new Date(now).toISOString();

fs.writeFileSync(
  output,
  `// Generated automatically during deployment/build.\nwindow.TIMER_STARTED_AT = ${now};\nwindow.TIMER_STARTED_AT_ISO = ${JSON.stringify(iso)};\n\n// Local testing fallback: Live Server / localhost starts a fresh local timer.\nif (location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1') {\n  window.TIMER_STARTED_AT = Date.now();\n  window.TIMER_STARTED_AT_ISO = new Date(window.TIMER_STARTED_AT).toISOString();\n}\n`,
  'utf8'
);

console.log(`[141] deploy timer started at ${iso} (offset: ${OFFSET_DAYS}d ${OFFSET_HOURS}h ${OFFSET_MINUTES}m)`);
