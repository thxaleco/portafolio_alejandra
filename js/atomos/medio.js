/* =========================================================
   ÁTOMO · medio: imagen, video o placeholder, y capa de boceto
   Alejandra Correa · Portafolio
   ========================================================= */
(function (AC) {
  "use strict";
  const { $ } = AC;

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
  Object.assign(AC, { medio, boceto });
})(window.AC);
