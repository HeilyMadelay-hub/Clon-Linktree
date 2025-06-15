// ========================================
// FIX SIMPLE Y EFECTIVO PARA BOTONES DESHABILITADOS
// Este archivo soluciona el problema de expansión de botones
// ========================================

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // OBTENER ELEMENTOS DEL DOM
    // ========================================
    
    // Selecciona todos los botones deshabilitados
    const disabledButtons = document.querySelectorAll('.nav-button-disabled');
    
    // Elementos del modal
    const customModal = document.getElementById('customModal');
    const modalMessage = document.getElementById('modalMessage');
    const modalTitle = document.getElementById('modalTitle');
    const closeModalBtn = document.getElementById('closeModal');
    
    // ========================================
    // CREAR OVERLAYS PARA CAPTURAR CLICS
    // La solución clave: los botones no reciben clics directamente
    // ========================================
    
    disabledButtons.forEach(button => {
        // PASO 1: Prevenir CUALQUIER interacción directa con el botón
        button.style.pointerEvents = 'none';  // El botón NO recibe eventos del mouse
        
        // PASO 2: Crear un contenedor wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'disabled-button-wrapper';
        wrapper.style.height = '48px';  // Altura fija para uniformidad
        
        // PASO 3: Insertar el wrapper antes del botón
        button.parentNode.insertBefore(wrapper, button);
        
        // PASO 4: Mover el botón dentro del wrapper
        wrapper.appendChild(button);
        
        // PASO 5: Crear un overlay invisible encima del botón
        const overlay = document.createElement('div');
        overlay.className = 'disabled-button-overlay';
        wrapper.appendChild(overlay);
        
        // PASO 6: El overlay captura los clics, NO el botón
        overlay.addEventListener('click', function(e) {
            e.preventDefault();      // Previene comportamiento por defecto
            e.stopPropagation();    // Detiene la propagación del evento
            showModalFixed();       // Muestra el modal
        });
    });
    
    // ========================================
    // FUNCIÓN PARA MOSTRAR EL MODAL
    // ========================================
    function showModalFixed() {
        // Configura el título del modal
        modalTitle.textContent = "Coming Soon!";
        
        // Configura el contenido del modal con icono y mensaje
        modalMessage.innerHTML = `
            <i class="fas fa-hard-hat modal-icon"></i>
            <p>This section is not available yet. We're working on it!</p>
        `;
        
        // Muestra el modal
        customModal.style.display = "flex";
        
        // Usa requestAnimationFrame para asegurar que la animación funcione
        requestAnimationFrame(() => {
            customModal.classList.add('show');
        });
    }
    
    // ========================================
    // FUNCIÓN PARA CERRAR EL MODAL
    // ========================================
    function closeModalFixed() {
        // Quita la clase show para iniciar animación de salida
        customModal.classList.remove('show');
        
        // Espera a que termine la animación antes de ocultar
        setTimeout(() => {
            customModal.style.display = 'none';
        }, 300);  // 300ms = duración de la animación
    }
    
    // ========================================
    // EVENT LISTENERS PARA CERRAR EL MODAL
    // ========================================
    
    // Cerrar con el botón "Accept"
    if (closeModalBtn) {
        closeModalBtn.onclick = closeModalFixed;
    }
    
    // Cerrar al hacer clic fuera del modal (en el fondo oscuro)
    if (customModal) {
        customModal.onclick = function(e) {
            // Solo cierra si el clic fue en el fondo, no en el contenido
            if (e.target === customModal) {
                closeModalFixed();
            }
        };
    }
    
    // Cerrar con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && customModal.style.display === 'flex') {
            closeModalFixed();
        }
    });
});