# Portafolio web · Alejandra Correa

Sitio en HTML, CSS y JavaScript puro, sin dependencias ni plataformas. Se abre con doble clic en `index.html` o se sube tal cual a Netlify, Vercel, GitHub Pages o un hosting propio.

## Estructura

```
index.html        Inicio
proyectos.html    Archivo de proyectos (vista Mesa / Lista + filtros)
proyecto.html     Ficha de cada proyecto → proyecto.html#bloom-store
sobre-mi.html     Sobre mí, manifiesto, proceso, habilidades, música
contacto.html     Carta de contacto + canales + preguntas frecuentes
css/styles.css    Todo el diseño (colores y tipografías arriba, en :root)
js/datos.js       Proyectos y datos de contacto  ← lo que más vas a editar
js/main.js        Interacciones y animaciones
assets/           Estrellas, flor, papel, textura y fuentes
```

## Cambiar placeholders por imágenes reales

1. Crea la carpeta `assets/proyectos/` y guarda tus imágenes ahí (JPG o WebP, máximo ~2000 px de ancho).
2. En `js/datos.js`, escribe la ruta en `src`:
   ```js
   portada: { src: "assets/proyectos/bloom-portada.jpg", label: "Portada · Bloom Store" },
   ```
   Lo mismo para `antes` (boceto/moodboard), `despues` (pieza final) y cada elemento de `galeria`.
3. Para los reels, usa un `.mp4` en `src` del elemento con `tipo: "telefono"`. Se reproduce solo, en silencio y en bucle.

Si `src` está vacío, la web muestra un placeholder con el nombre de la imagen que falta.

**Imágenes fijas en el HTML** (tu foto, las fotos de las carpetas, etc.): busca `class="ph` con `data-label="..."` y pon una imagen dentro:
```html
<div class="ph ph--salvia" data-label="Tu foto aquí"><img src="assets/aleja.jpg" alt="Alejandra Correa"></div>
```

## Agregar un proyecto

Copia uno de los bloques `{ slug: ... }` en `js/datos.js`, cambia el `slug` (sin espacios ni tildes) y los textos. Aparece solo en Proyectos, en los filtros y en la ficha. Los 4 primeros de la lista salen en el Inicio.

## Contacto

Al final de `js/datos.js` está `window.CONTACTO`: WhatsApp, Instagram, correo, Behance y TikTok. **Falta poner tu correo real y los links de Behance y TikTok.**

El formulario no necesita servidor: cuando la persona sella la carta, puede enviarla por WhatsApp o por correo con el mensaje ya escrito.

## Canciones

En `sobre-mi.html`, busca `class="pistas"` y cambia los títulos y artistas.

## Estrellas escondidas

Hay 5, una por página. Cada visitante puede ver en el menú cuántas lleva encontradas, y al encontrar las 5 se abre un mensaje con un boceto sorpresa. Para reiniciar el contador en tu navegador, borra los datos del sitio.

## Pendientes

- Imágenes y videos reales
- Correo, Behance y TikTok
- Revisar los textos de cada proyecto (años, roles, herramientas)
- Testimonios (la sección de rayas hoy muestra una cita del manifiesto)
