// Función para guardar cambios de configuración
document.querySelector('#guardar-configuracion').addEventListener('click', () => {
    alert('Configuración guardada con éxito.');
});

// Función para restaurar configuraciones predeterminadas
document.querySelector('#restaurar-configuracion').addEventListener('click', () => {
    if (confirm('¿Estás seguro de que quieres restaurar la configuración predeterminada?')) {
        alert('Configuración restaurada.');
    }
});

