/* =========================================================
   APP · arranque: arma la estructura común y activa la página actual
   Alejandra Correa · Portafolio
   Cada paso va protegido: si uno falla, los demás siguen
   (así el contenido nunca se queda invisible).
   ========================================================= */
(function (AC) {
  "use strict";
  const pasos = [
    ["chrome", AC.chrome],
    ["página " + AC.pagina, AC.paginas[AC.pagina]],
    ["marquees", AC.marquees],
    ["navegacion", AC.navegacion],
    ["cursor", AC.cursor],
    ["transiciones", AC.transiciones],
    ["revelar", AC.revelar],
    ["lupas", AC.lupas],
    ["arrastrables", AC.arrastrables],
    ["movimiento", AC.movimiento],
    ["estrellas", AC.estrellas],
    ["alma", AC.alma]
  ];
  pasos.forEach(([nombre, fn]) => {
    if (typeof fn !== "function") return;
    try { fn(); } catch (e) { console.error(`[AC] Falló "${nombre}":`, e); }
  });
})(window.AC);
