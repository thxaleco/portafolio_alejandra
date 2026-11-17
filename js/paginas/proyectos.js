/* =========================================================
   PÁGINA · proyectos
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $, $$, store, revelar, tarjeta, mesa } = AC;

  AC.paginas["proyectos"] = () => {
    const lista = $("#lista-proy"), mesaEl = $("#mesa"), filtros = $("#filtros");
    const PR = window.PROYECTOS;
    lista.innerHTML = PR.map(tarjeta).join("");

    // conteo por categoría
    const cats = Object.keys(window.CATEGORIAS);
    filtros.innerHTML = `<button class="filtro activo" data-f="todos" type="button" aria-pressed="true">Todos<sup>${PR.length}</sup></button>` +
      cats.map(c => `<button class="filtro" data-f="${c}" type="button" aria-pressed="false">${window.CATEGORIAS[c]}<sup>${PR.filter(p => p.categorias.includes(c)).length}</sup></button>`).join("");

    // mesa de trabajo
    mesa(mesaEl, PR, innerWidth < 600
      ? [[2, 1], [46, 3], [3, 23], [46, 25], [2, 45], [46, 47], [3, 67], [46, 69]]
      : [[2, 4], [26, 2], [50, 6], [75, 3], [5, 50], [29, 47], [53, 52], [76, 48]]);

    // filtros
    filtros.addEventListener("click", e => {
      const b = e.target.closest(".filtro"); if (!b) return;
      $$(".filtro", filtros).forEach(x => { x.classList.toggle("activo", x === b); x.setAttribute("aria-pressed", x === b); });
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
      lista.hidden = v !== "lista"; mesaEl.hidden = v !== "mesa";
      store.set("ac-vista", v);
      revelar();
    };
    vistas.forEach(b => b.addEventListener("click", () => usar(b.dataset.v)));
    usar(store.get("ac-vista", "mesa"));
    const f = store.get("ac-filtro", "todos");
    const bf = $(`.filtro[data-f="${f}"]`, filtros); if (bf && f !== "todos") bf.click();
  };

})(window.AC);
