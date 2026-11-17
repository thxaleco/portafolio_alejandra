/* =========================================================
   ORGANISMO · transición de papel entre páginas
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $, reduce } = AC;

  function transiciones() {
    const t = $(".transicion");
    if (reduce) { t.style.display = "none"; return; }
    requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add("sale")));
    window.addEventListener("pageshow", e => { if (e.persisted) { t.classList.remove("cubre", "entra"); t.classList.add("sale"); } });

    document.addEventListener("click", e => {
      const a = e.target.closest("a");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || /^(https?:|mailto:|tel:)/.test(href) || !/\.html/.test(href)) return;
      // misma página con hash distinto (ficha de proyecto)
      const [archivo] = href.split("#");
      const actualArchivo = location.pathname.split("/").pop() || "index.html";
      if (archivo === actualArchivo && href.includes("#")) return;
      e.preventDefault();
      t.classList.remove("sale"); t.classList.add("entra");
      void t.offsetWidth;
      t.classList.remove("entra"); t.classList.add("cubre");
      setTimeout(() => { location.href = href; }, 650);
    });
  }

  Object.assign(AC, { transiciones });
})(window.AC);
