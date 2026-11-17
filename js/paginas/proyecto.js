/* =========================================================
   PÁGINA · proyecto
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $, $$, reduce, I, rot, luz, medio, boceto, partirTitulos, revelar, lupas, toast } = AC;

  AC.paginas["proyecto"] = () => {
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
            <div class="row gy-4 gx-lg-5 align-items-end ficha-hero__top" style="margin-top:34px">
              <div class="col-12 col-lg-7">
                <h1 class="titulo-anim">${p.titulo}</h1>
                <p class="cliente" data-anim="subir">${p.cliente}</p>
                <p class="lead" data-anim="subir" style="--d:.15s;margin-top:20px">${p.resumen}</p>
              </div>
              <div class="col-12 col-lg-5"><dl class="ficha-tecnica" data-anim="subir" style="--d:.25s">
                <div><dt>Año</dt><dd>${p.anio}</dd></div>
                <div><dt>Rol</dt><dd>${p.rol}</dd></div>
                <div><dt>Entregables</dt><dd>${p.entregables}</dd></div>
                <div><dt>Herramientas</dt><dd>${p.herramientas}</dd></div>
              </dl></div>
            </div>
            <div class="ficha-portada" data-anim="subir" style="--d:.2s">
              <div class="marco lupa-zona" data-cursor="lupa">
                ${medio(Object.assign({ ar: "16/8" }, p.portada), p.color)}
                <div class="capa-boceto">${boceto(p.antes)}</div>
                <span class="lupa-pista">${I.lupa} Pasa la lupa</span>
              </div>
              <img class="estrella" src="assets/estrella-oro.webp" alt="" style="right:-8px;top:-30px" data-girar=".08">
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
            ${p.galeria.map((g, k) => g.tipo === "scroll" && g.src
              ? `<div class="${g.completo ? "completo" : g.ancho ? "ancho" : ""}" data-anim="subir"><figure class="marco galeria-scroll" style="--r:${rot[k] * .5}deg;--alto:${g.alto || "520px"}"><div class="galeria-scroll__ventana" tabindex="0" aria-label="${g.label}: desplázate para verla completa"><img src="${g.src}" alt="${g.label}" loading="lazy"></div><figcaption>${g.label} · desliza para recorrerla ↓</figcaption></figure></div>`
              : g.tipo === "telefono"
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

})(window.AC);
