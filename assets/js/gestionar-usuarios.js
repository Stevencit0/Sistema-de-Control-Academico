// Función para crear un nuevo usuario
document.querySelector('#crear-usuario').addEventListener('click', () => {
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const rolUsuario = document.querySelector('#rol-usuario').value;

    if (nombreUsuario && rolUsuario) {
        alert(`Nuevo usuario "${nombreUsuario}" creado con el rol ${rolUsuario}.`);
        // Aquí puedes agregar lógica para crear un usuario en la base de datos
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Función para editar un usuario
document.querySelectorAll('.editar-usuario').forEach(item => {
    item.addEventListener('click', () => {
        alert('Usuario editado.');
    });
});

// Función para eliminar un usuario
document.querySelectorAll('.eliminar-usuario').forEach(item => {
    item.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
            alert('Usuario eliminado.');
        }
    });
});

