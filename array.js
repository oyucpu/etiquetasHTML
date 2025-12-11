const htmlTags = [
  {
    "name": "a",
    "ns": "svg",
    "desc": "Ancla/enlace (SVG)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "href",
      "target"
    ]
  },
  {
    "name": "a",
    "ns": "html",
    "desc": "Hiperenlace o ancla",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "href",
      "target",
      "download",
      "rel",
      "hreflang",
      "ping",
      "referrerpolicy"
    ]
  },
  {
    "name": "abbr",
    "ns": "html",
    "desc": "Abreviatura",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "title"
    ]
  },
  {
    "name": "acronym",
    "ns": "html",
    "desc": "Acrónimo (obsoleta → usar abbr)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "title"
    ]
  },
  {
    "name": "address",
    "ns": "html",
    "desc": "Información de contacto",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "animate",
    "ns": "svg",
    "desc": "Animación de atributos (SVG)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "attributeName",
      "from",
      "to",
      "dur",
      "repeatCount"
    ]
  },
  {
    "name": "animateMotion",
    "ns": "svg",
    "desc": "Animación de movimiento (SVG)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "path",
      "dur",
      "repeatCount"
    ]
  },
  {
    "name": "animateTransform",
    "ns": "svg",
    "desc": "Animación de transformación (SVG)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "attributeName",
      "type",
      "from",
      "to",
      "dur"
    ]
  },
  {
    "name": "annotation",
    "ns": "mathml",
    "desc": "Anotación matemática (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "encoding"
    ]
  },
  {
    "name": "annotation-xml",
    "ns": "mathml",
    "desc": "Anotación XML matemática (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "encoding"
    ]
  },
  {
    "name": "applet",
    "ns": "html",
    "desc": "Applet de Java (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "code",
      "object",
      "archive",
      "codebase"
    ]
  },
  {
    "name": "area",
    "ns": "html",
    "desc": "Área interactiva en imagen",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "shape",
      "coords",
      "href",
      "alt",
      "target",
      "download",
      "rel"
    ]
  },
  {
    "name": "article",
    "ns": "html",
    "desc": "Artículo independiente",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "aside",
    "ns": "html",
    "desc": "Contenido lateral",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "audio",
    "ns": "html",
    "desc": "Reproductor de audio",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "src",
      "controls",
      "autoplay",
      "loop",
      "muted",
      "preload"
    ]
  },
  {
    "name": "b",
    "ns": "html",
    "desc": "Negrita sin semántica",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "base",
    "ns": "html",
    "desc": "URL base del documento",
    "obs": false,
    "exp": false,
    "global": false,
    "attrs": [
      "href",
      "target"
    ]
  },
  {
    "name": "basefont",
    "ns": "html",
    "desc": "Fuente base (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "color",
      "face",
      "size"
    ]
  },
  {
    "name": "bdi",
    "ns": "html",
    "desc": "Aísla dirección de texto",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "bdo",
    "ns": "html",
    "desc": "Sobrescribe dirección de texto",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "dir"
    ]
  },
  {
    "name": "bgsound",
    "ns": "html",
    "desc": "Sonido de fondo (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "src",
      "loop"
    ]
  },
  {
    "name": "big",
    "ns": "html",
    "desc": "Texto grande (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "blink",
    "ns": "html",
    "desc": "Texto parpadeante (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "blockquote",
    "ns": "html",
    "desc": "Cita en bloque",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "cite"
    ]
  },
  {
    "name": "body",
    "ns": "html",
    "desc": "Cuerpo del documento",
    "obs": false,
    "exp": false,
    "global": false,
    "attrs": []
  },
  {
    "name": "br",
    "ns": "html",
    "desc": "Salto de línea",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "clear (obs)"
    ]
  },
  {
    "name": "button",
    "ns": "html",
    "desc": "Botón interactivo",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "type",
      "name",
      "value",
      "disabled",
      "form",
      "popovertarget",
      "popovertargetaction"
    ]
  },
  {
    "name": "canvas",
    "ns": "html",
    "desc": "Dibujo con JavaScript",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "width",
      "height"
    ]
  },
  {
    "name": "caption",
    "ns": "html",
    "desc": "Título de tabla",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "center",
    "ns": "html",
    "desc": "Centrar contenido (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "cite",
    "ns": "html",
    "desc": "Referencia a obra",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "code",
    "ns": "html",
    "desc": "Código fuente",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "col",
    "ns": "html",
    "desc": "Columna de tabla",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "span"
    ]
  },
  {
    "name": "colgroup",
    "ns": "html",
    "desc": "Grupo de columnas",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "span"
    ]
  },
  {
    "name": "content",
    "ns": "html",
    "desc": "Shadow DOM v0 (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "select"
    ]
  },
  {
    "name": "data",
    "ns": "html",
    "desc": "Valor legible por máquina",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "value"
    ]
  },
  {
    "name": "datalist",
    "ns": "html",
    "desc": "Lista de sugerencias",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "dd",
    "ns": "html",
    "desc": "Descripción en lista de definiciones",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "del",
    "ns": "html",
    "desc": "Texto eliminado",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "cite",
      "datetime"
    ]
  },
  {
    "name": "details",
    "ns": "html",
    "desc": "Contenido desplegable",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "open"
    ]
  },
  {
    "name": "dfn",
    "ns": "html",
    "desc": "Definición de término",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "dialog",
    "ns": "html",
    "desc": "Ventana modal",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "open"
    ]
  },
  {
    "name": "dir",
    "ns": "html",
    "desc": "Lista de directorios (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "compact (obs)"
    ]
  },
  {
    "name": "div",
    "ns": "html",
    "desc": "Contenedor genérico",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "dl",
    "ns": "html",
    "desc": "Lista de definiciones",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "dt",
    "ns": "html",
    "desc": "Término en lista de definiciones",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "element",
    "ns": "html",
    "desc": "Custom elements v0 (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "em",
    "ns": "html",
    "desc": "Énfasis",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "embed",
    "ns": "html",
    "desc": "Contenido externo incrustado",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "src",
      "type",
      "width",
      "height"
    ]
  },
  {
    "name": "fencedframe",
    "ns": "html",
    "desc": "Marco aislado con privacidad (experimental)",
    "obs": false,
    "exp": true,
    "global": true,
    "attrs": [
      "src",
      "width",
      "height"
    ]
  },
  {
    "name": "fieldset",
    "ns": "html",
    "desc": "Grupo de campos de formulario",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "disabled",
      "form",
      "name"
    ]
  },
  {
    "name": "figcaption",
    "ns": "html",
    "desc": "Leyenda de figure",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "figure",
    "ns": "html",
    "desc": "Figura con leyenda",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "font",
    "ns": "svg",
    "desc": "Fuente (SVG obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "font-face",
    "ns": "svg",
    "desc": "Cara de fuente (SVG obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "font-face-format",
    "ns": "svg",
    "desc": "Formato de cara de fuente (SVG obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "font-face-name",
    "ns": "svg",
    "desc": "Nombre de cara de fuente (SVG obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "font-face-src",
    "ns": "svg",
    "desc": "Fuente de cara de fuente (SVG obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "font-face-uri",
    "ns": "svg",
    "desc": "URI de cara de fuente (SVG obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "font",
    "ns": "html",
    "desc": "Estilo de fuente (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "color",
      "face",
      "size"
    ]
  },
  {
    "name": "footer",
    "ns": "html",
    "desc": "Pie de página o sección",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "form",
    "ns": "html",
    "desc": "Formulario",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "action",
      "method",
      "enctype",
      "autocomplete",
      "novalidate",
      "rel"
    ]
  },
  {
    "name": "frame",
    "ns": "html",
    "desc": "Marco (obsoleta)",
    "obs": true,
    "exp": false,
    "global": false,
    "attrs": []
  },
  {
    "name": "frameset",
    "ns": "html",
    "desc": "Conjunto de marcos (obsoleta)",
    "obs": true,
    "exp": false,
    "global": false,
    "attrs": [
      "cols",
      "rows"
    ]
  },
  {
    "name": "h1",
    "ns": "html",
    "desc": "Encabezado nivel 1",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "h2",
    "ns": "html",
    "desc": "Encabezado nivel 2",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "h3",
    "ns": "html",
    "desc": "Encabezado nivel 3",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "h4",
    "ns": "html",
    "desc": "Encabezado nivel 4",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "h5",
    "ns": "html",
    "desc": "Encabezado nivel 5",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "h6",
    "ns": "html",
    "desc": "Encabezado nivel 6",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "head",
    "ns": "html",
    "desc": "Cabecera del documento",
    "obs": false,
    "exp": false,
    "global": false,
    "attrs": []
  },
  {
    "name": "header",
    "ns": "html",
    "desc": "Cabecera de sección",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "hgroup",
    "ns": "html",
    "desc": "Grupo de encabezados",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "hr",
    "ns": "html",
    "desc": "Línea divisoria",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "color"
    ]
  },
  {
    "name": "html",
    "ns": "html",
    "desc": "Raíz del documento",
    "obs": false,
    "exp": false,
    "global": false,
    "attrs": []
  },
  {
    "name": "i",
    "ns": "html",
    "desc": "Cursiva sin semántica",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "iframe",
    "ns": "html",
    "desc": "Marco incrustado",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "src",
      "width",
      "height",
      "sandbox",
      "allow",
      "loading",
      "credentialless"
    ]
  },
  {
    "name": "image",
    "ns": "html",
    "desc": "Imagen (obsoleta → usar img)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "src",
      "alt"
    ]
  },
  {
    "name": "img",
    "ns": "html",
    "desc": "Imagen",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "src",
      "alt",
      "srcset",
      "sizes",
      "width",
      "height",
      "loading",
      "decoding",
      "fetchpriority"
    ]
  },
  {
    "name": "input",
    "ns": "html",
    "desc": "Campo de entrada",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "type",
      "name",
      "value",
      "placeholder",
      "required",
      "pattern",
      "list",
      "autocomplete"
    ]
  },
  {
    "name": "ins",
    "ns": "html",
    "desc": "Texto insertado",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "cite",
      "datetime"
    ]
  },
  {
    "name": "isindex",
    "ns": "html",
    "desc": "Campo de búsqueda (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "prompt"
    ]
  },
  {
    "name": "kbd",
    "ns": "html",
    "desc": "Entrada de teclado",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "keygen",
    "ns": "html",
    "desc": "Generador de claves (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "challenge",
      "keytype"
    ]
  },
  {
    "name": "label",
    "ns": "html",
    "desc": "Etiqueta de control",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "for"
    ]
  },
  {
    "name": "legend",
    "ns": "html",
    "desc": "Título de fieldset",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "li",
    "ns": "html",
    "desc": "Elemento de lista",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "value"
    ]
  },
  {
    "name": "link",
    "ns": "html",
    "desc": "Recurso externo (CSS, icono...)",
    "obs": false,
    "exp": false,
    "global": false,
    "attrs": [
      "rel",
      "href",
      "type",
      "media",
      "sizes",
      "integrity",
      "crossorigin"
    ]
  },
  {
    "name": "listing",
    "ns": "html",
    "desc": "Listado de código (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "maction",
    "ns": "mathml",
    "desc": "Acciones matemáticas (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "actiontype",
      "selection"
    ]
  },
  {
    "name": "main",
    "ns": "html",
    "desc": "Contenido principal",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "maligngroup",
    "ns": "mathml",
    "desc": "Agrupación de alineación (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "malignmark",
    "ns": "mathml",
    "desc": "Marca de alineación (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "edge"
    ]
  },
  {
    "name": "map",
    "ns": "html",
    "desc": "Mapa de imagen",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "name"
    ]
  },
  {
    "name": "mark",
    "ns": "html",
    "desc": "Texto resaltado",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "marquee",
    "ns": "html",
    "desc": "Texto animado (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "behavior",
      "direction"
    ]
  },
  {
    "name": "math",
    "ns": "mathml",
    "desc": "Incrustar matemáticas de expresionesML",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "id",
      "class",
      "dir",
      "href",
      "mathbackground",
      "mathcolor",
      "display",
      "overflow",
      "mode (obsoleto)"
    ]
  },
  {
    "name": "menclose",
    "ns": "mathml",
    "desc": "Cerrar notación matemática (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "notation"
    ]
  },
  {
    "name": "menu",
    "ns": "html",
    "desc": "Menú de comandos",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "type",
      "label"
    ]
  },
  {
    "name": "menuitem",
    "ns": "html",
    "desc": "Elemento de menú (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "type",
      "label"
    ]
  },
  {
    "name": "merror",
    "ns": "mathml",
    "desc": "Error matemático (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "meta",
    "ns": "html",
    "desc": "Metadatos",
    "obs": false,
    "exp": false,
    "global": false,
    "attrs": [
      "name",
      "content",
      "charset",
      "http-equiv"
    ]
  },
  {
    "name": "meter",
    "ns": "html",
    "desc": "Medidor",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "value",
      "min",
      "max",
      "low",
      "high",
      "optimum"
    ]
  },
  {
    "name": "mfenced",
    "ns": "mathml",
    "desc": "Paréntesis matemáticos (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "open",
      "close",
      "separators"
    ]
  },
  {
    "name": "mfrac",
    "ns": "mathml",
    "desc": "Fracción (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "linethickness"
    ]
  },
  {
    "name": "mglyph",
    "ns": "mathml",
    "desc": "Glifo no estándar (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "src",
      "alt"
    ]
  },
  {
    "name": "mi",
    "ns": "mathml",
    "desc": "Identificador matemático (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "mlabeledtr",
    "ns": "mathml",
    "desc": "Fila etiquetada (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "mmultiscripts",
    "ns": "mathml",
    "desc": "Múltiples scripts (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "mn",
    "ns": "mathml",
    "desc": "Número (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "mo",
    "ns": "mathml",
    "desc": "Operador (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "fence",
      "separator",
      "stretchy"
    ]
  },
  {
    "name": "model",
    "ns": "html",
    "desc": "Modelo 3D (experimental)",
    "obs": false,
    "exp": true,
    "global": true,
    "attrs": [
      "src",
      "alt"
    ]
  },
  {
    "name": "mover",
    "ns": "mathml",
    "desc": "Sobre-script (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "accent"
    ]
  },
  {
    "name": "mpadded",
    "ns": "mathml",
    "desc": "Espaciado (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "height",
      "depth",
      "width"
    ]
  },
  {
    "name": "mphantom",
    "ns": "mathml",
    "desc": "Fantasma (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "mprescripts",
    "ns": "mathml",
    "desc": "Pre-scripts (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "mroot",
    "ns": "mathml",
    "desc": "Raíz con índice (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "mrow",
    "ns": "mathml",
    "desc": "Fila matemática (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "ms",
    "ns": "mathml",
    "desc": "Literal de cadena (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "mspace",
    "ns": "mathml",
    "desc": "Espacio (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "width",
      "height",
      "depth"
    ]
  },
  {
    "name": "msqrt",
    "ns": "mathml",
    "desc": "Raíz cuadrada (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "mstyle",
    "ns": "mathml",
    "desc": "Estilo matemático (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "msub",
    "ns": "mathml",
    "desc": "Subíndice (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "msubsup",
    "ns": "mathml",
    "desc": "Sub y superíndice (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "msup",
    "ns": "mathml",
    "desc": "Superíndice (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "mtable",
    "ns": "mathml",
    "desc": "Tabla matemática (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "mtd",
    "ns": "mathml",
    "desc": "Celda de tabla (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "columnspan",
      "rowspan"
    ]
  },
  {
    "name": "mtext",
    "ns": "mathml",
    "desc": "Texto (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "mtr",
    "ns": "mathml",
    "desc": "Fila de tabla (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "multicol",
    "ns": "html",
    "desc": "Múltiples columnas (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "cols",
      "width"
    ]
  },
  {
    "name": "munder",
    "ns": "mathml",
    "desc": "Bajo-script (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "accentunder"
    ]
  },
  {
    "name": "munderover",
    "ns": "mathml",
    "desc": "Bajo y sobre script (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "accent",
      "accentunder"
    ]
  },
  {
    "name": "nav",
    "ns": "html",
    "desc": "Navegación",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "nextid",
    "ns": "html",
    "desc": "Identificador siguiente (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "nobr",
    "ns": "html",
    "desc": "Sin saltos de línea (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "noembed",
    "ns": "html",
    "desc": "Sin embed (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "noframes",
    "ns": "html",
    "desc": "Alternativa a frames (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "noscript",
    "ns": "html",
    "desc": "Sin JavaScript",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "object",
    "ns": "html",
    "desc": "Objeto incrustado",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "data",
      "type",
      "width",
      "height"
    ]
  },
  {
    "name": "ol",
    "ns": "html",
    "desc": "Lista ordenada",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "reversed",
      "start",
      "type"
    ]
  },
  {
    "name": "optgroup",
    "ns": "html",
    "desc": "Grupo de opciones",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "label",
      "disabled"
    ]
  },
  {
    "name": "option",
    "ns": "html",
    "desc": "Opción de select",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "value",
      "selected",
      "disabled"
    ]
  },
  {
    "name": "output",
    "ns": "html",
    "desc": "Resultado de cálculo",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "for",
      "form",
      "name"
    ]
  },
  {
    "name": "p",
    "ns": "html",
    "desc": "Párrafo",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "param",
    "ns": "html",
    "desc": "Parámetro para object",
    "obs": false,
    "exp": false,
    "global": false,
    "attrs": [
      "name",
      "value"
    ]
  },
  {
    "name": "permission",
    "ns": "html",
    "desc": "Solicitud de permisos (experimental)",
    "obs": false,
    "exp": true,
    "global": true,
    "attrs": [
      "type"
    ]
  },
  {
    "name": "picture",
    "ns": "html",
    "desc": "Imágenes responsivas",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "plaintext",
    "ns": "html",
    "desc": "Texto plano (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "popover",
    "ns": "html",
    "desc": "Contenido emergente (experimental)",
    "obs": false,
    "exp": true,
    "global": true,
    "attrs": [
      "id"
    ]
  },
  {
    "name": "portal",
    "ns": "html",
    "desc": "Pre-renderizado de navegación (experimental)",
    "obs": false,
    "exp": true,
    "global": true,
    "attrs": [
      "src",
      "referrerpolicy"
    ]
  },
  {
    "name": "pre",
    "ns": "html",
    "desc": "Texto preformateado",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "progress",
    "ns": "html",
    "desc": "Barra de progreso",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "value",
      "max"
    ]
  },
  {
    "name": "q",
    "ns": "html",
    "desc": "Cita corta",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "cite"
    ]
  },
  {
    "name": "rb",
    "ns": "html",
    "desc": "Base ruby (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "rp",
    "ns": "html",
    "desc": "Paréntesis ruby",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "rt",
    "ns": "html",
    "desc": "Texto ruby",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "rtc",
    "ns": "html",
    "desc": "Contenedor ruby (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "ruby",
    "ns": "html",
    "desc": "Anotaciones ruby",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "s",
    "ns": "html",
    "desc": "Texto tachado sin validez",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "samp",
    "ns": "html",
    "desc": "Salida de programa",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "script",
    "ns": "svg",
    "desc": "Script (SVG)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "type",
      "href"
    ]
  },
  {
    "name": "script",
    "ns": "html",
    "desc": "JavaScript",
    "obs": false,
    "exp": false,
    "global": false,
    "attrs": [
      "src",
      "type",
      "async",
      "defer",
      "nomodule",
      "integrity",
      "crossorigin"
    ]
  },
  {
    "name": "search",
    "ns": "html",
    "desc": "Sección de búsqueda (semántico)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "section",
    "ns": "html",
    "desc": "Sección genérica",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "select",
    "ns": "html",
    "desc": "Lista desplegable",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "name",
      "multiple",
      "size",
      "required"
    ]
  },
  {
    "name": "selectcontent",
    "ns": "html",
    "desc": "Debe ser el único hijo del <button> y el primer hijo del <select>, con los <option> detrás. (experimental)",
    "obs": false,
    "exp": true,
    "global": true,
    "attrs": [
      "name",
      "disabled"
    ]
  },
  {
    "name": "selectmenu",
    "ns": "html",
    "desc": "Menú desplegable personalizable (experimental)",
    "obs": false,
    "exp": true,
    "global": true,
    "attrs": [
      "name",
      "disabled"
    ]
  },
  {
    "name": "semantics",
    "ns": "mathml",
    "desc": "Semántica matemática (MathML)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "shadow",
    "ns": "html",
    "desc": "Shadow DOM (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "slot",
    "ns": "html",
    "desc": "Punto de inserción Web Components",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "name"
    ]
  },
  {
    "name": "small",
    "ns": "html",
    "desc": "Texto pequeño",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "source",
    "ns": "html",
    "desc": "Fuente multimedia",
    "obs": false,
    "exp": false,
    "global": false,
    "attrs": [
      "src",
      "type",
      "srcset",
      "media",
      "sizes"
    ]
  },
  {
    "name": "spacer",
    "ns": "html",
    "desc": "Espaciador (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": [
      "type",
      "size"
    ]
  },
  {
    "name": "span",
    "ns": "html",
    "desc": "Contenedor en línea",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "strike",
    "ns": "html",
    "desc": "Tachado (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "strong",
    "ns": "html",
    "desc": "Importancia fuerte",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "style",
    "ns": "svg",
    "desc": "Estilo (SVG)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "type"
    ]
  },
  {
    "name": "style",
    "ns": "html",
    "desc": "CSS interno",
    "obs": false,
    "exp": false,
    "global": false,
    "attrs": [
      "type",
      "media"
    ]
  },
  {
    "name": "sub",
    "ns": "html",
    "desc": "Subíndice",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "summary",
    "ns": "html",
    "desc": "Título de details",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "sup",
    "ns": "html",
    "desc": "Superíndice",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "svg",
    "ns": "html",
    "desc": "Gráficos vectoriales",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "width",
      "height",
      "viewBox"
    ]
  },
  {
    "name": "table",
    "ns": "html",
    "desc": "Tabla",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "tbody",
    "ns": "html",
    "desc": "Cuerpo de tabla",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "td",
    "ns": "html",
    "desc": "Celda de datos",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "colspan",
      "rowspan",
      "headers"
    ]
  },
  {
    "name": "template",
    "ns": "html",
    "desc": "Plantilla (no renderizada)",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "textarea",
    "ns": "html",
    "desc": "Área de texto",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "name",
      "rows",
      "cols",
      "placeholder",
      "required",
      "maxlength",
      "minlength"
    ]
  },
  {
    "name": "tfoot",
    "ns": "html",
    "desc": "Pie de tabla",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "th",
    "ns": "html",
    "desc": "Celda de encabezado",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "scope",
      "colspan",
      "rowspan"
    ]
  },
  {
    "name": "thead",
    "ns": "html",
    "desc": "Encabezado de tabla",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "time",
    "ns": "html",
    "desc": "Fecha/hora",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "datetime"
    ]
  },
  {
    "name": "title",
    "ns": "html",
    "desc": "Título del documento",
    "obs": false,
    "exp": false,
    "global": false,
    "attrs": []
  },
  {
    "name": "tr",
    "ns": "html",
    "desc": "Fila de tabla",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "track",
    "ns": "html",
    "desc": "Subtítulos de video/audio",
    "obs": false,
    "exp": false,
    "global": false,
    "attrs": [
      "kind",
      "src",
      "srclang",
      "label",
      "default"
    ]
  },
  {
    "name": "tt",
    "ns": "html",
    "desc": "Teletipo (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "u",
    "ns": "html",
    "desc": "Subrayado sin semántica",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "ul",
    "ns": "html",
    "desc": "Lista desordenada",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "var",
    "ns": "html",
    "desc": "Variable",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "video",
    "ns": "html",
    "desc": "Reproductor de video",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": [
      "src",
      "poster",
      "controls",
      "autoplay",
      "loop",
      "muted",
      "playsinline"
    ]
  },
  {
    "name": "vkern",
    "ns": "svg",
    "desc": "Kerning vertical (SVG obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "wbr",
    "ns": "html",
    "desc": "Oportunidad de salto de línea",
    "obs": false,
    "exp": false,
    "global": true,
    "attrs": []
  },
  {
    "name": "xmp",
    "ns": "html",
    "desc": "Ejemplo (obsoleta)",
    "obs": true,
    "exp": false,
    "global": true,
    "attrs": []
  }
];