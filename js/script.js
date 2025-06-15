/* ========================================
   JAVASCRIPT PRINCIPAL - VERSIÓN SIMPLIFICADA
   Solo funcionalidad esencial para el sitio de links
   ======================================== */

// ========================================
// CONFIGURACIÓN E INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Aplicar configuración desde CONFIG.js
    if (window.applyConfig) {
        window.applyConfig();
    }

    // Inicializar AOS (animaciones)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: false,
            offset: 50
        });
    }

    // Detectar si es móvil
    if (isMobileDevice()) {
        document.body.classList.add('mobile-device');
    }

    // Manejar carga de fuentes
    if ('fonts' in document) {
        document.fonts.ready.then(() => {
            document.body.classList.add('fonts-loaded');
        });
    } else {
        setTimeout(() => {
            document.body.classList.add('fonts-loaded');
        }, 500);
    }

    // Inicializar funcionalidades
    initButtons();
    initTheme();
    handleImageErrors();
});

// ========================================
// FUNCIONES AUXILIARES
// ========================================
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
           || window.innerWidth <= 768;
}



// ========================================
// MANEJO DE BOTONES
// ========================================
function initButtons() {
    // Configurar atributos de accesibilidad para botones deshabilitados
    document.querySelectorAll('.nav-button-disabled').forEach(button => {
        button.setAttribute('tabindex', '-1');
        button.setAttribute('aria-disabled', 'true');
    });

    // Efecto de click en botones activos
    document.querySelectorAll('.nav-button:not(.nav-button-disabled)').forEach(button => {
        button.addEventListener('click', function(e) {
            // Pequeño efecto visual
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// ========================================
// SISTEMA DE TEMAS (OPCIONAL)
// ========================================
function initTheme() {
    // Si no quieres el sistema de temas, comenta esta función
    createThemeToggle();
}

function createThemeToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.setAttribute('aria-label', 'Cambiar tema');
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    
    // Agregar estilos si no existen
    if (!document.querySelector('#theme-toggle-styles')) {
        const styles = `
            .theme-toggle {
                position: fixed;
                top: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: var(--color-white);
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.3s ease;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .theme-toggle:hover {
                transform: scale(1.1);
                background: rgba(255, 255, 255, 0.2);
            }
            
            body.light-theme {
                background-color: #f0f4f8; /* Gris azulado muy claro */
            }
            
            body.light-theme .profile-card {
                background-color: #ffffff;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            }
            
            body.light-theme .glassmorphism {
                background: rgba(255, 255, 255, 0.95);
                border: 1px solid rgba(0, 0, 0, 0.1);
                box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);
            }
            
            body.light-theme .artist-name,
            body.light-theme .artist-title {
                color: var(--color-gray-900);
                text-shadow: none;
            }
            
            body.light-theme .artist-description {
                background-color: #475569;
                color: #ffffff;
                font-weight: 500;
            }
            
            /* TODOS los botones en tema claro deben ser visibles */
            body.light-theme .nav-button-secondary {
                background: #64748B;
                color: white;
                border: 2px solid #475569;
                font-weight: 500;
            }
            
            body.light-theme .nav-button-secondary:hover:not(.nav-button-disabled) {
                background: #2d3748;
                border-color: #1a202c;
                transform: translateY(-2px);
            }
            
            /* Botones deshabilitados - MUY VISIBLES */
            body.light-theme .nav-button-disabled {
                background: #94A3B8 !important;
                color: #ffffff !important;
                border: 2px solid #64748B !important;
                opacity: 1;
                font-weight: 500;
            }
            
            body.light-theme .nav-button-disabled:hover {
                background: #94A3B8 !important;
                transform: none !important;
                cursor: not-allowed;
            }
            
            /* Botón primario (LinkedIn) en tema claro */
            body.light-theme .nav-button-primary {
                background: linear-gradient(135deg, #0077B5 0%, #005885 100%);
                color: white;
                box-shadow: 0 4px 15px rgba(0, 119, 181, 0.3);
            }
            
            body.light-theme .nav-button-primary:hover {
                box-shadow: 0 8px 25px rgba(0, 119, 181, 0.4);
            }
            
            /* Botón accent (Email) en tema claro */
            body.light-theme .nav-button-accent {
                background: linear-gradient(135deg, #EA4335 0%, #C5221F 100%);
                color: white;
                box-shadow: 0 4px 15px rgba(234, 67, 53, 0.3);
            }
            
            body.light-theme .nav-button-accent:hover {
                box-shadow: 0 8px 25px rgba(234, 67, 53, 0.4);
            }
            
            /* GitHub en tema claro */
            body.light-theme .nav-button-secondary[href*="github"] {
                background: #24292e !important;
                color: white !important;
                border: none !important;
            }
            
            body.light-theme .nav-button-secondary[href*="github"]:hover {
                background: #1a1e22 !important;
            }
            
            /* LeetCode en tema claro */
            body.light-theme .nav-button-secondary[href*="leetcode"] {
                background: #FFA116 !important;
                color: #1a1a1a !important;
                border: 2px solid #FF8C00 !important;
                font-weight: 600;
            }
            
            body.light-theme .nav-button-secondary[href*="leetcode"]:hover {
                background: #FFB84D !important;
            }
            
            /* TikTok deshabilitado en tema claro */
            body.light-theme .nav-button-disabled .fa-tiktok {
                color: #ffffff;
            }
            
            /* Portfolio deshabilitado en tema claro */
            body.light-theme .nav-button-disabled .fa-briefcase {
                color: #ffffff;
            }
            
            /* Newsletter deshabilitado en tema claro */
            body.light-theme .nav-button-disabled .fa-newspaper {
                color: #ffffff;
            }
            
            body.light-theme .theme-toggle {
                background: rgba(0, 0, 0, 0.1);
                color: var(--color-gray-800);
                border-color: rgba(0, 0, 0, 0.2);
            }
            
            body.light-theme .theme-toggle:hover {
                background: rgba(0, 0, 0, 0.2);
            }
            
            body.light-theme .footer-content {
                color: var(--color-gray-600);
            }
            
            body.light-theme .copyright-text {
                color: #4a5568;
            }
            
            /* Imagen de perfil en tema claro */
            body.light-theme .profile-image {
                background-color: #e2e8f0;
                border: 3px solid #4a5568;
            }
            
            body.light-theme .divider {
                background: linear-gradient(
                    to right,
                    transparent 0%,
                    rgba(0, 0, 0, 0.1) 10%,
                    rgba(0, 0, 0, 0.2) 30%,
                    rgba(108, 99, 255, 0.3) 50%,
                    rgba(0, 0, 0, 0.2) 70%,
                    rgba(0, 0, 0, 0.1) 90%,
                    transparent 100%
                );
            }
            
            body.light-theme .divider::before {
                background: linear-gradient(
                    to right,
                    transparent 0%,
                    rgba(0, 0, 0, 0.3) 30%,
                    rgba(0, 0, 0, 0.5) 50%,
                    rgba(0, 0, 0, 0.3) 70%,
                    transparent 100%
                );
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            }
            
            body.light-theme .divider::after {
                background: rgba(108, 99, 255, 0.8);
                box-shadow: 0 0 8px rgba(108, 99, 255, 0.5);
            }
            
            body.light-theme .divider-top {
                background: linear-gradient(
                    to right,
                    transparent 0%,
                    rgba(108, 99, 255, 0.2) 15%,
                    rgba(108, 99, 255, 0.4) 35%,
                    rgba(0, 0, 0, 0.5) 50%,
                    rgba(108, 99, 255, 0.4) 65%,
                    rgba(108, 99, 255, 0.2) 85%,
                    transparent 100%
                );
            }
            
            body.light-theme .divider-top::before {
                background: linear-gradient(
                    to right,
                    transparent,
                    rgba(0, 0, 0, 0.6) 50%,
                    transparent
                );
            }
            
            body.light-theme .divider-top::after {
                background: rgba(108, 99, 255, 0.9);
                box-shadow: 
                    0 0 10px rgba(108, 99, 255, 0.6),
                    0 0 20px rgba(108, 99, 255, 0.3);
            }

            
            @media (max-width: 640px) {
                .theme-toggle {
                    width: 40px;
                    height: 40px;
                    font-size: 1rem;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.id = 'theme-toggle-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(toggle);
    
    // Toggle theme
    toggle.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-theme');
        toggle.querySelector('i').className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        
        // Guardar preferencia si localStorage está disponible
        try {
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        } catch (e) {
            // Ignorar si localStorage no está disponible
        }
    });
    
    // Cargar tema guardado
    try {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            toggle.querySelector('i').className = 'fas fa-sun';
        }
    } catch (e) {
        // Ignorar si localStorage no está disponible
    }
}

// ========================================
// MANEJO DE ERRORES DE IMAGEN
// ========================================
function handleImageErrors() {
    const profileImg = document.querySelector('.profile-image img');
    if (profileImg) {
        profileImg.onerror = function() {
            const initials = (window.CONFIG?.personal?.firma) || 'HM';
            this.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Crect width='180' height='180' fill='%236C63FF'/%3E%3Ctext x='90' y='90' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='60'%3E${initials}%3C/text%3E%3C/svg%3E`;
            this.onerror = null;
        };
    }
}