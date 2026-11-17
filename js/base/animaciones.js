/* =========================================================
   BASE · animaciones de entrada, parallax y bandas en movimiento
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $, $$, reduce, finePointer } = AC;

  function partirTitulos() {
    $$(".titulo-anim").forEach(t => {
      if (t.dataset.partido) return;
      t.dataset.partido = 1;
      let i = 0;
      const recorrer = nodo => {
        Array.from(nodo.childNodes).forEach(n => {
          if (n.nodeType === 3) {
            const frag = document.createDocumentFragment();
            n.textContent.split(/(\s+)/).forEach(w => {
              if (!w) return;
              if (/^\s+$/.test(w)) { frag.append(" "); return; }
              const s = document.createElement("span"); s.className = "palabra";
              const inner = document.createElement("span"); inner.textContent = w; inner.style.setProperty("--i", i++);
              s.append(inner); frag.append(s);
            });
            n.replaceWith(frag);
          } else if (n.nodeType === 1 && !n.classList.contains("subrayado")) recorrer(n);
          else if (n.nodeType === 1) {
            const s = document.createElement("span"); s.className = "palabra";
            const inner = document.createElement("span"); inner.style.setProperty("--i", i++);
            n.replaceWith(s); inner.append(n); s.append(inner);
          }
        });
      };
      recorrer(t);
    });
  }

  function revelar() {
    partirTitulos();
    $$(".flecha path, .subrayado path").forEach(p => { try { p.parentNode.style.setProperty("--len", Math.ceil(p.getTotalLength()) + 2); } catch (e) {} });
    const els = $$("[data-anim], .titulo-anim, .flecha, .subrayado");
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("visible")); return; }
    const io = new IntersectionObserver(ents => ents.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
    }), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(e => { if (!e.classList.contains("visible")) io.observe(e); });
  }
  window.REVELAR = revelar;

  /* parallax y giros con scroll + mouse */
  function movimiento() {
    if (reduce) return;
    const par = $$("[data-parallax]"), gir = $$("[data-girar]");
    let mx = 0, my = 0, tx = 0, ty = 0;
    if (finePointer) addEventListener("pointermove", e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; }, { passive: true });
    (function loop() {
      tx += (mx - tx) * .06; ty += (my - ty) * .06;
      const y = scrollY;
      par.forEach(el => {
        const f = parseFloat(el.dataset.parallax) || 1;
        el.style.translate = `${tx * f * 40}px ${ty * f * 40 - y * f * .06}px`;
      });
      gir.forEach(el => { el.style.rotate = `${y * (parseFloat(el.dataset.girar) || .1)}deg`; });
      requestAnimationFrame(loop);
    })();
  }

  /* cintas de texto: duplicar contenido */
  function marquees() {
    $$(".marquee__pista, .notas").forEach(p => {
      if (p.dataset.dup) return; p.dataset.dup = 1;
      const kids = Array.from(p.children);
      kids.forEach(k => { const c = k.cloneNode(true); c.setAttribute("aria-hidden", "true"); p.append(c); });
    });
  }

  Object.assign(AC, { partirTitulos, revelar, movimiento, marquees });
})(window.AC);
