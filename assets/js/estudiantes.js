// Mostrar alerta cuando se edita o elimina un estudiante
document.querySelectorAll('.editar-estudiante').forEach(item => {
    item.addEventListener('click', () => {
        alert('Has editado el estudiante.');
    });
});

document.querySelectorAll('.eliminar-estudiante').forEach(item => {
    item.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres eliminar este estudiante?')) {
            alert('Estudiante eliminado.');
        }
    });
});
