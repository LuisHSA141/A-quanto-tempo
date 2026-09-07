// Timestamp fixo de início do cronômetro. Não muda sozinho a cada deploy:
// só atualize os dois valores abaixo quando você quiser reiniciar a contagem.
//
// Pra fazer o contador já "nascer" marcando um tempo que já tinha se passado
// (por exemplo, pra não perder o 1 dia / 4 horas / 10 min que já tinham
// rodado antes dessa atualização), rode isto no console do navegador (F12)
// bem na hora que for commitar, e cole o resultado nas duas linhas abaixo:
//
// (() => { const offset = (1*86400000)+(4*3600000)+(10*60000); const t = Date.now()-offset; console.log("window.TIMER_STARTED_AT = "+t+";\nwindow.TIMER_STARTED_AT_ISO = \""+new Date(t).toISOString()+"\";"); })();
//
// Troque os números 1 (dias), 4 (horas) e 10 (minutos) se quiser outro valor.

window.TIMER_STARTED_AT = 1788682233481;
window.TIMER_STARTED_AT_ISO = "2026-09-06T08:10:33.481Z";

// Local testing fallback: Live Server / localhost starts a fresh local timer.
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  window.TIMER_STARTED_AT = Date.now();
  window.TIMER_STARTED_AT_ISO = new Date(window.TIMER_STARTED_AT).toISOString();
}
