/* =========================================================
   PÁGINA · design-system: muestra el valor real de cada token
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $$ } = AC;
  AC.paginas["design-system"] = () => {
    const cs = getComputedStyle(document.documentElement);
    $$("[data-var]").forEach(el => { el.textContent = cs.getPropertyValue(el.dataset.var).trim().toUpperCase(); });
  };
})(window.AC);
