// Lógica de login y redirección

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Evitar el envío tradicional del formulario
    
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    
    // Usuario y contraseña predeterminados (puedes cambiarlos o conectarlos a un backend)
    const usuarioValido = 'admin';
    const contraseñaValida = 'password';  // Solo un ejemplo para demostración
    
    // Validación de las credenciales
    if (usuario === usuarioValido && contraseña === contraseñaValida) {
        // Si las credenciales son correctas, redirige a la página principal (admin-dashboard.html)
        window.location.href = 'admin-dashboard.html';
    } else {
        // Si las credenciales son incorrectas, muestra el mensaje de error
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
});
