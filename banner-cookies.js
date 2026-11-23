// Aviso de cookies de Sabor Supremo Coatlinchán
// Uso: incluir en la página con <script src="/banner-cookies.js" defer></script>
// Guarda la elección en localStorage (clave "ss_cookies") y no vuelve a mostrar
// el aviso. Enlaza a /politica-de-cookies.html.
(function () {
  var CLAVE = 'ss_cookies';
  try {
    if (localStorage.getItem(CLAVE)) return; // ya eligió antes
  } catch (e) { /* si el navegador bloquea el almacenamiento, se muestra igual */ }

  var banner = document.createElement('div');
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Aviso de cookies');
  banner.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:9999;' +
    'background:#26221f;color:#fff8f0;padding:14px 18px;display:flex;' +
    'flex-wrap:wrap;gap:10px;align-items:center;justify-content:center;' +
    'font-family:system-ui,sans-serif;font-size:15px;box-shadow:0 -2px 12px rgba(0,0,0,.25);';

  var texto = document.createElement('span');
  texto.innerHTML = '🍪 Usamos cookies para recordar tus preferencias y mejorar tu visita. ' +
    'Consulta nuestra <a href="/politica-de-cookies.html" style="color:#f2b8c6;' +
    'text-decoration:underline;">Política de Cookies</a>.';

  function boton(etiqueta, fondo, color) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = etiqueta;
    b.style.cssText = 'border:0;border-radius:999px;padding:9px 20px;cursor:pointer;' +
      'font-size:15px;font-weight:600;background:' + fondo + ';color:' + color + ';';
    return b;
  }

  function elegir(valor) {
    try { localStorage.setItem(CLAVE, valor); } catch (e) {}
    banner.remove();
  }

  var aceptar = boton('Aceptar', '#e8b4b8', '#26221f');
  aceptar.addEventListener('click', function () { elegir('aceptadas'); });
  var rechazar = boton('Rechazar', 'transparent', '#fff8f0');
  rechazar.style.border = '1px solid #fff8f0';
  rechazar.addEventListener('click', function () { elegir('rechazadas'); });

  banner.appendChild(texto);
  banner.appendChild(aceptar);
  banner.appendChild(rechazar);
  document.body.appendChild(banner);
})();
