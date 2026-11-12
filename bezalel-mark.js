/* Bezalel Works maker's mark. Exodus 31:3 */
(function () {
  if (document.getElementById('bw-mark')) return;
  var css = document.createElement('style');
  css.textContent =
    '#bw-mark{display:flex;align-items:center;justify-content:center;gap:8px;' +
    'padding:28px 16px calc(96px + env(safe-area-inset-bottom,0px));' +
    'font:500 12px/1.4 system-ui,-apple-system,"Segoe UI",sans-serif;letter-spacing:.06em;' +
    'color:inherit;opacity:.72;text-align:center;clear:both}' +
    '#bw-mark img{width:22px;height:22px;flex:none}' +
    '#bw-mark b{font-family:Georgia,"Times New Roman",serif;font-weight:700;letter-spacing:.14em}' +
    '@media print{#bw-mark{display:none}}';
  document.head.appendChild(css);
  var src = (document.currentScript && document.currentScript.src) || 'bezalel-mark.js';
  var mark = document.createElement('div');
  mark.id = 'bw-mark';
  mark.title = 'Exodus 31:3';
  mark.innerHTML =
    '<img src="' + src.replace(/bezalel-mark\.js.*$/, 'bw-mark.svg') + '" alt="">' +
    '<span>Sealed by <b>BEZALEL WORKS</b> · Exodus 31:3</span>';
  function place() { document.body.appendChild(mark); }
  if (document.body) place(); else document.addEventListener('DOMContentLoaded', place);
})();
