// Mostrar alerta cuando se edita o elimina un docente
document.querySelectorAll('.editar-docente').forEach(item => {
    item.addEventListener('click', () => {
        alert('Has editado el docente.');
    });
});

document.querySelectorAll('.eliminar-docente').forEach(item => {
    item.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres eliminar este docente?')) {
            alert('Docente eliminado.');
        }
    });
});
