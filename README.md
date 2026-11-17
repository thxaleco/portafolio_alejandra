# Alejandra Correa · Portafolio web

Portafolio profesional de **Alejandra Correa**, diseñadora crossmedia y directora de arte (Pereira, Colombia).
*Habito. Conceptualizo. Materializo.*

- **Sitio publicado:** _pendiente: pegar aquí la URL de Netlify_
- **Design System en Figma:** _pendiente: pegar aquí el enlace al archivo «WEB Y APP ALE»_
- **Guía viva del sistema:** `design-system.html` (enlazada en el footer del sitio)

Proyecto del Momento Evaluativo 2 de *Aplicaciones móviles y web* (Diseño Crossmedia, UCC). Ruta B: desarrollo a medida.

---

## Tecnología

| Tecnología | Uso |
|---|---|
| **HTML5** | Cinco páginas semánticas (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`), más 404 y guía del Design System. |
| **CSS3** | Design tokens en variables CSS (`css/01-tokens.css`) y estilos organizados por Atomic Design. |
| **JavaScript** (sin librerías) | Navegación, rutas por proyecto (`#slug`), filtros, vistas, arrastrar, lupa, antes/después, juego de estrellas, transiciones y animaciones. |
| **Bootstrap 5.3** (framework CSS) | Solo **grilla** y **utilidades** (`assets/vendor/bootstrap/`): filas y columnas responsive, flex, gap y `visually-hidden`. |

### Por qué esta ruta y este framework
- **Desarrollo a medida:** la marca es un collage (papel rasgado, recortes, piezas que se arrastran, animaciones de entrada) que una plantilla de WordPress no permite sin pelear contra ella. En código, cada componente de Figma tiene su equivalente directo.
- **Bootstrap, pero solo grilla y utilidades:** da una grilla responsive probada y utilidades de alineación sin imponer su estética. Al no cargar sus componentes (`.btn`, `.nav`, `.modal`…), no choca con los componentes propios del Design System.
- **Sin compilación:** se abre en cualquier navegador y se publica tal cual en Netlify; facilita seguir el proyecto en el Momento 3.

## Estructura

```
├── index.html              Inicio
├── proyectos.html          Proyectos (filtros, vista mesa / lista)
├── proyecto.html           Ficha de proyecto (plantilla: proyecto.html#slug)
├── sobre-mi.html           Sobre mí
├── contacto.html           Contacto (ALMA + canales directos)
├── design-system.html      Guía viva del Design System
├── 404.html                Página no encontrada
├── css/
│   ├── 01-tokens.css       Design tokens: color, tipografía, espaciado, forma, movimiento, capas
│   ├── 02-base.css         Reset, cuerpo, tipografía global, animaciones de entrada, accesibilidad
│   ├── 03-atomos.css       Botones, enlaces, filtros, estrellas, flor, cinta, placeholders + estados
│   ├── 04-moleculas.css    Polaroid, lupa, carpeta, nota, tarjeta de proyecto
│   ├── 05-organismos.css   Navegación, cursor, secciones, mesa, banda de notas, footer, avisos, cortes
│   └── 06-plantillas.css   Cabeceras, ficha, sobre mí, contacto, responsive y guía del sistema
├── js/
│   ├── datos.js            Proyectos y datos de contacto (lo que más se edita)
│   ├── nucleo.js           Utilidades compartidas, iconos, almacenamiento local
│   ├── atomos/             medio.js (imagen, video o placeholder)
│   ├── base/               animaciones.js (entradas, parallax, bandas)
│   ├── moleculas/          lupa.js, arrastrable.js, tarjeta-proyecto.js
│   ├── organismos/         estructura.js, navegacion.js, transiciones.js, cursor.js, estrellas.js, alma.js
│   ├── paginas/            un script por página
│   └── app.js              Arranque
├── assets/                 Recursos de marca, fuentes (DM Serif Display, Montserrat) y Bootstrap
├── docs/
│   ├── marca.md            Identidad de marca
│   ├── arquitectura.md     Sitemap y arquitectura de información
│   └── design-system.md    Tokens, inventario de Atomic Design y correspondencia con Figma
└── netlify.toml            Configuración de publicación
```

Cada página carga los estilos en orden **Bootstrap → tokens → base → átomos → moléculas → organismos → plantillas**, y los scripts en orden **datos → núcleo → átomos → moléculas → organismos → página → app**.

## Ejecución

**Opción 1:** abre `index.html` con doble clic. Funciona sin internet.

**Opción 2 (recomendada, igual que en producción):** levanta un servidor local en la carpeta del proyecto.
```bash
python3 -m http.server 8000
# o: npx serve .
```
y abre <http://localhost:8000>.

No hay dependencias que instalar ni paso de compilación.

## Publicación (Netlify)
1. Sube el repositorio a GitHub (público).
2. En Netlify: *Add new site → Import an existing project → GitHub* y elige el repositorio.
3. Deja el comando de compilación vacío; el directorio de publicación es la raíz (`netlify.toml` ya lo indica).
4. Copia la URL pública en este README.

## Editar contenido
- **Proyectos:** en `js/datos.js`, cada proyecto es un bloque `{ slug: …, titulo: …, … }`. Para agregar uno, copia un bloque y cambia el `slug` (sin espacios ni tildes). Aparece solo en Proyectos, en los filtros y en su ficha; los cuatro primeros salen en el Inicio.
- **Imágenes y videos:** guárdalos en `assets/proyectos/` y escribe la ruta en `src` (`portada`, `antes`, `despues` y cada elemento de `galeria`). Si `src` está vacío, se muestra un placeholder con el nombre de la imagen. Para las fotos fijas del HTML, mete un `<img>` dentro del `div.ph`.
- **Contacto:** en `window.CONTACTO` (final de `js/datos.js`) van WhatsApp, Instagram, correo, Behance, TikTok y el link de **ALMA**. Los canales vacíos no se muestran.

## Accesibilidad
Enlace «Saltar al contenido», foco visible en todos los elementos interactivos, menú móvil inerte cuando está cerrado (se cierra con Escape), `aria-current` en la página actual, `aria-pressed` en los filtros, textos alternativos, contraste reforzado en textos pequeños y animaciones desactivadas con `prefers-reduced-motion`.

## Pendientes
- Fotos y videos reales de los proyectos que aún tienen placeholder y de *Lo que pasa detrás*.
- Enlace del perfil de Behance y link de ALMA en `js/datos.js`.
- Confirmar año, rol y entregables de Danny Road y Tradición en Canasta.
- URL de Netlify y enlace a Figma en este README.

---
© 2026 Alejandra Correa · Busco estrellas en lo cotidiano ✦
