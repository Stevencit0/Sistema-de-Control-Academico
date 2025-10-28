// Validación del formulario de login
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío tradicional del formulario

    const usuario = document.querySelector('#usuario').value;
    const contraseña = document.querySelector('#contraseña').value;

    if (usuario && contraseña) {
        alert(`Bienvenido, ${usuario}!`);
        // Aquí puedes agregar la lógica para enviar los datos al servidor para autenticación
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

