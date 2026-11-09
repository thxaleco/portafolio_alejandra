/* =========================================================
   DATOS DE PROYECTOS
   ---------------------------------------------------------
   Para cambiar imágenes: escribe la ruta en "src", por ejemplo
   src: "assets/proyectos/bloom-portada.jpg"
   Si "src" está vacío, la web muestra un placeholder.
   Para videos usa un archivo .mp4 (tipo: "video" o "telefono").
   ========================================================= */

window.PROYECTOS = [
  {
    slug: "bloom-store",
    titulo: "Bloom Store",
    cliente: "Marca de accesorios",
    anio: "2025",
    rol: "Identidad de marca, dirección de arte, contenido",
    entregables: "Piezas para redes, catálogo PDF y web, reel",
    herramientas: "Illustrator, InDesign, Lightroom, CapCut",
    categorias: ["identidad", "editorial", "redes", "audiovisual"],
    color: "ph--mora",
    portada: { src: "", label: "Portada · Bloom Store" },
    resumen: "Una marca de accesorios que necesitaba sentirse tan delicada como sus piezas: un sistema lila, suave y ordenado que vive igual de bien en un feed, en un catálogo y en un reel.",
    concepto: {
      titulo: "Florecer en los detalles",
      texto: "Bloom vende piezas pequeñas, así que el concepto fue mirar de cerca: encuadres cerrados, mucho aire alrededor y una paleta lila que hace protagonista a cada accesorio. La identidad combina una serif delicada con fotografía de producto limpia, y deja espacio para recursos análogos como etiquetas, cajas y texturas."
    },
    pasos: [
      ["Habitar", "Conocer la tienda, el producto y a quien lo compra."],
      ["Moodboard", "Lilas, luz suave, joyería sobre texturas."],
      ["Sistema", "Retículas para feed, catálogo y stories."],
      ["Producción", "Fotos de producto, piezas y edición de reel."]
    ],
    antes: { src: "", label: "Boceto / moodboard" },
    despues: { src: "", label: "Pieza final" },
    resultado: "Un ecosistema visual coherente: piezas para redes con identidad propia, un catálogo que funciona en PDF y en web, y un reel tipo vlog que muestra la marca desde adentro.",
    paleta: ["#B9A6E0", "#E9E3F7", "#6B5A9E", "#F6F2FB"],
    galeria: [
      { tipo: "img", label: "Piezas para redes", ancho: true, ar: "16/10" },
      { tipo: "telefono", label: "Reel · vlog" },
      { tipo: "img", label: "Catálogo · portada", ar: "3/4" },
      { tipo: "img", label: "Catálogo · interior", ar: "3/4" },
      { tipo: "img", label: "Catálogo web", ar: "3/4" },
      { tipo: "img", label: "Detalle de producto", completo: true, ar: "21/9" }
    ]
  },
  {
    slug: "velvet-club",
    titulo: "Velvet Club",
    cliente: "Marca de ropa",
    anio: "2025",
    rol: "Concepto de marca, fotografía, planeación de contenidos",
    entregables: "Piezas para evento, sesión de fotos, reel",
    herramientas: "Illustrator, Lightroom, Canva, CapCut",
    categorias: ["identidad", "fotografia", "redes", "audiovisual"],
    color: "ph--ciruela",
    portada: { src: "", label: "Portada · Velvet Club" },
    resumen: "Una marca de ropa con alma de club: conceptualicé un evento, planeé el contenido y dirigí una sesión de fotos que se siente cálida, cercana y un poco romántica.",
    concepto: {
      titulo: "Una invitación, no un anuncio",
      texto: "Cada pieza de Velvet Club se pensó como una invitación personal: sobres, sellos, tipografía cursiva y tonos rosa y vino. La fotografía siguió el mismo concepto, con luz natural, naturaleza y amigas compartiendo, para que la marca se viva como un plan y no como un catálogo."
    },
    pasos: [
      ["Concepto", "El club como lugar de encuentro."],
      ["Evento", "Invitaciones y piezas con lenguaje de correspondencia."],
      ["Fotografía", "Planeación, locación, styling y dirección."],
      ["Reel", "Narrativa audiovisual del concepto de marca."]
    ],
    antes: { src: "", label: "Planeación / boceto" },
    despues: { src: "", label: "Pieza final" },
    resultado: "Un evento con identidad propia, una sesión fotográfica que alimenta meses de contenido y un reel que resume el espíritu de la marca.",
    paleta: ["#C7425A", "#F3D3D8", "#7A1E2E", "#E9B8C0"],
    galeria: [
      { tipo: "img", label: "Invitación al evento", ar: "3/4" },
      { tipo: "img", label: "Pieza del evento", ar: "3/4" },
      { tipo: "telefono", label: "Reel · concepto de marca" },
      { tipo: "img", label: "Fotografía · sesión", ancho: true, ar: "16/10" },
      { tipo: "img", label: "Fotografía · retrato", ar: "4/5" },
      { tipo: "img", label: "Planeación de contenidos", completo: true, ar: "21/9" }
    ]
  },
  {
    slug: "museos-pereira",
    titulo: "Museos de Pereira",
    cliente: "Pieza infográfica",
    anio: "2024",
    rol: "Diseño de información, diseño editorial",
    entregables: "Flyer infográfico interactivo con QR",
    herramientas: "Illustrator, InDesign",
    categorias: ["editorial"],
    color: "ph--ciruela",
    portada: { src: "", label: "Portada · Museos de Pereira" },
    resumen: "Una ruta por los museos y galerías de Pereira resumida en un flyer: mucha información, ordenada para que dé ganas de salir a recorrer la ciudad.",
    concepto: {
      titulo: "¿Por qué hablar de arte en Pereira?",
      texto: "La pieza responde a esa pregunta con una jerarquía clara: espacios, horarios y datos clave organizados en bloques, tipografía condensada con carácter y un QR que conecta el papel con lo digital. Es mi forma favorita de diseñar: lo cultural contado con orden."
    },
    pasos: [
      ["Investigar", "Visitar y listar museos y galerías."],
      ["Jerarquizar", "Decidir qué se lee primero."],
      ["Componer", "Retícula, tipografía y color."],
      ["Conectar", "QR e interacción con lo digital."]
    ],
    antes: { src: "", label: "Boceto de retícula" },
    despues: { src: "", label: "Flyer final" },
    resultado: "Un flyer que funciona como guía de bolsillo y como puerta a más información, pensado para circular impreso y en digital.",
    paleta: ["#6E1F2B", "#E8B04A", "#2F2A26", "#F1E4CC"],
    galeria: [
      { tipo: "img", label: "Flyer · cara frontal", ancho: true, ar: "16/10" },
      { tipo: "img", label: "Detalle · QR", ar: "4/5" },
      { tipo: "img", label: "Flyer · mockup impreso", completo: true, ar: "21/9" }
    ]
  },
  {
    slug: "media-kit",
    titulo: "Media kit",
    cliente: "Creadora de contenido",
    anio: "2025",
    rol: "Diseño de portafolio, marca personal",
    entregables: "Media kit funcional e interactivo",
    herramientas: "Figma, Canva, Illustrator",
    categorias: ["identidad", "editorial", "web"],
    color: "ph--mora",
    portada: { src: "", label: "Portada · Media kit" },
    resumen: "Un portafolio para una creadora de contenido: su personalidad, sus métricas y sus colaboraciones en un documento rosa, cálido e interactivo.",
    concepto: {
      titulo: "Una marca que se siente como ella",
      texto: "El media kit tenía que ser útil para las marcas y fiel a la creadora. Combiné collage, flores y fotografías recortadas con una estructura clara de datos, para que se lea rápido y se recuerde."
    },
    pasos: [
      ["Escuchar", "Entender su voz y su audiencia."],
      ["Marca personal", "Paleta, tipografía y recursos gráficos."],
      ["Estructura", "Métricas, servicios y casos."],
      ["Interacción", "Navegación y enlaces funcionales."]
    ],
    antes: { src: "", label: "Wireframe" },
    despues: { src: "", label: "Media kit final" },
    resultado: "Un media kit que se envía con orgullo: profesional para las marcas y con la personalidad de la creadora en cada página.",
    paleta: ["#D98BA8", "#F6DCE6", "#8E3B5E", "#FFF4F7"],
    galeria: [
      { tipo: "img", label: "Media kit · portada", ar: "3/4" },
      { tipo: "img", label: "Media kit · métricas", ar: "3/4" },
      { tipo: "img", label: "Media kit · servicios", ar: "3/4" },
      { tipo: "img", label: "Vista general", completo: true, ar: "21/9" }
    ]
  },
  {
    slug: "proyecto-universitario",
    titulo: "Agenda cultural",
    cliente: "Proyecto universitario",
    anio: "2024",
    rol: "Identidad visual, piezas gráficas",
    entregables: "Serie de piezas para redes",
    herramientas: "Illustrator, Photoshop",
    categorias: ["identidad", "redes"],
    color: "ph--salvia",
    portada: { src: "", label: "Portada · Proyecto universitario" },
    resumen: "Una serie de piezas con identidad retro para anunciar planes culturales: El Parque de los Gatos, Save the Date y La Materna.",
    concepto: {
      titulo: "Nostalgia con orden",
      texto: "Tomé la estética de los carteles y discos de los 70 (tipografías redondas, colores cálidos, texturas de impresión) y la llevé a un sistema repetible para redes, para que cada pieza sea distinta pero claramente de la misma familia."
    },
    pasos: [
      ["Referentes", "Carteles, discos y gráfica de los 70."],
      ["Sistema", "Tipografía, color y retícula base."],
      ["Serie", "Variaciones para cada plan."],
      ["Ajuste", "Lectura en formato feed."]
    ],
    antes: { src: "", label: "Referentes" },
    despues: { src: "", label: "Serie final" },
    resultado: "Una identidad flexible que permite producir nuevas piezas rápido sin perder coherencia.",
    paleta: ["#D9822B", "#3E8C8A", "#C4B04A", "#F2E3C6"],
    galeria: [
      { tipo: "img", label: "El Parque de los Gatos", ar: "4/5" },
      { tipo: "img", label: "Save the Date", ar: "4/5" },
      { tipo: "img", label: "La Materna", ar: "4/5" }
    ]
  },
  {
    slug: "marca-personal",
    titulo: "Marca personal",
    cliente: "Alejandra Correa",
    anio: "2025",
    rol: "Identidad, dirección de arte, web",
    entregables: "Manual de marca, portafolio PDF y web",
    herramientas: "Illustrator, InDesign, Figma, HTML/CSS",
    categorias: ["identidad", "editorial", "web"],
    color: "ph--salvia",
    portada: { src: "", label: "Portada · Marca personal" },
    resumen: "Mi propia identidad: una mirada artística con estructura clara. Estrellas, flores recortadas y papel, en ciruela, crema y verde salvia.",
    concepto: {
      titulo: "Si miras de cerca, todo tiene un porqué",
      texto: "Construí mi marca con lo que soy: lo análogo dentro de lo digital. El collage, las texturas de papel, las flechas a mano y las estrellas son mi firma, y la tipografía editorial y la retícula ordenada son la estructura que los sostiene."
    },
    pasos: [
      ["Habitarme", "Qué me mueve y cómo trabajo."],
      ["Concepto", "Detalle, perspectiva y equilibrio."],
      ["Sistema", "Paleta, tipografías y recursos."],
      ["Ecosistema", "Redes, PDF y esta web."]
    ],
    antes: { src: "", label: "Moodboard" },
    despues: { src: "", label: "Manual final" },
    resultado: "Un sistema visual que me representa en todos los formatos, incluida la web que estás viendo.",
    paleta: ["#EDEAE0", "#683651", "#849078", "#AE7F97", "#273222"],
    galeria: [
      { tipo: "img", label: "Manual · portada", ancho: true, ar: "16/9" },
      { tipo: "img", label: "Paleta", ar: "4/5" },
      { tipo: "img", label: "Estilo en redes", completo: true, ar: "21/9" }
    ]
  }
];

window.CATEGORIAS = {
  identidad: "Identidad",
  editorial: "Editorial",
  redes: "Redes",
  audiovisual: "Audiovisual",
  fotografia: "Fotografía",
  web: "Web / UI"
};

/* Contacto: cambia aquí tus datos y se actualizan en toda la web */
window.CONTACTO = {
  whatsapp: "573103982677",
  whatsappVisible: "+57 310 398 2677",
  instagram: "_thxale",
  correo: "tucorreo@ejemplo.com",
  behance: "https://www.behance.net/",
  tiktok: "https://www.tiktok.com/"
};
