/* =========================================================
   ORGANISMO · enlaces a ALMA, la app de brief
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $$, C, toast } = AC;

  /* enlaces a ALMA (app de brief) */
  function alma() {
    $$("[data-alma]").forEach(a => {
      if (C.alma) { a.href = C.alma; a.target = "_blank"; a.rel = "noopener"; }
      else a.addEventListener("click", e => { e.preventDefault(); toast("Aquí irá el enlace a ALMA, mi app de brief."); });
    });
  }
  Object.assign(AC, { alma });
})(window.AC);
