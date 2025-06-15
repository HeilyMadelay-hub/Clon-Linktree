/* ========================================
   ARCHIVO DE CONFIGURACIÓN - PERSONALIZACIÓN
   Guía para adaptar este clon de Linktree
   ======================================== */

// ========================================
// CONFIGURACIÓN DE DATOS PERSONALES
// Cambia estos valores para personalizar
// ========================================

const CONFIG = {
    // ========================================
    // INFORMACIÓN PERSONAL
    // ========================================
    personal: {
        nombre: "Heily Madelay Tandazo",
        titulo: "Backend & AI Developer",
        emoji_titulo: "🔐",                      // Emoji junto al título
        tagline: "Creating secure and intelligent solutions for the digital world",
        descripcion: "Focused on Data Security & Intelligent Automation",
        emoji_descripcion: "🤖",                 // Emoji al final
        copyright_year: "2025",
        firma: "HM"                              // Iniciales para la firma
    },

    // ========================================
    // ENLACES Y REDES SOCIALES
    // ========================================
    enlaces: {
        // Enlaces activos
        linkedin: {
            url: "https://www.linkedin.com/in/heilymajtan/",
            texto: "Let's connect professionally",
            icono: "fab fa-linkedin",
            tipo: "primary"                      // primary, secondary, accent
        },
        
        github: {
            url: "https://github.com/HeilyMadelay-hub",
            texto: "Explore my code",
            icono: "fab fa-github",
            tipo: "secondary"
        },
        
        email: {
            url: "mailto:heilymadelayajtan@icloud.com",
            texto: "Start a conversation",
            icono: "fas fa-envelope",
            tipo: "accent"                       // Botón rojo
        },
        
        // Enlaces deshabilitados (próximamente)
        tiktok: {
            texto: "Follow my tech journey",
            icono: "fab fa-tiktok",
            deshabilitado: true
        },
        
        portfolio: {
            texto: "See my work",
            icono: "fas fa-briefcase",
            deshabilitado: true
        },
        
        newsletter: {
            texto: "View my newsletter",
            icono: "fas fa-newspaper",
            deshabilitado: true
        },
        
        leetcode: {
            texto: "View my LeetCode",
            icono: "fas fa-code",
            deshabilitado: true
        }
    },

    // ========================================
    // COLORES PERSONALIZADOS
    // ========================================
    colores: {
        // Colores principales
        primario: "#6C63FF",                     // Morado
        primario_oscuro: "#5547d9",
        
        acento: "#FF3B3B",                       // Rojo
        acento_oscuro: "#E02E2E",
        
        // Colores de fondo
        fondo_tarjeta: "rgba(255, 255, 255, 0.1)",
        fondo_overlay: "rgba(0, 0, 0, 0.3)",
        
        // Colores de texto
        texto_blanco: "#FFFFFF",
        texto_claro: "rgba(255, 255, 255, 0.85)"
    },

    // ========================================
    // CONFIGURACIÓN DE IMÁGENES
    // ========================================
    imagenes: {
        perfil: "img/imgfotoperfil.jpeg",
        fondo: "img/fondo.jpeg",
        favicon: "img/favicon.svg",
        
        // Placeholder si falla la imagen de perfil
        placeholder_svg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Crect width='180' height='180' fill='%236C63FF'/%3E%3Ctext x='90' y='90' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='60'%3EHM%3C/text%3E%3C/svg%3E"
    },

    // ========================================
    // CONFIGURACIÓN DE ANIMACIONES
    // ========================================
    animaciones: {
        duracion_aos: 800,                       // Duración de animaciones AOS
        delay_base: 50,                          // Delay entre elementos
        duracion_modal: 300,                     // Duración animación modal
        
        // Activar/desactivar efectos
        pulso_emoji: true,                       // Animación del emoji robot
        gradiente_animado: true,                 // Gradiente en botón primario
        shimmer_nombre: true,                    // Brillo en el nombre al hover
        parallax_fondo: true                     // Efecto parallax en el fondo
    },

    // ========================================
    // MENSAJES PERSONALIZADOS
    // ========================================
    mensajes: {
        coming_soon: {
            titulo: "Coming Soon!",
            icono: "fas fa-hard-hat",
            texto: "This section is not available yet. We're working on it!"
        },
        
        sin_conexion: {
            titulo: "No connection",
            icono: "fas fa-wifi",
            texto: "It seems you don't have an Internet connection"
        },
        
        easter_egg: {
            titulo: "🎮 Easter Egg!",
            icono: "fas fa-gamepad",
            texto: "You found the secret code! You're awesome! 🎉"
        }
    },

    // ========================================
    // SEO Y METADATOS
    // ========================================
    seo: {
        titulo: "Heily Madelay Tandazo | Backend & AI Developer",
        descripcion: "Backend & AI Developer specializing in data security and intelligent automation",
        keywords: "backend developer, AI developer, data security, automation, programming",
        url: "https://heilymadelay.com",
        
        // Open Graph para redes sociales
        og_imagen: "img/imgfotoperfil.jpeg",
        twitter_card: "summary_large_image"
    },

    // ========================================
    // CONFIGURACIÓN TÉCNICA
    // ========================================
    tecnico: {
        // Lazy loading de imágenes
        lazy_loading: true,
        
        // Service Worker para PWA
        service_worker: false,                   // Activar solo con HTTPS
        
        // Código Konami (easter egg)
        konami_habilitado: true,
        konami_codigo: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
        
        // Debugging
        mostrar_logs: false                      // Logs en consola
    }
};

