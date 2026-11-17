/* =========================================================
   MOLÉCULA · tarjeta de proyecto y mesa de fotografías
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $, I, rot, medio, arrastrables } = AC;

  function tarjeta(p, i) {
    return `<a class="tarjeta-proy" href="proyecto.html#${p.slug}" data-cats="${p.categorias.join(" ")}" data-anim="subir" style="--d:${(i % 3) * .1}s">
      <div class="marco" style="--r:${rot[i % rot.length]}deg" data-cursor="ver" data-cursor-txt="Ver caso">${medio(Object.assign({ ar: i % 2 ? "4/5" : "5/4" }, p.portada), p.color)}</div>
      <div class="tarjeta-proy__info"><h3><span class="num">${String(i + 1).padStart(2, "0")}.</span> ${p.titulo}</h3><small>${p.cliente}</small></div>
      <div class="etiquetas">${p.categorias.map(c => `<span class="etiqueta">${window.CATEGORIAS[c]}</span>`).join("")}</div>
    </a>`;
  }

  /* mesa de trabajo: proyectos como fotografías sueltas */
  function mesa(el, lista, pos) {
    const cintas = ["", "cinta--mora"];
    el.insertAdjacentHTML("beforeend", lista.map((p, i) => `
      <div class="mesa__item" data-arrastrable data-cats="${p.categorias.join(" ")}" style="left:${pos[i % pos.length][0]}%;top:${pos[i % pos.length][1]}%;--r:${rot[i % rot.length] * 1.8}deg;z-index:${10 + i}">
        <a class="abrir" href="proyecto.html#${p.slug}" aria-label="Abrir ${p.titulo}" data-cursor="ver" data-cursor-txt="Abrir">${I.flechaDiag}</a>
        <div class="marco"><span class="cinta ${cintas[i % 2]}"></span>${medio(Object.assign({ ar: i % 2 ? "4/5" : "1/1" }, p.portada), p.color)}<h3>${p.titulo}</h3><small>${p.cliente}</small></div>
      </div>`).join(""));
    arrastrables(el);
  }

  Object.assign(AC, { tarjeta, mesa });
})(window.AC);
