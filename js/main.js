/* =========================================================
   ALEJANDRA CORREA · Portafolio — interacciones
   ========================================================= */
(function () {
  "use strict";

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const pagina = document.body.dataset.pagina || "inicio";
  const C = window.CONTACTO || {};

  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
  };

  /* ---------------- Iconos ---------------- */
  const I = {
    flecha: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    flechaDiag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>',
    izq: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    lupa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/></svg>',
    clip: '<svg viewBox="0 0 40 80" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"><path d="M28 22v36a10 10 0 01-20 0V14a7 7 0 0114 0v40a3.5 3.5 0 01-7 0V22"/></svg>',
    lazo: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M32 30c-6-10-20-14-22-6s12 10 22 6zM32 30c6-10 20-14 22-6s-12 10-22 6z"/><circle cx="32" cy="30" r="3"/><path d="M30 33c-4 8-9 16-12 22M34 33c4 8 9 16 12 22"/></svg>',
    carpeta: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 18h18l5 6h25v28H8z"/><path d="M8 28h48"/></svg>',
    camara: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="20" width="48" height="32" rx="4"/><path d="M22 20l4-6h12l4 6"/><circle cx="32" cy="36" r="9"/><circle cx="32" cy="36" r="4"/></svg>',
    lapiz: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 50l4-14 26-26 10 10-26 26z"/><path d="M38 16l10 10M14 50l10-4"/></svg>',
    estrella: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M32 8l7 16 17 2-13 11 4 17-15-9-15 9 4-17L8 26l17-2z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.8-1.2 2.2 2.2 0 00.1-1.2c0-.1-.2-.2-.4-.3z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    behance: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.2 11.3c.9-.4 1.4-1.1 1.4-2.1C9.6 7.1 8 6.5 6.2 6.5H1.5v11h4.9c1.9 0 3.7-.9 3.7-3 0-1.4-.7-2.7-1.9-3.2zM3.7 8.3h2.1c.8 0 1.5.2 1.5 1.1s-.6 1.2-1.4 1.2H3.7zm2.4 7.4H3.7v-3.1h2.4c1 0 1.6.4 1.6 1.5s-.7 1.6-1.6 1.6zM15 7.4h5v1.2h-5zM22.5 13.6c0-2.4-1.4-4.3-3.9-4.3s-4 1.8-4 4.2 1.5 4.1 4 4.1c1.9 0 3.1-.8 3.7-2.6h-1.9c-.2.7-1 1-1.7 1-1.2 0-1.9-.7-1.9-1.9h5.7zm-5.7-1c.1-1 .7-1.6 1.7-1.6s1.5.6 1.6 1.6z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8A4.3 4.3 0 0115.5 3h-3.1v12.4a2.6 2.6 0 11-2.6-2.6c.3 0 .5 0 .8.1V9.8a5.7 5.7 0 104.9 5.6V9.1a7.3 7.3 0 004.3 1.4V7.4a4.3 4.3 0 01-3.2-1.6z"/></svg>',
    correo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    lista: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/></svg>',
    mesa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="6" width="9" height="9" transform="rotate(-8 7 10)"/><rect x="11" y="9" width="9" height="9" transform="rotate(9 15 13)"/></svg>'
  };
  window.ICONOS = I;

  /* trazos de boceto (capa que revela la lupa) */
  const TRAZOS = '<svg class="trazos" viewBox="0 0 200 200" preserveAspectRatio="none" fill="none" stroke="#683651" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity=".75">' +
    '<path d="M18 22c40-3 120-2 164 1M20 22c-2 40-1 120 1 158M182 23c2 50 1 110-1 157M21 179c50 2 110 1 160-1"/>' +
    '<path d="M38 44c30-2 70-1 96 1M38 56c22-1 44 0 60 1"/>' +
    '<path d="M44 90c10-14 30-18 44-8s10 34-8 40-38-6-38-20" stroke="#AE7F97"/>' +
    '<path d="M110 84l52 2-2 60-52-2z"/><path d="M110 84l50 62M162 86l-52 58" stroke="#849078"/>' +
    '<path d="M36 150c20 4 30-8 46-2s28 6 40-2" stroke="#AE7F97"/>' +
    '<path d="M140 160c8-6 16-6 22 0M150 152l12 8-10 8"/>' +
    '</svg>';

  /* ---------------- Placeholder / medio ---------------- */
  function medio(item = {}, extra = "") {
    const ar = item.ar ? ` style="--ar:${item.ar}"` : "";
    const cls = extra || item.color || "ph--mora";
    if (item.src) {
      const esVideo = /\.(mp4|webm|mov)$/i.test(item.src);
      const tag = esVideo
        ? `<video src="${item.src}" muted loop playsinline autoplay></video>`
        : `<img src="${item.src}" alt="${item.label || ""}" loading="lazy">`;
      return `<div class="ph ${cls}"${ar}>${tag}</div>`;
    }
    return `<div class="ph ${cls}${item.video ? " ph--video" : ""}"${ar} data-label="${item.label || "Imagen"}" role="img" aria-label="Espacio para: ${item.label || "imagen"}"></div>`;
  }
  function boceto(item = {}) {
    if (item.src) return medio(item);
    return `<div class="ph ph--boceto" data-label="${item.label || "Boceto"}">${TRAZOS}</div>`;
  }
  window.MEDIO = medio;
  window.BOCETO = boceto;

  /* =========================================================
     ESTRUCTURA COMPARTIDA (nav, footer, cursor, transición)
     ========================================================= */
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
    document.body.prepend(nav);

    const footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML = `
      <div class="contenedor">
        <div class="footer__grid">
          <div>
            <p class="footer__grande">¿Tienes una idea?<br><em>Démosle forma juntas.</em></p>
            <a class="btn btn--crema" href="contacto.html" style="margin-top:26px">Escríbeme ${I.flecha}</a>
          </div>
          <div>
            <h4>Navegar</h4>
            <ul>${paginas.map(p => `<li><a href="${p[0]}">${p[1]}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>Conectemos</h4>
            <ul>
              <li><a href="https://instagram.com/${C.instagram}" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="${C.behance}" target="_blank" rel="noopener">Behance</a></li>
              <li><a href="${C.tiktok}" target="_blank" rel="noopener">TikTok</a></li>
              <li><a href="https://wa.me/${C.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__firma" aria-hidden="true">Alejandra Correa</div>
        <div class="footer__base"><span>© ${new Date().getFullYear()} Alejandra Correa · Pereira, Colombia</span><span>Si miras de cerca, todo tiene un porqué ✦</span></div>
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
          <h2 id="modal-titulo">¡Miraste <em>de cerca!</em></h2>
          <p>Encontraste las cinco estrellas. Eso dice mucho de ti: eres de las personas que se fijan en los detalles, como yo.</p>
          ${boceto({ label: "Boceto inédito (sorpresa)" })}
          <a class="btn" href="contacto.html">Hablemos ${I.flecha}</a>
        </div>
      </div>
      <div class="transicion" aria-hidden="true"><div class="transicion__hoja"><img src="assets/estrella-mora.webp" alt=""></div></div>`;
    document.body.append(...extra.children);
  }

  /* =========================================================
     TRANSICIONES ENTRE PÁGINAS
     ========================================================= */
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

  /* =========================================================
     NAV: ocultar al bajar, menú móvil, progreso
     ========================================================= */
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
    btn.addEventListener("click", () => {
      const abierto = document.body.classList.toggle("menu-abierto");
      btn.setAttribute("aria-expanded", abierto);
      btn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
      menu.setAttribute("aria-hidden", !abierto);
      document.body.style.overflow = abierto ? "hidden" : "";
    });
  }

  /* =========================================================
     CURSOR PERSONALIZADO
     ========================================================= */
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

  /* =========================================================
     ANIMACIONES AL HACER SCROLL
     ========================================================= */
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

  /* =========================================================
     LUPA: revela el boceto debajo
     ========================================================= */
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

  /* =========================================================
     ARRASTRAR (collage del inicio y mesa de trabajo)
     ========================================================= */
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

  /* =========================================================
     ESTRELLAS ESCONDIDAS (5 en toda la web)
     ========================================================= */
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

  /* =========================================================
     TARJETA DE PROYECTO (inicio y página proyectos)
     ========================================================= */
  const rot = [-2.2, 1.8, -1.2, 2.4, -2.8, 1.2];
  function tarjeta(p, i) {
    return `<a class="tarjeta-proy" href="proyecto.html#${p.slug}" data-cats="${p.categorias.join(" ")}" data-anim="subir" style="--d:${(i % 3) * .1}s">
      <div class="marco" style="--r:${rot[i % rot.length]}deg" data-cursor="ver" data-cursor-txt="Ver caso">${medio(Object.assign({ ar: i % 2 ? "4/5" : "5/4" }, p.portada), p.color)}</div>
      <div class="tarjeta-proy__info"><h3><span class="num">${String(i + 1).padStart(2, "0")}.</span> ${p.titulo}</h3><small>${p.cliente}</small></div>
      <div class="etiquetas">${p.categorias.map(c => `<span class="etiqueta">${window.CATEGORIAS[c]}</span>`).join("")}</div>
    </a>`;
  }

  /* =========================================================
     PÁGINAS
     ========================================================= */
  const P = {};

  P.inicio = () => {
    const d = $("#destacados");
    if (d) d.innerHTML = window.PROYECTOS.slice(0, 4).map(tarjeta).join("");
    // ajustar formato de destacados para el layout escalonado
    $$("#destacados .ph").forEach((ph, i) => ph.style.setProperty("--ar", ["16/11", "4/5", "4/5", "16/11"][i]));
  };

  P.proyectos = () => {
    const lista = $("#lista-proy"), mesa = $("#mesa"), filtros = $("#filtros");
    const PR = window.PROYECTOS;
    lista.innerHTML = PR.map(tarjeta).join("");

    // conteo por categoría
    const cats = Object.keys(window.CATEGORIAS);
    filtros.innerHTML = `<button class="filtro activo" data-f="todos" type="button">Todos<sup>${PR.length}</sup></button>` +
      cats.map(c => `<button class="filtro" data-f="${c}" type="button">${window.CATEGORIAS[c]}<sup>${PR.filter(p => p.categorias.includes(c)).length}</sup></button>`).join("");

    // mesa de trabajo
    const pos = innerWidth < 600
      ? [[4, 2], [48, 10], [6, 30], [46, 40], [8, 60], [44, 72]]
      : [[3, 6], [26, 2], [50, 8], [73, 4], [14, 50], [42, 46]];
    mesa.insertAdjacentHTML("beforeend", PR.map((p, i) => `
      <div class="mesa__item" data-arrastrable data-cats="${p.categorias.join(" ")}" style="left:${pos[i % 6][0]}%;top:${pos[i % 6][1]}%;--r:${rot[i]*1.8}deg;z-index:${10 + i}">
        <a class="abrir" href="proyecto.html#${p.slug}" aria-label="Abrir ${p.titulo}" data-cursor="ver" data-cursor-txt="Abrir">${I.flechaDiag}</a>
        <div class="marco">${medio(Object.assign({ ar: i % 2 ? "4/5" : "1/1" }, p.portada), p.color)}<h3>${p.titulo}</h3><small>${p.cliente}</small></div>
      </div>`).join(""));
    arrastrables(mesa);

    // filtros
    filtros.addEventListener("click", e => {
      const b = e.target.closest(".filtro"); if (!b) return;
      $$(".filtro", filtros).forEach(x => x.classList.toggle("activo", x === b));
      const f = b.dataset.f;
      $$(".tarjeta-proy, .mesa__item").forEach(t => {
        t.classList.toggle("oculto", f !== "todos" && !t.dataset.cats.split(" ").includes(f));
      });
      store.set("ac-filtro", f);
    });

    // vistas
    const vistas = $$(".vista");
    const usar = v => {
      vistas.forEach(x => { const on = x.dataset.v === v; x.classList.toggle("activa", on); x.setAttribute("aria-pressed", on); });
      lista.hidden = v !== "lista"; mesa.hidden = v !== "mesa";
      store.set("ac-vista", v);
      revelar();
    };
    vistas.forEach(b => b.addEventListener("click", () => usar(b.dataset.v)));
    usar(store.get("ac-vista", "mesa"));
    const f = store.get("ac-filtro", "todos");
    const bf = $(`.filtro[data-f="${f}"]`, filtros); if (bf && f !== "todos") bf.click();
  };

  P.proyecto = () => {
    const raiz = $("#ficha");
    const render = () => {
      const PR = window.PROYECTOS;
      const slug = decodeURIComponent(location.hash.slice(1));
      let i = PR.findIndex(p => p.slug === slug); if (i < 0) i = 0;
      const p = PR[i], sig = PR[(i + 1) % PR.length];
      document.title = `${p.titulo} · Alejandra Correa`;
      raiz.innerHTML = `
        <section class="ficha-hero">
          <div class="contenedor">
            <a class="enlace" href="proyectos.html">← Todos los proyectos</a>
            <div class="ficha-hero__top" style="margin-top:34px">
              <div>
                <span class="eyebrow">Proyecto ${String(i + 1).padStart(2, "0")} / ${String(PR.length).padStart(2, "0")}</span>
                <h1 class="titulo-anim">${p.titulo}</h1>
                <p class="cliente" data-anim="subir">${p.cliente}</p>
                <p class="lead" data-anim="subir" style="--d:.15s;margin-top:20px">${p.resumen}</p>
              </div>
              <dl class="ficha-tecnica" data-anim="subir" style="--d:.25s">
                <div><dt>Año</dt><dd>${p.anio}</dd></div>
                <div><dt>Rol</dt><dd>${p.rol}</dd></div>
                <div><dt>Entregables</dt><dd>${p.entregables}</dd></div>
                <div><dt>Herramientas</dt><dd>${p.herramientas}</dd></div>
              </dl>
            </div>
            <div class="ficha-portada" data-anim="subir" style="--d:.2s">
              <div class="marco lupa-zona" data-cursor="lupa">
                ${medio(Object.assign({ ar: "16/8" }, p.portada), p.color)}
                <div class="capa-boceto">${boceto(p.antes)}</div>
                <span class="lupa-pista">${I.lupa} Pasa la lupa</span>
              </div>
              <img class="estrella" src="assets/estrella-oro.webp" alt="" style="right:-24px;top:-30px" data-girar=".08">
            </div>
          </div>
        </section>
        <div class="contenedor">
          <section class="bloque">
            <div class="bloque__num" data-anim="izq">01<small>Concepto</small></div>
            <div><h2 class="titulo-anim">${p.concepto.titulo}</h2><p data-anim="subir">${p.concepto.texto}</p>
              <div class="paleta-proy" data-anim="subir">${p.paleta.map(c => `<button type="button" style="background:${c};color:${luz(c) ? "#4A2539" : "#F6F4EE"}" data-color="${c}" title="Copiar ${c}">${c}</button>`).join("")}</div>
            </div>
          </section>
          <section class="bloque">
            <div class="bloque__num" data-anim="izq">02<small>Proceso</small></div>
            <div><h2 class="titulo-anim">Del primer trazo a la pieza</h2>
              <div class="proceso-pasos">${p.pasos.map((s, k) => `<div class="paso" data-anim="caer" style="--r:${rot[k]}deg;--d:${k * .1}s"><i>0${k + 1}</i><b>${s[0]}</b><span>${s[1]}</span></div>`).join("")}</div>
            </div>
          </section>
          <section class="bloque">
            <div class="bloque__num" data-anim="izq">03<small>Antes / después</small></div>
            <div data-anim="subir">
              <div class="antes-despues">
                <div class="antes-despues__marco">
                  ${medio(Object.assign({ ar: "16/9" }, p.despues), p.color)}
                  <div class="capa-antes">${boceto(p.antes)}</div>
                  <span class="rotulo rotulo--a">Antes</span><span class="rotulo rotulo--d">Después</span>
                  <div class="divisor"></div>
                  <input type="range" min="0" max="100" value="50" aria-label="Comparar boceto y resultado">
                </div>
              </div>
            </div>
          </section>
          <section class="bloque">
            <div class="bloque__num" data-anim="izq">04<small>Resultado</small></div>
            <div><h2 class="titulo-anim">Lo que quedó</h2><p data-anim="subir">${p.resultado}</p></div>
          </section>
          <section class="galeria" style="padding-bottom:90px">
            ${p.galeria.map((g, k) => g.tipo === "telefono"
              ? `<div data-anim="caer" style="--r:${rot[k]}deg"><div class="telefono" style="--r:${rot[k] * 1.5}deg">${medio(Object.assign({ video: true }, g), p.color)}</div></div>`
              : `<div class="${g.completo ? "completo" : g.ancho ? "ancho" : ""}" data-anim="subir" style="--d:${(k % 3) * .1}s"><div class="marco" style="--r:${rot[k] * .5}deg">${medio(Object.assign({ video: g.tipo === "video" }, g), p.color)}</div></div>`).join("")}
          </section>
        </div>
        <a class="siguiente" href="proyecto.html#${sig.slug}" data-cursor="ver" data-cursor-txt="Siguiente">
          <small>Siguiente proyecto</small>
          <h2>${sig.titulo}</h2>
          <div class="vista-previa">${medio(Object.assign({ ar: "4/5" }, sig.portada), sig.color)}</div>
        </a>`;

      // antes/después
      $$(".antes-despues").forEach(ad => {
        const r = $("input", ad);
        const set = () => ad.style.setProperty("--pos", r.value + "%");
        r.addEventListener("input", set); set();
      });
      // copiar colores
      $$(".paleta-proy button").forEach(b => b.addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(b.dataset.color); toast(`Color ${b.dataset.color} copiado`); }
        catch (e) { toast(`Color: ${b.dataset.color}`); }
      }));
      // vista previa que sigue al mouse
      const s = $(".siguiente"), vp = $(".vista-previa", s);
      s.addEventListener("pointermove", e => { const b = s.getBoundingClientRect(); vp.style.left = (e.clientX - b.left) + "px"; vp.style.top = (e.clientY - b.top) + "px"; });

      partirTitulos(); revelar(); lupas(); movimientoLocal();
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    };
    const movimientoLocal = () => {
      if (reduce) return;
      $$("[data-girar]", raiz).forEach(el => { if (el._g) return; el._g = 1; const f = parseFloat(el.dataset.girar); const up = () => { el.style.rotate = scrollY * f + "deg"; }; addEventListener("scroll", up, { passive: true }); up(); });
    };
    addEventListener("hashchange", render);
    render();
  };

  P["sobre-mi"] = () => {
    // manifiesto: palabras que se encienden con el scroll
    const m = $(".manifiesto__texto");
    if (m) {
      const destacadas = ["habito", "detalles", "calma", "identidad", "porqué.", "equilibrio", "cerca,"];
      m.innerHTML = m.textContent.trim().split(/\s+/).map(w => `<span class="w${destacadas.includes(w.toLowerCase()) ? " it" : ""}">${w}</span>`).join(" ");
      const ws = $$(".w", m);
      const up = () => {
        const b = m.getBoundingClientRect();
        const prog = Math.min(1, Math.max(0, (innerHeight * .85 - b.top) / (b.height + innerHeight * .35)));
        const n = Math.round(prog * ws.length);
        ws.forEach((w, i) => w.classList.toggle("on", i < n));
      };
      if (reduce) ws.forEach(w => w.classList.add("on")); else { addEventListener("scroll", up, { passive: true }); up(); }
    }

    // recorrido horizontal: arrastrar + botones
    const pista = $(".recorrido__pista");
    if (pista) {
      let down = false, sx, sl;
      pista.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; down = true; sx = e.clientX; sl = pista.scrollLeft; pista.classList.add("arrastrando"); });
      addEventListener("pointermove", e => { if (down) pista.scrollLeft = sl - (e.clientX - sx); });
      addEventListener("pointerup", () => { down = false; pista.classList.remove("arrastrando"); });
      $$("[data-desliza]").forEach(b => b.addEventListener("click", () => pista.scrollBy({ left: +b.dataset.desliza * 400, behavior: "smooth" })));
    }

    // tocadiscos
    const td = $(".musica"), etiqueta = $(".vinilo__etiqueta");
    $$(".pistas button").forEach(b => b.addEventListener("click", () => {
      const ya = b.classList.contains("activa");
      $$(".pistas button").forEach(x => x.classList.remove("activa"));
      if (ya) { td.classList.remove("sonando"); etiqueta.innerHTML = "Lo que<br>suena"; return; }
      b.classList.add("activa");
      td.classList.add("sonando");
      etiqueta.style.background = b.dataset.color;
      etiqueta.innerHTML = $("b", b).textContent.split(" ").slice(0, 2).join("<br>");
    }));
    $(".vinilo") && $(".vinilo").addEventListener("click", () => {
      const a = $(".pistas button.activa") || $(".pistas button");
      a && a.click();
    });
  };

  P.contacto = () => {
    $$("[data-c]").forEach(el => {
      const k = el.dataset.c;
      const map = {
        whatsapp: ["https://wa.me/" + C.whatsapp, C.whatsappVisible],
        instagram: ["https://instagram.com/" + C.instagram, "@" + C.instagram],
        correo: ["mailto:" + C.correo, C.correo],
        behance: [C.behance, "Proyectos completos"],
        tiktok: [C.tiktok, "Procesos y detrás de cámaras"]
      }[k];
      if (!map) return;
      el.href = map[0];
      const sm = $("small", el); if (sm) sm.textContent = map[1];
    });

    const escena = $(".carta-escena"), form = $("#carta"), gracias = $(".gracias");
    if (!form) return;
    // guardar borrador
    const borrador = store.get("ac-borrador", {});
    $$("input, textarea", form).forEach(i => {
      if (i.type === "radio") { if (borrador[i.name] === i.value) i.checked = true; }
      else if (borrador[i.name]) i.value = borrador[i.name];
    });
    form.addEventListener("input", () => {
      const d = {}; new FormData(form).forEach((v, k) => d[k] = v); store.set("ac-borrador", d);
      $$(".campo.con-error", form).forEach(c => { const i = $("input, textarea", c); if (i && i.value.trim()) c.classList.remove("con-error"); });
    });

    form.addEventListener("submit", e => {
      e.preventDefault();
      let ok = true;
      $$("[required]", form).forEach(i => {
        const c = i.closest(".campo");
        const valido = i.value.trim() && (i.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value));
        c.classList.toggle("con-error", !valido);
        if (!valido && ok) { i.focus(); ok = false; }
      });
      if (!ok) return;
      const d = {}; new FormData(form).forEach((v, k) => d[k] = v);
      const msg = `Hola Aleja, soy ${d.nombre}.\n` + (d.tipo ? `Proyecto: ${d.tipo}\n` : "") + (d.presupuesto ? `Tiempo: ${d.presupuesto}\n` : "") + `\n${d.mensaje}\n\nMi correo: ${d.correo}`;
      $("#gracias-wa").href = `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`;
      $("#gracias-mail").href = `mailto:${C.correo}?subject=${encodeURIComponent("Proyecto · " + d.nombre)}&body=${encodeURIComponent(msg)}`;
      $("#gracias-copiar").onclick = async () => { try { await navigator.clipboard.writeText(msg); toast("Mensaje copiado"); } catch (err) { toast("No se pudo copiar, selecciónalo a mano"); } };
      $("#gracias-texto").textContent = msg;
      $("#gracias-nombre").textContent = d.nombre.split(" ")[0];

      const terminar = () => { escena.hidden = true; gracias.classList.add("visible"); gracias.scrollIntoView({ behavior: "smooth", block: "center" }); store.set("ac-borrador", {}); };
      if (reduce) return terminar();
      escena.classList.add("enviando");
      setTimeout(() => escena.classList.add("volando"), 2300);
      setTimeout(terminar, 3400);
    });
    $("#gracias-otra") && $("#gracias-otra").addEventListener("click", () => {
      gracias.classList.remove("visible"); escena.hidden = false; escena.classList.remove("enviando", "volando"); form.reset();
    });
  };

  function luz(hex) {
    const n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    return (r * 299 + g * 587 + b * 114) / 1000 > 150;
  }

  /* =========================================================
     INICIO
     ========================================================= */
  chrome();
  (P[pagina] || (() => {}))();
  marquees();
  navegacion();
  cursor();
  transiciones();
  revelar();
  lupas();
  arrastrables();
  movimiento();
  estrellas();
})();
