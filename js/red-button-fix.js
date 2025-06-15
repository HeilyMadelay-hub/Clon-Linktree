// ========================================
// FIX DEFINITIVO PARA EL BOTÓN ROJO
// Previene que el botón de email se expanda
// ========================================

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // OBTENER EL BOTÓN ROJO DE EMAIL
    // Usa un selector específico que busca enlaces con href que empiece con "mailto:"
    // ========================================
    const redButton = document.querySelector('.nav-button-accent[href^="mailto:"]');
    
    // Solo procede si encuentra el botón
    if (redButton) {
        // ========================================
        // FIJAR ESTILOS INLINE CON MÁXIMA PRIORIDAD
        // Los estilos inline tienen más prioridad que los CSS externos
        // ========================================
        redButton.style.cssText = `
            width: 100% !important;              /* Ancho fijo al 100% */
            max-width: 100% !important;          /* Previene que crezca más */
            height: 48px !important;             /* Altura fija uniforme */
            padding: 12px 24px !important;       /* Padding uniforme */
            box-sizing: border-box !important;   /* Incluye padding en el ancho total */
            overflow: hidden !important;         /* Oculta cualquier contenido que sobresalga */
            position: relative !important;       /* Para posicionar elementos hijos */
            display: flex !important;            /* Flexbox para alineación */
            align-items: center !important;      /* Centrado vertical */
            justify-content: center !important;  /* Centrado horizontal */
        `;
        
        // ========================================
        // PREVENIR CAMBIOS DE TAMAÑO EN EVENTOS
        // Fuerza el tamaño correcto en cada evento del mouse
        // ========================================
        
        // Cuando se presiona el botón del mouse
        redButton.addEventListener('mousedown', function(e) {
            this.style.width = '100%';
            this.style.height = '48px';
            this.style.padding = '12px 24px';
        });
        
        // Cuando se suelta el botón del mouse
        redButton.addEventListener('mouseup', function(e) {
            this.style.width = '100%';
            this.style.height = '48px';
            this.style.padding = '12px 24px';
        });
        
        // Cuando se hace clic
        redButton.addEventListener('click', function(e) {
            this.style.width = '100%';
            this.style.height = '48px';
            this.style.padding = '12px 24px';
        });
        
        // ========================================
        // MUTATION OBSERVER
        // Observa cambios en el atributo style y los revierte
        // Esta es la defensa más fuerte contra cambios no deseados
        // ========================================
        
        // Crea un observador que detecta cambios en el DOM
        const observer = new MutationObserver(function(mutations) {
            // Para cada cambio detectado
            mutations.forEach(function(mutation) {
                // Si el cambio fue en el atributo style
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    // Obtiene las dimensiones actuales
                    const currentWidth = redButton.style.width;
                    const currentHeight = redButton.style.height;
                    
                    // Si las dimensiones no son correctas, las corrige inmediatamente
                    if (currentWidth !== '100%' || currentHeight !== '48px') {
                        redButton.style.width = '100%';
                        redButton.style.height = '48px';
                        redButton.style.padding = '12px 24px';
                    }
                }
            });
        });
        
        // Configura el observador para vigilar cambios en el atributo style
        observer.observe(redButton, {
            attributes: true,               // Observa cambios en atributos
            attributeFilter: ['style']      // Solo observa el atributo style
        });
    }
});