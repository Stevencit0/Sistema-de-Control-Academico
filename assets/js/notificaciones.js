// Función para enviar una nueva notificación
document.querySelector('#enviar-notificacion').addEventListener('click', () => {
    const mensaje = document.querySelector('#mensaje-notificacion').value;

    if (mensaje) {
        alert(`Notificación enviada: "${mensaje}"`);
        // Aquí puedes agregar la lógica para enviar la notificación al sistema
    } else {
        alert('Por favor, ingresa un mensaje.');
    }
});

// Función para eliminar una notificación
document.querySelectorAll('.eliminar-notificacion').forEach(item => {
    item.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres eliminar esta notificación?')) {
            alert('Notificación eliminada.');
        }
    });
});

