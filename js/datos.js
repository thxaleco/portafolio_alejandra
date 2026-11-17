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
    cliente: "Marca de accesorios · desde 2023",
    anio: "2023 – hoy",
    rol: "Identidad de marca, dirección de arte, contenido",
    entregables: "Logo, piezas para redes, catálogo PDF y web, reel",
    herramientas: "Illustrator, InDesign, Lightroom, CapCut",
    categorias: ["identidad", "editorial", "redes", "audiovisual"],
    color: "ph--mora",
    portada: { src: "", label: "Portada · Bloom Store" },
    resumen: "Una marca que se queda: acompaño a Bloom Store desde 2023, con un logo que no ha cambiado y una identidad que evoluciona sin perder su esencia.",
    concepto: {
      titulo: "Florecer en los detalles",
      texto: "Bloom vende piezas pequeñas, así que el concepto fue mirar de cerca: encuadres cerrados, aire alrededor y una paleta lila que deja protagonismo a cada accesorio. La identidad combina una serif delicada con fotografía de producto limpia y recursos hechos a mano: etiquetas, cajas y texturas."
    },
    pasos: [
      ["Habitar", "Conocer la tienda, el producto y a quien lo compra."],
      ["Conceptualizar", "Lilas, luz suave y joyería sobre texturas."],
      ["Sistema", "Retículas para feed, catálogo y stories."],
      ["Materializar", "Fotos de producto, piezas y edición de reel."]
    ],
    antes: { src: "", label: "Boceto / moodboard" },
    despues: { src: "", label: "Pieza final" },
    resultado: "Un ecosistema visual que crece con la marca: piezas para redes con identidad propia, un catálogo que funciona en PDF y en web, y un reel tipo vlog que muestra la marca desde adentro.",
    paleta: ["#B9A6E0", "#E9E3F7", "#6B5A9E", "#F6F2FB"],
    galeria: [
      { tipo: "img", label: "Evolución 2023 → hoy", ancho: true, ar: "16/10" },
      { tipo: "telefono", label: "Reel · vlog" },
      { tipo: "img", label: "Catálogo · portada", ar: "3/4" },
      { tipo: "img", label: "Catálogo · interior", ar: "3/4" },
      { tipo: "img", label: "Catálogo web", ar: "3/4" },
      { tipo: "img", label: "Detalle de producto", completo: true, ar: "21/9" }
    ]
  },
  {
    slug: "danny-road",
    titulo: "Danny Road",
    cliente: "Videoclip musical",
    anio: "2025",
    rol: "Equipo de arte: concepto, vestuario y ambientación",
    entregables: "Propuesta de arte, vestuario, ambientación del set",
    herramientas: "Moodboards, Illustrator, Lightroom",
    categorias: ["direccion", "audiovisual"],
    color: "ph--ciruela",
    portada: { src: "", label: "Portada · Danny Road" },
    resumen: "Cómo se arma el concepto de un videoclip: referentes de casino y rock convertidos en vestuario, ambientación y una atmósfera que acompaña la canción.",
    concepto: {
      titulo: "Casino, rock y una atmósfera propia",
      texto: "Partimos de dos mundos: el brillo del casino y la actitud del rock. Desde el equipo de arte traduje esos referentes en una paleta, en piezas de vestuario y en la ambientación de cada escena, para que todo lo que aparece en cuadro tenga un porqué."
    },
    pasos: [
      ["Habitar", "Escuchar la canción y entender al artista."],
      ["Referentes", "Casino, rock, texturas y luz."],
      ["Vestuario", "Siluetas, color y accesorios por personaje."],
      ["Set", "Ambientación y objetos en cuadro."]
    ],
    antes: { src: "", label: "Moodboard de arte" },
    despues: { src: "", label: "Fotograma final" },
    resultado: "Un videoclip con una identidad visual coherente de principio a fin, en el que el arte cuenta tanto como la música.",
    paleta: ["#1E1A1C", "#B0263A", "#D4A64A", "#EFE6D6"],
    galeria: [
      { tipo: "img", label: "Moodboard · referentes", ancho: true, ar: "16/10" },
      { tipo: "telefono", label: "Fragmento del videoclip" },
      { tipo: "img", label: "Vestuario", ar: "3/4" },
      { tipo: "img", label: "Ambientación del set", ar: "3/4" },
      { tipo: "img", label: "Detrás de cámaras", ar: "3/4" },
      { tipo: "img", label: "Fotogramas", completo: true, ar: "21/9" }
    ]
  },
  {
    slug: "tradicion-en-canasta",
    titulo: "Tradición en Canasta",
    cliente: "Tiendas de barrio · cultura",
    anio: "2025",
    rol: "Investigación, dirección de arte, fotografía",
    entregables: "Registro fotográfico y piezas gráficas",
    herramientas: "Cámara, Lightroom, Illustrator",
    categorias: ["direccion", "fotografia", "identidad"],
    color: "ph--salvia",
    portada: { src: "", label: "Portada · Tradición en Canasta" },
    resumen: "Lo que me enseñaron las tiendas de barrio: al habitar esos espacios descubrí que los detalles comunican más de lo que parece.",
    concepto: {
      titulo: "Los detalles comunican",
      texto: "Antes de diseñar, me senté en las tiendas: miré cómo se acomoda la mercancía, cómo se escriben los letreros a mano y cómo se saluda a cada vecino. El proyecto convierte esa cultura cotidiana en imagen, con respeto por las personas y las historias que retrata."
    },
    pasos: [
      ["Habitar", "Visitar, conversar y observar las tiendas."],
      ["Registrar", "Fotografía de objetos, letreros y gestos."],
      ["Conceptualizar", "Lo cotidiano como identidad."],
      ["Materializar", "Piezas que devuelven la mirada al barrio."]
    ],
    antes: { src: "", label: "Registro de campo" },
    despues: { src: "", label: "Pieza final" },
    resultado: "Un proyecto que hace visibles prácticas que suelen pasar desapercibidas y las presenta con el detalle que merecen.",
    paleta: ["#C8553D", "#F2D0A4", "#588157", "#F7EFE2"],
    galeria: [
      { tipo: "img", label: "Tienda de barrio", ancho: true, ar: "16/10" },
      { tipo: "img", label: "Letreros a mano", ar: "4/5" },
      { tipo: "img", label: "Objetos", ar: "4/5" },
      { tipo: "img", label: "Retrato", ar: "4/5" },
      { tipo: "img", label: "Piezas gráficas", ar: "4/5" },
      { tipo: "img", label: "Registro completo", completo: true, ar: "21/9" }
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
    categorias: ["direccion", "identidad", "fotografia", "redes", "audiovisual"],
    color: "ph--ciruela",
    portada: { src: "", label: "Portada · Velvet Club" },
    resumen: "Una marca de ropa con espíritu de club: conceptualicé un evento, planeé el contenido y dirigí una sesión de fotos cálida y cercana.",
    concepto: {
      titulo: "Una invitación, no un anuncio",
      texto: "Cada pieza de Velvet Club se pensó como una invitación personal: sobres, sellos, tipografía cursiva y tonos rosa y vino. La fotografía siguió el mismo concepto, con luz natural y amigas compartiendo, para que la marca se viva como un plan y no como un catálogo."
    },
    pasos: [
      ["Conceptualizar", "El club como lugar de encuentro."],
      ["Evento", "Invitaciones con lenguaje de correspondencia."],
      ["Fotografía", "Locación, styling y dirección."],
      ["Reel", "Narrativa audiovisual de la marca."]
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
    resumen: "Una ruta por los museos y galerías de Pereira en un solo flyer: mucha información, ordenada para que den ganas de salir a recorrer la ciudad.",
    concepto: {
      titulo: "¿Por qué hablar de arte en Pereira?",
      texto: "La pieza responde a esa pregunta con una jerarquía clara: espacios, horarios y datos clave en bloques, tipografía condensada con carácter y un QR que conecta el papel con lo digital. Lo cultural, contado con orden."
    },
    pasos: [
      ["Habitar", "Visitar y listar museos y galerías."],
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
    cliente: "Valeria Alvarado · creadora de contenido",
    anio: "2025",
    rol: "Diseño editorial, dirección de arte, marca personal",
    entregables: "Media kit de una página para marcas y redes",
    herramientas: "Canva, Illustrator",
    categorias: ["identidad", "editorial"],
    color: "ph--mora",
    portada: { src: "assets/proyectos/media-kit/portada.webp", label: "Portada · Media kit de Valeria Alvarado", ar: "16/9" },
    resumen: "El portafolio de Valeria Alvarado, cosmetóloga y creadora de contenido: quién es, su forma de conectar, su trabajo con marcas y sus planes, en una sola pieza rosa, cercana y llena de collage.",
    concepto: {
      titulo: "Un expediente que se abre",
      texto: "La pieza arranca con una carpeta rosa que dice «Portafolio», como si abriéramos su expediente. Desde ahí, estrellas de puntas, fotos recortadas con borde blanco y objetos retro (megáfono, cámara, teléfono) acompañan cada sección, y la tipografía mezcla una sans en itálica con una caligrafía para la palabra que se quiere destacar."
    },
    pasos: [
      ["Habitar", "Conocer a Valeria, su audiencia y las marcas con las que trabaja."],
      ["Identidad", "Rosa, estrellas de puntas, recortes y caligrafía."],
      ["Estructura", "Sobre mí, forma de conectar, trabajo, marcas, planes y contacto."],
      ["Materializar", "Fotos recortadas, reels en marcos y tabla de planes."]
    ],
    antes: { src: "", label: "Wireframe" },
    despues: { src: "assets/proyectos/media-kit/portada.webp", label: "Media kit final" },
    resultado: "Un media kit que se lee de arriba abajo como una conversación: presenta a Valeria, muestra su contenido real y sus marcas aliadas, y cierra con planes claros y botones para contactarla.",
    paleta: ["#E3B6C3", "#CB8A9B", "#A3536F", "#F0EAE5"],
    galeria: [
      { tipo: "img", src: "assets/proyectos/media-kit/sobre-mi.webp", label: "Sobre mí", ancho: true, ar: "1600/898" },
      { tipo: "scroll", src: "assets/proyectos/media-kit/completo.webp", label: "Vista completa", alto: "430px" },
      { tipo: "img", src: "assets/proyectos/media-kit/conectar.webp", label: "Mi forma de conectar", completo: true, ar: "1600/891" },
      { tipo: "img", src: "assets/proyectos/media-kit/trabajo.webp", label: "Conoce mi trabajo", completo: true, ar: "1600/987" },
      { tipo: "img", src: "assets/proyectos/media-kit/marcas.webp", label: "Marcas aliadas", completo: true, ar: "1600/475" },
      { tipo: "img", src: "assets/proyectos/media-kit/precios.webp", label: "Planes y precios", ancho: true, ar: "1600/929" },
      { tipo: "img", src: "assets/proyectos/media-kit/contacto.webp", label: "Trabajemos juntos", ar: "1600/894" }
    ]
  },
  {
    slug: "proyecto-universitario",
    titulo: "Piezas culturales",
    cliente: "Proyecto universitario · UCC",
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
      texto: "Tomé la estética de los carteles y discos de los 70 (tipografías redondas, colores cálidos, texturas de impresión) y la llevé a un sistema para redes, para que cada pieza sea distinta pero claramente de la misma familia."
    },
    pasos: [
      ["Referentes", "Carteles, discos y gráfica de los 70."],
      ["Sistema", "Tipografía, color y retícula base."],
      ["Serie", "Variaciones para cada plan."],
      ["Ajuste", "Lectura en formato feed."]
    ],
    antes: { src: "", label: "Referentes" },
    despues: { src: "", label: "Serie final" },
    resultado: "Una identidad flexible que permite producir nuevas piezas sin perder coherencia.",
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
    rol: "Identidad, relato de marca, dirección de arte, web",
    entregables: "Relato y manual de marca, portafolio PDF y web",
    herramientas: "Illustrator, InDesign, Figma, HTML/CSS",
    categorias: ["direccion", "identidad", "editorial", "web"],
    color: "ph--salvia",
    portada: { src: "", label: "Portada · Marca personal" },
    resumen: "Mi propia identidad: un collage editorial y digital con recortes, papel, puntos y trazos a mano sobre composiciones ordenadas, en ciruela, crema y verde salvia.",
    concepto: {
      titulo: "Busco estrellas en lo cotidiano",
      texto: "Construí mi marca desde tres arquetipos: la Creadora pone las manos, la Maga vuelve los fragmentos un universo y la Rebelde interrumpe lo impecable de la pantalla con lo imperfecto del papel. La estrella me acompaña a todas partes."
    },
    pasos: [
      ["Habitarme", "Qué me mueve y cómo trabajo."],
      ["Relato", "Propósito, arquetipos y voz."],
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
  direccion: "Dirección de arte",
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
  correo: "designsbyalejandrac@gmail.com",
  behance: "",           /* link a tu perfil; vacío = no se muestra */
  tiktok: "https://www.tiktok.com/@aleewithluv",
  /* Link de ALMA, tu app de brief. Si queda vacío, los botones muestran un aviso. */
  alma: ""
};
