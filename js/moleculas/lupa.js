/* =========================================================
   MOLÉCULA · lupa que revela el boceto debajo de una pieza
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $, $$, boceto } = AC;

  function lupas() {
    $$(".lupa-zona").forEach(z => {
      if (z.dataset.lupa) return; z.dataset.lupa = 1;
      const capa = $(".capa-boceto", z);
      if (!capa) return;
      let r = 0, objetivo = 0, raf;
      const R = () => Math.max(60, Math.min(90, z.clientWidth * .16));
      const animar = () => {
        r += (objetivo - r) * .18;
        capa.style.setProperty("--lr", r.toFixed(1) + "px");
        if (Math.abs(objetivo - r) > .3) raf = requestAnimationFrame(animar); else capa.style.setProperty("--lr", objetivo + "px");
      };
      const mover = e => {
        const b = z.getBoundingClientRect();
        capa.style.setProperty("--lx", (e.clientX - b.left) + "px");
        capa.style.setProperty("--ly", (e.clientY - b.top) + "px");
      };
      const abrir = e => { mover(e); objetivo = R(); cancelAnimationFrame(raf); animar(); };
      const cerrar = () => { objetivo = 0; cancelAnimationFrame(raf); animar(); };
      z.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") abrir(e); });
      z.addEventListener("pointermove", mover);
      z.addEventListener("pointerleave", cerrar);
      z.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") abrir(e); });
      z.addEventListener("pointerup", e => { if (e.pointerType !== "mouse") cerrar(); });
      z.addEventListener("pointercancel", cerrar);
    });
  }
  window.LUPAS = lupas;
  Object.assign(AC, { lupas });
})(window.AC);
