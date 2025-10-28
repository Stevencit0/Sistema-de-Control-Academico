// Función para agregar un nuevo curso
document.querySelector('#agregar-curso').addEventListener('click', () => {
    const nombreCurso = document.querySelector('#nombre-curso').value;
    const descripcionCurso = document.querySelector('#descripcion-curso').value;

    if (nombreCurso && descripcionCurso) {
        alert(`Nuevo curso "${nombreCurso}" agregado con éxito.`);
        // Aquí podrías agregar la lógica para enviar los datos a un servidor
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Función para editar un curso
document.querySelectorAll('.editar-curso').forEach(item => {
    item.addEventListener('click', () => {
        alert('Curso editado.');
    });
});

// Función para eliminar un curso
document.querySelectorAll('.eliminar-curso').forEach(item => {
    item.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres eliminar este curso?')) {
            alert('Curso eliminado.');
        }
    });
});
