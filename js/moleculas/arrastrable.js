/* =========================================================
   MOLÉCULA · elementos arrastrables (collage, mesa, detrás de escena)
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $$ } = AC;

  let zTop = 60;
  function arrastrables(raiz = document) {
    $$("[data-arrastrable]", raiz).forEach(el => {
      if (el.dataset.drag) return; el.dataset.drag = 1;
      el.setAttribute("data-cursor", el.getAttribute("data-cursor") || "arrastrar");
      let sx, sy, ox, oy, movido = false, activo = false;
      el.addEventListener("pointerdown", e => {
        if (e.button !== 0 || e.target.closest(".abrir")) return;
        const padre = el.offsetParent || el.parentElement;
        activo = true; movido = false;
        sx = e.clientX; sy = e.clientY; ox = el.offsetLeft; oy = el.offsetTop;
        el._padre = padre;
        el.setPointerCapture(e.pointerId);
        el.style.zIndex = ++zTop;
      });
      el.addEventListener("pointermove", e => {
        if (!activo) return;
        const dx = e.clientX - sx, dy = e.clientY - sy;
        if (!movido && Math.hypot(dx, dy) < 5) return;
        movido = true; el.classList.add("arrastrando");
        const P = el._padre, maxX = P.clientWidth - el.offsetWidth * .4, maxY = P.clientHeight - el.offsetHeight * .4;
        const nx = Math.max(-el.offsetWidth * .4, Math.min(maxX, ox + dx));
        const ny = Math.max(-el.offsetHeight * .3, Math.min(maxY, oy + dy));
        el.style.left = (nx / P.clientWidth * 100) + "%";
        el.style.top = (ny / P.clientHeight * 100) + "%";
        el.style.right = "auto"; el.style.bottom = "auto";
      });
      const fin = () => {
        if (!activo) return;
        activo = false; el.classList.remove("arrastrando");
        if (movido) { el._bloquearClick = true; setTimeout(() => el._bloquearClick = false, 50); }
      };
      el.addEventListener("pointerup", fin);
      el.addEventListener("pointercancel", fin);
      el.addEventListener("click", e => { if (el._bloquearClick) { e.preventDefault(); e.stopPropagation(); } }, true);
      // teclado: mover con flechas
      el.tabIndex = el.tabIndex >= 0 ? el.tabIndex : 0;
      el.addEventListener("keydown", e => {
        const paso = e.shiftKey ? 5 : 1.5, P = el.offsetParent; if (!P) return;
        const l = el.offsetLeft / P.clientWidth * 100, t = el.offsetTop / P.clientHeight * 100;
        const m = { ArrowLeft: [-paso, 0], ArrowRight: [paso, 0], ArrowUp: [0, -paso], ArrowDown: [0, paso] }[e.key];
        if (!m) return; e.preventDefault();
        el.style.left = (l + m[0]) + "%"; el.style.top = (t + m[1]) + "%"; el.style.right = "auto"; el.style.bottom = "auto";
      });
    });
  }
  window.ARRASTRABLES = arrastrables;
  Object.assign(AC, { arrastrables });
})(window.AC);
