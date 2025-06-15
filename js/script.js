/* ========================================
   JAVASCRIPT PRINCIPAL - FUNCIONALIDAD DEL SITIO
   Archivo: script.js
   Autor: Heily Madelay
   Descripción: Maneja toda la interactividad con mejoras UX
   ======================================== */

// ========================================
// INICIALIZACIÓN DE AOS
// AOS = Animate On Scroll (Animaciones al hacer scroll)
// ========================================
AOS.init({
    duration: 800,              // Duración de animaciones en ms
    easing: 'ease-out-cubic',   // Tipo de suavizado
    once: false,                // Las animaciones se repiten
    offset: 50,                 // Distancia antes de activar
    delay: 0,                   // Sin retraso inicial
});

// ========================================
// REFERENCIAS A ELEMENTOS DEL DOM
// ========================================
const elements = {
    // Modal y sus partes
    customModal: document.getElementById("customModal"),
    modalMessage: document.getElementById("modalMessage"),
    modalTitle: document.getElementById("modalTitle"),
    closeModalBtn: document.getElementById("closeModal"),
    
    // Elementos principales
    profileCard: document.getElementById("profileCard"),
    profileImage: document.getElementById("profileImage"),
    
    // Botones
    navButtons: document.querySelectorAll(".nav-button"),
    disabledButtons: document.querySelectorAll(".nav-button-disabled")
};

// ========================================
// CONFIGURACIÓN
// ========================================
const config = {
    animationDuration: 300,
    messages: {
        comingSoon: {
            title: "Coming Soon!",
            icon: "fas fa-hard-hat",
            text: "This section is not available yet. We're working on it!"
        }
    }
};

// ========================================
// FUNCIONES DE UTILIDAD
// ========================================

/**
 * Detecta si el dispositivo es móvil
 * @returns {boolean} true si es dispositivo móvil
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
           || window.innerWidth <= 768;
}

/**
 * Añade efecto ripple a los botones
 * NOTA: Desactivado para prevenir expansión
 * @param {Event} e - Evento de clic
 */
function createRipple(e) {
    // DESACTIVADO - Los ripples causan expansión
    return;
}

/**
 * Formatea el mensaje del modal
 * @param {Object} messageConfig - Configuración del mensaje
 * @returns {string} HTML del mensaje
 */
function formatModalMessage(messageConfig) {
    return `
        <i class="${messageConfig.icon} modal-icon"></i>
        <p>${messageConfig.text}</p>
    `;
}

// ========================================
// FUNCIONES DEL MODAL
// ========================================

/**
 * Muestra el modal con animación
 * @param {Object} messageConfig - Configuración del mensaje
 */
function showModal(messageConfig = config.messages.comingSoon) {
    elements.modalTitle.textContent = messageConfig.title;
    elements.modalMessage.innerHTML = formatModalMessage(messageConfig);
    
    elements.customModal.style.display = "flex";
    setTimeout(() => {
        elements.customModal.classList.add('show');
    }, 10);
}

/**
 * Cierra el modal con animación
 */
function closeModal() {
    elements.customModal.classList.remove('show');
    setTimeout(() => {
        elements.customModal.style.display = "none";
    }, config.animationDuration);
}

// ========================================
// EVENT LISTENERS - MODAL
// ========================================

// Clic en el botón de cerrar
elements.closeModalBtn.addEventListener("click", closeModal);

// Clic fuera del modal
elements.customModal.addEventListener("click", function(e) {
    if (e.target === elements.customModal) {
        closeModal();
    }
});

// Cerrar modal con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (elements.customModal.style.display === 'flex') {
            closeModal();
        }
    }
});

// ========================================
// FUNCIONALIDAD DE BOTONES
// ========================================

// Añadir efecto ripple solo a botones activos
elements.navButtons.forEach(button => {
    if (!button.classList.contains('nav-button-disabled')) {
        button.addEventListener('click', createRipple);
    }
});

// ========================================
// MEJORAS DE RENDIMIENTO Y UX
// ========================================

/**
 * Carga diferida de imágenes
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

/**
 * Precarga recursos críticos
 */
function preloadResources() {
    const criticalResources = [
        { href: 'css/styles.css', as: 'style' },
        { href: 'img/imgfotoperfil.jpeg', as: 'image' }
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        document.head.appendChild(link);
    });
}

/**
 * Maneja el estado online/offline
 */
function handleConnectivity() {
    const updateOnlineStatus = () => {
        if (!navigator.onLine) {
            showModal({
                title: "No connection",
                icon: "fas fa-wifi",
                text: "It seems you don't have an Internet connection"
            });
        }
    };
    
    window.addEventListener('online', closeModal);
    window.addEventListener('offline', updateOnlineStatus);
}

// ========================================
// ANIMACIONES AVANZADAS
// ========================================

/**
 * Añade animación parallax al fondo
 */
function initParallax() {
    if (!isMobileDevice()) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.background');
            const speed = 0.5;
            
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    }
}

/**
 * Animación de entrada para elementos
 */
function animateOnLoad() {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 50}ms`;
    });
}

// ========================================
// INICIALIZACIÓN
// ========================================

/**
 * Inicializa todas las funcionalidades
 */
function init() {
    // Configuración inicial
    if (isMobileDevice()) {
        document.body.classList.add('mobile-device');
    }
    
    // Detecta cuando las fuentes están cargadas
    if ('fonts' in document) {
        document.fonts.ready.then(() => {
            document.body.classList.add('fonts-loaded');
            document.body.style.opacity = '1';
        });
    } else {
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 500);
    }
    
    // Easter Egg - Código Konami
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.classList.add('konami-activated');
                showModal({
                    title: "🎮 Easter Egg!",
                    icon: "fas fa-gamepad",
                    text: "You found the secret code! You're awesome! 🎉"
                });
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // Inicializa funcionalidades
    lazyLoadImages();
    preloadResources();
    handleConnectivity();
    initParallax();
    animateOnLoad();
    
    // Maneja errores de carga de imagen
    const profileImg = elements.profileImage.querySelector("img");
    if (profileImg) {
        profileImg.onerror = function() {
            // SVG como placeholder si la imagen falla
            this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Crect width='180' height='180' fill='%236C63FF'/%3E%3Ctext x='90' y='90' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='60'%3EHM%3C/text%3E%3C/svg%3E";
            this.onerror = null;
        };
    }
    
    console.log('✨ MyLinktree successfully initialized');
}

// ========================================
// EJECUTAR CUANDO EL DOM ESTÉ LISTO
// ========================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ========================================
// EXPORTAR FUNCIONES PARA TESTING
// ========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showModal,
        closeModal,
        isMobileDevice,
        createRipple
    };
}