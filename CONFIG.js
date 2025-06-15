/* ========================================
   ARCHIVO DE CONFIGURACIÓN FUNCIONAL
   Actualiza dinámicamente el contenido de la página
   ======================================== */
/**
 * Objeto de configuración principal para la aplicación Linktree Clone.
 *
 * Edita los valores de este objeto para personalizar tu página:
 * - Cambia los datos en la sección "personal" para actualizar tu nombre, título, descripción, etc.
 * - Modifica las rutas en "imagenes" para cambiar tu foto de perfil o favicon.
 * - Agrega, elimina o edita objetos en el array "enlaces" para mostrar tus redes sociales o enlaces favoritos.
 *   - Para activar un enlace, pon 'activo: true'. Para ocultarlo, usa 'activo: false'.
 *   - Puedes personalizar el color de cada botón usando la propiedad "estilos".
 * - Ajusta los colores principales en la sección "colores".
 * - Cambia los textos y metadatos SEO en la sección "seo".
 * - Configura animaciones en la sección "animaciones".
 *
 * @typedef {Object} CONFIG
 * @property {Object} personal - Información personal del usuario.
 * @property {string} personal.nombre - Nombre completo.
 * @property {string} personal.titulo - Título profesional.
 * @property {string} personal.descripcion - Descripción breve.
 * @property {string} personal.copyright_year - Año de copyright.
 * @property {string} personal.firma - Firma o iniciales.
 *
 * @property {Object} imagenes - Rutas de imágenes utilizadas.
 * @property {string} imagenes.perfil - Ruta de la imagen de perfil.
 * @property {string} imagenes.favicon - Ruta del favicon.
 *
 * @property {Array<Object>} enlaces - Lista de enlaces y redes sociales.
 * @property {string} enlaces[].id - Identificador único del enlace.
 * @property {string} [enlaces[].url] - URL del enlace (opcional).
 * @property {string} enlaces[].texto - Texto descriptivo del enlace.
 * @property {string} enlaces[].icono - Clase del icono (FontAwesome).
 * @property {string} enlaces[].tipo - Tipo de botón (primary, secondary, accent, etc.).
 *   // El valor de "tipo" determina el color del botón. Si quieres que un botón destaque visualmente sobre los demás, usa "accent".
 *   // Por ejemplo, puedes poner tipo: "accent" en el botón de portfolio para que resalte y llame más la atención del usuario.
 * @property {boolean} enlaces[].activo - Indica si el enlace está activo y visible.
 * @property {Object} [enlaces[].estilos] - Estilos personalizados para el botón (opcional).
 *
 * @property {Object} colores - Paleta de colores personalizada.
 * @property {string} colores.primario - Color primario.
 * @property {string} colores.primarioOscuro - Variante oscura del color primario.
 * @property {string} colores.acento - Color de acento.
 * @property {string} colores.acentoOscuro - Variante oscura del acento.
 * @property {string} colores.fondo - Color de fondo principal.
 * @property {string} colores.tarjeta - Color de fondo para tarjetas.
 *
 * @property {Object} seo - Configuración SEO y metadatos.
 * @property {string} seo.titulo - Título para SEO.
 * @property {string} seo.descripcion - Descripción para SEO.
 * @property {string} seo.keywords - Palabras clave para SEO.
 * @property {string} seo.url - URL principal del sitio.
 * @property {string} seo.imagen - Imagen para SEO.
 *
 * @property {Object} animaciones - Configuración técnica de animaciones.
 * @property {number} animaciones.duracionAOS - Duración de animaciones AOS en ms.
 * @property {boolean} animaciones.habilitarParallax - Habilita efecto parallax.
 * @property {boolean} animaciones.habilitarKonami - Habilita el código Konami.
 *
 * @example
 * // Para activar un botón (por ejemplo, el de portfolio), cambia 'activo' a true y puedes poner 'tipo: "accent"' si quieres que ese botón resalte visualmente.
 * // Usar "accent" hace que el botón use el color de acento definido en la configuración, ayudando a destacar enlaces importantes.
 * // {
 * //   id: "portfolio",
 * //   texto: "See my work",
 * //   icono: "fas fa-briefcase",
 * //   tipo: "accent", // Usa "accent" para destacar este botón sobre los demás
 * //   activo: true
 * // }
 */

