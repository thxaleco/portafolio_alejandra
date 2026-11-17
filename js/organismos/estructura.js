/* =========================================================
   ORGANISMOS · header (navegación), menú móvil, footer, aviso, modal y transición
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $, pagina, C, I, boceto } = AC;

  const paginas = [
    ["index.html", "Inicio", "inicio"],
    ["proyectos.html", "Proyectos", "proyectos"],
    ["sobre-mi.html", "Sobre mí", "sobre-mi"],
    ["contacto.html", "Contacto", "contacto"]
  ];
  const actual = pagina === "proyecto" ? "proyectos" : pagina;

  function chrome() {
    const nav = document.createElement("header");
    nav.innerHTML = `
      <div class="progreso" aria-hidden="true"></div>
      <nav class="nav" aria-label="Principal">
        <a class="logo" href="index.html" aria-label="Alejandra Correa, inicio"><b>Alejandra Correa</b><span>Diseñadora crossmedia</span></a>
        <ul class="nav__links">
          ${paginas.map(p => `<li><a href="${p[0]}"${p[2] === actual ? ' aria-current="page"' : ""}>${p[1]}</a></li>`).join("")}
        </ul>
        <div class="nav__der">
          <button class="contador-estrellas" type="button" title="Estrellas encontradas" aria-label="Estrellas encontradas"><img src="assets/estrella-oro.webp" alt=""><span class="contador-num">0/5</span></button>
          <a class="btn nav__cta" href="contacto.html">Trabajemos ${I.flecha}</a>
          <button class="hamburguesa" type="button" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span></button>
        </div>
      </nav>
      <div class="menu-movil" aria-hidden="true">
        ${paginas.map((p, i) => `<a href="${p[0]}">${i % 2 ? "<em>" + p[1] + "</em>" : p[1]}</a>`).join("")}
        <p class="menu-movil__pie">@${C.instagram} · ${C.whatsappVisible}</p>
        <img class="flor-deco" src="assets/flor.webp" alt="">
      </div>`;
    const saltar = $(".saltar");
    if (saltar) saltar.after(nav); else document.body.prepend(nav);

    const footer = document.createElement("footer");
    footer.className = "footer corte-top";
    footer.style.setProperty("--corte", "var(--pino)");
    footer.innerHTML = `
      <div class="contenedor">
        <div class="row gy-5 footer__grid">
          <div class="col-12 col-lg-6">
            <p class="footer__grande">¿Empezamos?<br><em>Démosle forma.</em></p>
            <a class="btn btn--crema" href="contacto.html" style="margin-top:26px">Escríbeme ${I.flecha}</a>
          </div>
          <div class="col-6 col-lg-3">
            <h4>Navegar</h4>
            <ul>${paginas.map(p => `<li><a href="${p[0]}">${p[1]}</a></li>`).join("")}</ul>
          </div>
          <div class="col-6 col-lg-3">
            <h4>Conectemos</h4>
            <ul>
              <li><a href="https://instagram.com/${C.instagram}" target="_blank" rel="noopener">Instagram</a></li>
              ${C.behance ? `<li><a href="${C.behance}" target="_blank" rel="noopener">Behance</a></li>` : ""}
              ${C.tiktok ? `<li><a href="${C.tiktok}" target="_blank" rel="noopener">TikTok</a></li>` : ""}
              ${C.correo ? `<li><a href="mailto:${C.correo}">Correo</a></li>` : ""}
              <li><a href="https://wa.me/${C.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__firma" aria-hidden="true">Alejandra Correa</div>
        <div class="footer__base"><span>© ${new Date().getFullYear()} Alejandra Correa · Pereira, Colombia</span><span><a href="design-system.html">Design System</a> · Busco estrellas en lo cotidiano ✦</span></div>
      </div>`;
    document.body.append(footer);

    const extra = document.createElement("div");
    extra.innerHTML = `
      <div class="cursor" aria-hidden="true"><span class="cursor-txt"></span></div>
      <div class="cursor-punto" aria-hidden="true"></div>
      <div class="toast" role="status" aria-live="polite"><img src="assets/estrella-oro.webp" alt=""><span></span></div>
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
        <div class="modal__caja">
          <button class="modal__cerrar" type="button" aria-label="Cerrar"></button>
          <div class="estrellas-fila">${'<img src="assets/estrella-oro.webp" alt="">'.repeat(5)}</div>
          <h2 id="modal-titulo">¡Encontraste <em>las cinco!</em></h2>
          <p>Yo también busco estrellas en lo cotidiano: en preguntas, objetos, lugares y personas. Si llegaste hasta aquí, eres de quienes miran de cerca.</p>
          ${boceto({ label: "Boceto inédito (sorpresa)" })}
          <a class="btn" href="contacto.html">Hablemos ${I.flecha}</a>
        </div>
      </div>
      <div class="transicion" aria-hidden="true"><div class="transicion__hoja"><img src="assets/estrella-mora.webp" alt=""></div></div>`;
    document.body.append(...extra.children);
  }

  Object.assign(AC, { chrome });
})(window.AC);
