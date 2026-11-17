/* =========================================================
   ORGANISMO · cursor personalizado (ver, mover, lupa)
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $, finePointer } = AC;

  function cursor() {
    if (!finePointer) return;
    document.documentElement.classList.add("hay-cursor");
    const c = $(".cursor"), p = $(".cursor-punto"), txt = $(".cursor-txt");
    let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
    addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; p.style.transform = `translate(${mx}px,${my}px)`; }, { passive: true });
    (function loop() {
      cx += (mx - cx) * .2; cy += (my - cy) * .2;
      c.style.transform = `translate(${cx}px,${cy}px)`;
      requestAnimationFrame(loop);
    })();
    document.addEventListener("pointerover", e => {
      const el = e.target.closest("[data-cursor], a, button, label, summary, input[type=range]");
      c.className = "cursor";
      txt.textContent = "";
      p.style.opacity = 1;
      if (!el) return;
      const tipo = el.dataset.cursor;
      if (tipo === "ver") { c.classList.add("es-ver"); txt.textContent = el.dataset.cursorTxt || "Ver"; }
      else if (tipo === "arrastrar") { c.classList.add("es-arrastrar"); txt.textContent = "Mover"; }
      else if (tipo === "lupa") { c.classList.add("es-lupa"); p.style.opacity = 0; }
      else c.classList.add("es-enlace");
    });
    document.addEventListener("pointerleave", () => { c.style.opacity = 0; p.style.opacity = 0; });
    document.addEventListener("pointerenter", () => { c.style.opacity = 1; p.style.opacity = 1; });
  }

  Object.assign(AC, { cursor });
})(window.AC);