const CONFIG = {
  // ========================================
  // INFORMACIÓN PERSONAL
  // ========================================
  personal: {
    nombre: "Heily Madelay Tandazo",
    titulo: "Backend & AI Developer",
    descripcion:
      "Turning complex problems into secure, intelligent solutions that scale.",
    copyright_year: "2025",
    firma: "HM",
  },

  // ========================================
  // RUTAS DE ARCHIVOS
  // ========================================
  imagenes: {
    perfil: "img/imgfotoperfil.jpeg",
    favicon: "img/favicon.svg",
  },

  // ========================================
  // ENLACES Y REDES SOCIALES
  // ========================================
  enlaces: [
    {
      id: "linkedin",
      url: "https://www.linkedin.com/in/heilymajtan/",
      texto: "Let's connect professionally",
      icono: "fab fa-linkedin",
      tipo: "primary",
      activo: true,
    },
    {
      id: "github",
      url: "https://github.com/HeilyMadelay-hub",
      texto: "Explore my code",
      icono: "fab fa-github",
      tipo: "secondary",
      estilos: {
        backgroundColor: "#333",
        color: "#fff",
      },
      activo: true,
    },
    {
      id: "tiktok",
      texto: "Follow my tech journey",
      icono: "fab fa-tiktok",
      tipo: "secondary",
      activo: false,
    },
    {
      id: "email",
      url: "mailto:heilymadelayajtan@icloud.com",
      texto: "Start a conversation",
      icono: "fas fa-envelope",
      tipo: "accent",
      activo: true,
    },
    {
      id: "portfolio",
      texto: "See my work",
      icono: "fas fa-briefcase",
      tipo: "secondary",
      activo: false,
    },
    {
      id: "newsletter",
      texto: "View my newsletter",
      icono: "fas fa-newspaper",
      tipo: "secondary",
      activo: false,
    },
    {
      id: "leetcode",
      url: "https://leetcode.com/u/heilymadelay-hub/",
      texto: "View my LeetCode account",
      icono: "fas fa-code",
      tipo: "secondary",
      estilos: {
        backgroundColor: "#FFD700",
        color: "#000",
        border: "2px solid #000",
      },
      activo: true,
    },
  ],

  // ========================================
  // COLORES PERSONALIZADOS
  // ========================================
  colores: {
    primario: "#6C63FF",
    primarioOscuro: "#5547d9",
    acento: "#FF3B3B",
    acentoOscuro: "#E02E2E",
    fondo: "#1a1f36",
    tarjeta: "#1f3b4d",
  },

  // ========================================
  // SEO Y METADATOS
  // ========================================
  seo: {
    titulo: "Heily Madelay Tandazo | Backend & AI Developer",
    descripcion:
      "Backend & AI Developer specializing in data security and intelligent automation",
    keywords:
      "backend developer, AI developer, data security, automation, programming",
    url: "https://heilymadelay.com",
    imagen: "img/imgfotoperfil.jpeg",
  },

  // ========================================
  // CONFIGURACIÓN TÉCNICA
  // ========================================
  animaciones: {
    duracionAOS: 800,
    habilitarParallax: true,
    habilitarKonami: true,
  },
};

// ========================================
// FUNCIÓN PARA APLICAR LA CONFIGURACIÓN
// ========================================
function applyConfig() {
  // Actualizar información personal
  const artistName = document.querySelector(".artist-name");
  if (artistName) artistName.textContent = CONFIG.personal.nombre;

  const artistTitle = document.querySelector(".artist-title .title-text");
  if (artistTitle) artistTitle.textContent = CONFIG.personal.titulo;

  const artistDescription = document.querySelector(".subtitle-tagline");
  if (artistDescription)
    artistDescription.innerHTML = CONFIG.personal.descripcion;

  // Actualizar copyright
  const copyright = document.querySelector(".copyright-text");
  if (copyright) {
    copyright.innerHTML = `© ${CONFIG.personal.copyright_year} All Rights Reserved - ${CONFIG.personal.nombre}<br>${CONFIG.personal.firma}`;
  }

  // Actualizar imagen de perfil
  const profileImg = document.querySelector(".profile-image img");
  if (profileImg) {
    profileImg.src = CONFIG.imagenes.perfil;
    profileImg.alt = CONFIG.personal.nombre + " - " + CONFIG.personal.titulo;
  }

  // Actualizar favicon
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) favicon.href = CONFIG.imagenes.favicon;

  // Actualizar metadatos SEO
  document.title = CONFIG.seo.titulo;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.content = CONFIG.seo.descripcion;

  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) metaKeywords.content = CONFIG.seo.keywords;

  // Actualizar colores CSS
  updateColors();

  // Generar botones dinámicamente
  generateButtons();
}

// ========================================
// FUNCIÓN PARA ACTUALIZAR COLORES
// ========================================
function updateColors() {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", CONFIG.colores.primario);
  root.style.setProperty("--color-primary-dark", CONFIG.colores.primarioOscuro);
  root.style.setProperty("--color-accent", CONFIG.colores.acento);
  root.style.setProperty("--color-accent-dark", CONFIG.colores.acentoOscuro);

  document.body.style.backgroundColor = CONFIG.colores.fondo;
}

// ========================================
// FUNCIÓN PARA GENERAR BOTONES
// ========================================
function generateButtons() {
  const navButtons = document.querySelector(".nav-buttons");
  if (!navButtons) return;

  // Limpiar botones existentes
  navButtons.innerHTML = "";

  // Generar cada botón según la configuración
  CONFIG.enlaces.forEach((enlace, index) => {
    if (enlace.activo) {
      // Botón activo
      const button = document.createElement("a");
      button.href = enlace.url;
      button.className = `nav-button nav-button-${enlace.tipo}`;
      button.target = "_blank";
      button.rel = "noopener noreferrer";
      button.setAttribute("data-aos", "fade-up");
      button.setAttribute("data-aos-delay", 400 + index * 50);
      button.setAttribute("aria-label", enlace.texto);

      // Aplicar estilos personalizados si existen
      if (enlace.estilos) {
        Object.assign(button.style, enlace.estilos);
      }

      button.innerHTML = `
                <i class="${enlace.icono}" aria-hidden="true"></i>
                <span>${enlace.texto}</span>
            `;

      navButtons.appendChild(button);
    } else {
      // Botón deshabilitado
      const button = document.createElement("button");
      button.className = `nav-button nav-button-secondary nav-button-disabled`;
      button.setAttribute("data-aos", "fade-up");
      button.setAttribute("data-aos-delay", 400 + index * 50);
      button.setAttribute("aria-label", enlace.texto + " - Coming soon");

      button.innerHTML = `
                <i class="${enlace.icono}" aria-hidden="true"></i>
                <span>${enlace.texto}</span>
            `;

      navButtons.appendChild(button);
    }
  });
}

// ========================================
// EXPORTAR CONFIGURACIÓN Y FUNCIONES
// ========================================
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CONFIG, applyConfig };
} else {
  window.CONFIG = CONFIG;
  window.applyConfig = applyConfig;
}
