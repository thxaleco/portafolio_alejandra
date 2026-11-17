/* =========================================================
   ORGANISMO · juego de las 5 estrellas escondidas, aviso y modal
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $, $$, reduce, store } = AC;

  const TOTAL = 5;
  function toast(msg) {
    const t = $(".toast");
    $("span", t).textContent = msg;
    t.classList.add("visible");
    clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("visible"), 3200);
  }
  window.TOAST = toast;
  function abrirModal() {
    const m = $(".modal");
    m.classList.add("abierto");
    $(".modal__cerrar", m).focus();
  }
  function estrellas() {
    let encontradas = store.get("ac-estrellas", []);
    let vista = false; try { vista = sessionStorage.getItem("ac-pista") === "1"; sessionStorage.setItem("ac-pista", "1"); } catch (e) {}
    if (!vista && encontradas.length < TOTAL) setTimeout(() => toast(`Busco estrellas en lo cotidiano. Hay ${TOTAL} escondidas en esta web, ¿las encuentras?`), 2200);
    const num = $(".contador-num"), cont = $(".contador-estrellas");
    const pintar = () => { num.textContent = `${encontradas.length}/${TOTAL}`; };
    pintar();
    cont.addEventListener("click", () => {
      if (encontradas.length >= TOTAL) abrirModal();
      else toast(encontradas.length ? `Llevas ${encontradas.length} de ${TOTAL}. Sigue mirando de cerca…` : `Hay ${TOTAL} estrellas escondidas en esta web. ¿Las encuentras?`);
    });
    const m = $(".modal");
    $(".modal__cerrar", m).addEventListener("click", () => m.classList.remove("abierto"));
    m.addEventListener("click", e => { if (e.target === m) m.classList.remove("abierto"); });
    addEventListener("keydown", e => { if (e.key === "Escape") m.classList.remove("abierto"); });

    $$(".estrella-oculta").forEach(b => {
      const id = b.dataset.id;
      if (encontradas.includes(id)) { b.remove(); return; }
      b.innerHTML = `<img src="assets/estrella-${b.dataset.color || "oro"}.webp" alt="">`;
      b.setAttribute("aria-label", "Estrella escondida");
      b.type = "button";
      b.addEventListener("click", e => {
        if (encontradas.includes(id)) return;
        encontradas.push(id); store.set("ac-estrellas", encontradas);
        b.classList.add("encontrada");
        chispas(e.clientX, e.clientY);
        cont.classList.remove("pulso"); void cont.offsetWidth; cont.classList.add("pulso");
        pintar();
        if (encontradas.length >= TOTAL) setTimeout(abrirModal, 700);
        else toast(`¡Encontraste una estrella! Llevas ${encontradas.length} de ${TOTAL}.`);
      });
    });
  }
  function chispas(x, y) {
    if (reduce) return;
    const colores = ["#AE7F97", "#849078", "#683651", "#E8D9A8"];
    for (let i = 0; i < 16; i++) {
      const s = document.createElement("span");
      s.className = "chispa";
      s.style.background = colores[i % 4];
      s.style.left = x + "px"; s.style.top = y + "px";
      document.body.append(s);
      const a = Math.random() * Math.PI * 2, d = 40 + Math.random() * 70;
      s.animate([{ transform: "translate(-50%,-50%) scale(1)", opacity: 1 },
                 { transform: `translate(${Math.cos(a) * d - 4}px,${Math.sin(a) * d - 4}px) scale(0)`, opacity: 0 }],
                { duration: 700 + Math.random() * 300, easing: "cubic-bezier(.2,.8,.2,1)" }).onfinish = () => s.remove();
    }
  }

  Object.assign(AC, { toast, abrirModal, estrellas, chispas, TOTAL });
})(window.AC);
