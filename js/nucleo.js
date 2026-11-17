/* =========================================================
   NÚCLEO · utilidades compartidas, preferencias del usuario,
   almacenamiento local, iconos y datos de contacto
   Alejandra Correa · Portafolio
   ========================================================= */
window.AC = window.AC || { paginas: {} };
(function (AC) {
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

  const rot = [-2.2, 1.8, -1.2, 2.4, -2.8, 1.2, -1.6, 2.1];

  function luz(hex) {
    const n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    return (r * 299 + g * 587 + b * 114) / 1000 > 150;
  }
  Object.assign(AC, { $, $$, reduce, finePointer, pagina, C, store, I, rot, luz });
})(window.AC);
