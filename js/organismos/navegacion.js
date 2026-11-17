/* =========================================================
   ORGANISMO · navegación: ocultar al bajar, menú móvil y barra de progreso
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $ } = AC;

  function navegacion() {
    const nav = $(".nav"), prog = $(".progreso");
    let ultimo = 0;
    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle("con-sombra", y > 20);
      nav.classList.toggle("oculta", y > ultimo && y > 300 && !document.body.classList.contains("menu-abierto"));
      ultimo = y;
      const h = document.documentElement.scrollHeight - innerHeight;
      prog.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const btn = $(".hamburguesa"), menu = $(".menu-movil");
    menu.inert = true;
    btn.setAttribute("aria-controls", "menu-movil");
    menu.id = "menu-movil";
    addEventListener("keydown", e => { if (e.key === "Escape" && document.body.classList.contains("menu-abierto")) btn.click(); });
    btn.addEventListener("click", () => {
      const abierto = document.body.classList.toggle("menu-abierto");
      btn.setAttribute("aria-expanded", abierto);
      btn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
      menu.setAttribute("aria-hidden", !abierto);
      menu.inert = !abierto;
      document.body.style.overflow = abierto ? "hidden" : "";
    });
  }

  Object.assign(AC, { navegacion });
})(window.AC);
