/* =========================================================
   PÁGINA · contacto
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $, $$, C, toast } = AC;

  AC.paginas["contacto"] = () => {
    // Enlaces de cada postal según los datos de CONTACTO (js/datos.js)
    $$("[data-c]").forEach(el => {
      const k = el.dataset.c;
      const map = {
        whatsapp: ["https://wa.me/" + C.whatsapp, C.whatsappVisible],
        instagram: ["https://instagram.com/" + C.instagram, "@" + C.instagram],
        correo: ["mailto:" + C.correo, C.correo],
        behance: [C.behance, "Ver perfil"],
        tiktok: [C.tiktok, C.tiktok ? "@" + C.tiktok.split("@").pop() : ""]
      }[k];
      if (!map) return;
      // sin dato real: no mostramos el canal
      const postal = el.closest(".postal");
      if (!C[k]) { if (postal) postal.remove(); return; }
      el.href = map[0];
      const sm = postal && $(".postal__pie small", postal);
      if (sm) sm.textContent = map[1];
    });

    // Botones de copiar (WhatsApp y correo)
    $$("[data-copiar]").forEach(b => b.addEventListener("click", async () => {
      const v = b.dataset.copiar === "correo" ? C.correo : C.whatsappVisible;
      try {
        await navigator.clipboard.writeText(v);
        toast(`Copiado: ${v}`);
        b.textContent = "¡Listo!";
        setTimeout(() => b.textContent = "Copiar", 1800);
      } catch (e) { toast(v); }
    }));
  };

})(window.AC);
