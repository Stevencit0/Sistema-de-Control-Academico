// Credenciales de demostración
const credenciales = {
    admin: { usuario: 'admin', contrasena: 'admin123' },
    docente: { usuario: 'docente', contrasena: 'docente123' },
    estudiante: { usuario: 'estudiante', contrasena: 'estudiante123' }
};

// Login Administrativo
function loginAdmin(event) {
    event.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    
    if (usuario === credenciales.admin.usuario && contrasena === credenciales.admin.contrasena) {
        sessionStorage.setItem('userRole', 'admin');
        sessionStorage.setItem('username', usuario);
        window.location.href = 'panel_admin.html';
    } else {
        alert('Credenciales incorrectas. Por favor, intente nuevamente.');
    }
}

// Login Docente
function loginDocente(event) {
    event.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    
    if (usuario === credenciales.docente.usuario && contrasena === credenciales.docente.contrasena) {
        sessionStorage.setItem('userRole', 'docente');
        sessionStorage.setItem('username', usuario);
        window.location.href = 'panel_docente.html';
    } else {
        alert('Credenciales incorrectas. Por favor, intente nuevamente.');
    }
}

// Login Estudiante
function loginEstudiante(event) {
    event.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    
    if (usuario === credenciales.estudiante.usuario && contrasena === credenciales.estudiante.contrasena) {
        sessionStorage.setItem('userRole', 'estudiante');
        sessionStorage.setItem('username', usuario);
        window.location.href = 'panel_estudiante.html';
    } else {
        alert('Credenciales incorrectas. Por favor, intente nuevamente.');
    }
}