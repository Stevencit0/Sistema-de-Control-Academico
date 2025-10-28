// Función para actualizar el perfil del usuario
document.querySelector('#actualizar-perfil').addEventListener('click', () => {
    const nombre = document.querySelector('#nombre-perfil').value;
    const correo = document.querySelector('#correo-perfil').value;

    if (nombre && correo) {
        alert(`Perfil actualizado: ${nombre}, ${correo}`);
        // Aquí puedes agregar la lógica para actualizar el perfil del usuario
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Función para cambiar la contraseña
document.querySelector('#cambiar-contrasena').addEventListener('click', () => {
    const nuevaContrasena = document.querySelector('#nueva-contrasena').value;

    if (nuevaContrasena) {
        alert('Contraseña cambiada exitosamente.');
        // Aquí puedes agregar la lógica para cambiar la contraseña del usuario
    } else {
        alert('Por favor, ingresa una nueva contraseña.');
    }
});
