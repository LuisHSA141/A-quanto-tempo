const fs = require('fs');
const path = require('path');

// Ponto de partida FIXO do cronômetro (calculado pra bater com o tempo que
// já estava rodando no site). Todo deploy usa esse mesmo valor, então o
// contador nunca reseta sozinho, ele sempre continua contando certo desde
// aqui, não importa quantas vezes você faça push.
//
// SÓ mexa nisso se quiser fazer o cronômetro reiniciar do zero de propósito
// (por exemplo, quando o RPG realmente recomeçar). Nesse caso, troque o
// valor abaixo pelo resultado deste comando rodado no console do navegador:
// Date.now()
const ANCHOR_TIMESTAMP = 1788684057566; // 2026-09-06T08:40:57.566Z

const output = path.join(__dirname, '..', 'public', 'start-time.js');
const iso = new Date(ANCHOR_TIMESTAMP).toISOString();

fs.writeFileSync(
  output,
  `// Generated automatically during deployment/build.\nwindow.TIMER_STARTED_AT = ${ANCHOR_TIMESTAMP};\nwindow.TIMER_STARTED_AT_ISO = ${JSON.stringify(iso)};\n\n// Local testing fallback: Live Server / localhost starts a fresh local timer.\nif (location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1') {\n  window.TIMER_STARTED_AT = Date.now();\n  window.TIMER_STARTED_AT_ISO = new Date(window.TIMER_STARTED_AT).toISOString();\n}\n`,
  'utf8'
);

console.log(`[141] deploy timer anchored at ${iso}`);
