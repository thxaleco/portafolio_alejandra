/* =========================================================
   PÁGINA · inicio
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $, mesa } = AC;

  AC.paginas["inicio"] = () => {
    const d = $("#mesa-inicio");
    if (d) mesa(d, window.PROYECTOS.slice(0, 4), innerWidth < 600
      ? [[3, 3], [49, 9], [5, 51], [49, 56]]
      : [[3, 10], [27, 4], [52, 12], [76, 5]]);
  };

})(window.AC);