// ========================================
// CÓMO USAR ESTA CONFIGURACIÓN
// ========================================

/*
1. CAMBIAR INFORMACIÓN PERSONAL:
   - Edita los valores en CONFIG.personal
   - Actualiza los emojis según tu preferencia
   
2. AGREGAR/MODIFICAR ENLACES:
   - Añade nuevos objetos en CONFIG.enlaces
   - Usa "deshabilitado: true" para botones "Coming Soon"
   - Tipos disponibles: primary, secondary, accent
   
3. PERSONALIZAR COLORES:
   - Modifica los valores hex en CONFIG.colores
   - Usa https://coolors.co para paletas de colores
   
4. CAMBIAR IMÁGENES:
   - Reemplaza los archivos en la carpeta img/
   - Mantén los mismos nombres o actualiza CONFIG.imagenes
   
5. AJUSTAR ANIMACIONES:
   - Modifica duraciones en CONFIG.animaciones
   - Desactiva efectos poniendo false
   
6. SEO Y METADATOS:
   - Actualiza CONFIG.seo con tu información
   - Importante para compartir en redes sociales
   
7. APLICAR CAMBIOS:
   - Este archivo es una GUÍA
   - Los cambios reales se hacen en:
     * index.html (estructura y textos)
     * css/styles.css (colores en :root)
     * js/script.js (comportamientos)
*/

// ========================================
// EJEMPLO DE IMPLEMENTACIÓN
// ========================================

/*
// En index.html, cambiarías:
<h1 class="artist-name">TU_NOMBRE</h1>
<h2 class="artist-title">
    <span class="emoji-icon">TU_EMOJI</span>
    TU_TITULO
</h2>

// En styles.css, cambiarías:
:root {
    --color-primary: TU_COLOR_PRIMARIO;
    --color-accent: TU_COLOR_ACENTO;
}

// Para agregar un nuevo botón:
<a href="TU_URL"
   class="nav-button nav-button-secondary"
   target="_blank"
   rel="noopener noreferrer">
    <i class="TU_ICONO"></i>
    <span>TU_TEXTO</span>
</a>
*/

// ========================================
// RECURSOS ÚTILES
// ========================================

/*
ICONOS:
- Font Awesome: https://fontawesome.com/icons
- Emojipedia: https://emojipedia.org

COLORES:
- Coolors: https://coolors.co
- Color Hunt: https://colorhunt.co

FUENTES:
- Google Fonts: https://fonts.google.com

OPTIMIZACIÓN DE IMÁGENES:
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app

GENERADOR DE FAVICON:
- Favicon.io: https://favicon.io

TESTING:
- GTmetrix: https://gtmetrix.com
- PageSpeed Insights: https://pagespeed.web.dev
*/