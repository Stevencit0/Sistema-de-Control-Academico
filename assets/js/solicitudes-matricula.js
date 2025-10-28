// Función para aprobar matrícula
document.querySelectorAll('.aprobar-matricula').forEach(item => {
    item.addEventListener('click', () => {
        alert('Matrícula aprobada.');
        // Aquí puedes agregar la lógica para aprobar la matrícula en la base de datos
    });
});

// Función para rechazar matrícula
document.querySelectorAll('.rechazar-matricula').forEach(item => {
    item.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres rechazar esta matrícula?')) {
            alert('Matrícula rechazada.');
            // Aquí puedes agregar la lógica para rechazar la matrícula
        }
    });
});
