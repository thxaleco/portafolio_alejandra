# Design System y Atomic Design

El sistema vive en dos lugares que se corresponden uno a uno:
- **Figma** (archivo *WEB Y APP ALE*): variables de color, estilos de texto `Web/…` y componentes en la página *Componentes* (sección «Componentes web · portafolio»).
- **Código**: `css/01-tokens.css` (tokens) y los niveles `css/02-base.css` … `css/06-plantillas.css`, más `js/` organizado igual. La página `design-system.html` muestra todo en vivo.

## Tokens

| Grupo | Código | Figma |
|---|---|---|
| Color primitivo | `--crema-base`, `--crema-100`, `--crema-300`, `--ciruela-base`, `--ciruela-300/700/900`, `--salvia-base`, `--salvia-300/700`, `--rosa-base`, `--rosa-100/200`, `--verde-oscuro`, `--verde-oscuro-300`, `--papel` | Variables *Valores principales › Colores/…* (mismos nombres y HEX). `--papel` está pendiente de crear en Figma. |
| Color semántico | `--color-fondo`, `--color-texto`, `--color-titulo`, `--color-acento`, `--color-borde` | Colección *Tokens* (fondos, texto, botones) |
| Estados | `--estado-foco`, `--estado-hover`, `--estado-activo`, `--estado-error`, `--estado-exito`, `--estado-deshabilitado` | Variantes de los botones |
| Tipografía | `--f-titulo`, `--f-texto`, `--fs-display`, `--fs-h2`, `--fs-h3`, `--fs-cita`, `--fs-lead`, `--fs-cuerpo`, `--fs-pequeno`, `--fs-etiqueta`, pesos, interlineados y tracking | Estilos de texto `Web/Display`, `Web/H2`, `Web/H3`, `Web/Cita`, `Web/Lead`, `Web/Cuerpo`, `Web/Etiqueta`, `Web/Botón` |
| Espaciado | `--esp-1` (4) … `--esp-10` (128), `--seccion-y`, `--pad`, `--ancho` | Paddings y gaps de los componentes con auto-layout |
| Forma | `--radio-sm` … `--radio-pill`, `--sombra`, `--sombra-alta` | Radios y efectos de los componentes |
| Movimiento y capas | `--ease`, `--rebote`, `--dur-*`, `--z-*` | Notas de interacción en los frames |

## Inventario por niveles

### Átomos
| Componente | Clase / archivo | Figma |
|---|---|---|
| Colores y tipografías | `01-tokens.css`, `02-base.css` | Variables y estilos `Web/…` |
| Botón (principal, línea, crema; estados) | `.btn`, `.btn--linea`, `.btn--crema` · `03-atomos.css` | `web/botón` (Principal, Secundario, Línea) |
| Enlace | `.enlace` | — |
| Filtro / chip | `.filtro`, `.vista` | `web/chip` |
| Iconos y estrellas | SVG en `js/nucleo.js` (`I`), `.estrella` | `iconos` (lápiz, lupa, estrella) |
| Recursos de collage | `.flor`, `.cinta`, `.clip`, `.sello` | `web/flor-recortada`, `web/sello` |
| Imagen / placeholder | `.ph` · `js/atomos/medio.js` | `web/imagen-placeholder` |

### Moléculas
| Componente | Clase / archivo | Figma |
|---|---|---|
| Polaroid | `.polaroid` · `04-moleculas.css` | `web/polaroid` |
| Carpeta (servicio) | `.carpeta` | `folder-web` |
| Nota con cinta | `.nota` | `cards-web` |
| Tarjeta de proyecto (foto de mesa) | `.mesa__item`, `.tarjeta-proy` · `js/moleculas/tarjeta-proyecto.js` | `web/foto-proyecto` |
| Lupa | `.lupa-zona` · `js/moleculas/lupa.js` | Nota de interacción |
| Paso del proceso | `.paso3`, `.paso` | `web/paso-proceso` |
| Barra del manifiesto | `.barra-manifiesto`, `--salvia` | `web/barra-manifiesto` |
| Pieza larga con desplazamiento | `.galeria-scroll` | — |
| Postal de contacto | `.postal` | — (pendiente en Figma) |
| Elemento arrastrable | `[data-arrastrable]` · `js/moleculas/arrastrable.js` | Nota de interacción |

### Organismos
| Componente | Clase / archivo | Figma |
|---|---|---|
| Header / navegación | `.nav` · `js/organismos/estructura.js`, `navegacion.js` | `nav-web` (4 variantes, una por página) |
| Contador de estrellas | `.contador-estrellas` · `js/organismos/estrellas.js` | `encontrar-estrella` |
| Menú móvil | `.menu-movil` | — |
| Footer | `.footer` | `web/footer` |
| Collage del hero | `.collage` | Frame *Collage arrastrable* |
| Mesa de trabajo | `.mesa` | Frame *Mesa de trabajo* |
| Banda de notas | `.notas-banda` | Frame *Banda de notas* |
| Cortes de sección | `.corte-top/bottom`, `.feston-top/bottom` | Vectores `borde/papel-rasgado`, `borde/festón` |
| Aviso, modal y transición | `.toast`, `.modal`, `.transicion` | — |

### Plantillas
Estructura común: **header → cabecera de página → secciones (`.seccion` + `.contenedor` + grilla de Bootstrap) → footer**. La ficha de proyecto es una plantilla que se llena desde `js/datos.js`.

### Páginas
`index.html`, `proyectos.html`, `proyecto.html#slug`, `sobre-mi.html`, `contacto.html` (más `404.html` y `design-system.html`).

## Reglas de uso
- Un solo título Display por página; la itálica DM Serif solo para la palabra destacada, en salvia.
- Ciruela para acciones y títulos; salvia para acentos grandes; **salvia-700 para textos pequeños** (contraste).
- Fondos alternos crema / crema-100 / crema-300; las secciones de color (ciruela, verde oscuro) se separan con festón o papel rasgado.
- Las decoraciones (estrellas, flor) nunca tapan texto: en tableta y móvil se ocultan o se reducen.
- Toda animación tiene alternativa con movimiento reducido.

## Responsive
| Rango | Comportamiento |
|---|---|
| > 1024 px | Grilla de Bootstrap a dos columnas; collage y mesas libres. |
| ≤ 1024 px | Columnas apiladas; lista de proyectos a 2 columnas. |
| ≤ 860 px | Menú hamburguesa; servicios y pasos en una columna. |
| ≤ 600 px | Una columna; mesas más altas con fotos en dos columnas; bordes de sección más finos. |
