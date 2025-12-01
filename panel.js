// Navegación desde bienvenida a selección de roles
function irASeleccionRol() {
    window.location.href = 'roles.html';
}

// Navegación desde roles a login específico
function irALogin(rol) {
    if (rol === 'admin') {
        window.location.href = 'login_admin.html';
    } else if (rol === 'docente') {
        window.location.href = 'login_docente.html';
    } else if (rol === 'estudiante') {
        window.location.href = 'login_estudiante.html';
    }
}

// Cerrar sesión
function cerrarSesion() {
    sessionStorage.clear();
    window.location.href = 'bienvenida.html';
}

// Navegación en el panel
function navegarA(pagina) {
    const userRole = sessionStorage.getItem('userRole');
    
    // Actualizar estado activo del menú
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.sidebar-item').classList.add('active');
    
    // Aquí puedes agregar lógica para cargar contenido dinámicamente
    // o redirigir a páginas específicas
    console.log(`Navegando a: ${pagina}`);
}

// Verificar autenticación al cargar páginas del panel
function verificarAutenticacion() {
    const userRole = sessionStorage.getItem('userRole');
    const currentPage = window.location.pathname;
    
    // Si estamos en una página de panel y no hay sesión, redirigir a inicio
    if (currentPage.includes('panel_') && !userRole) {
        window.location.href = 'bienvenida.html';
    }
}

// Ejecutar verificación al cargar la página
document.addEventListener('DOMContentLoaded', verificarAutenticacion);

// Datos simulados para el sistema
let estudiantesData = [];
let docentesData = [];
let cursosData = [];
let matriculasData = [];
let rolesData = [];

// Funciones para gestión de estudiantes
function mostrarFormularioEstudiante() {
    // Mostrar el formulario de crear estudiante
    const formulario = document.getElementById('formularioEstudiante');
    if (formulario) {
        formulario.style.display = 'block';
    }
}

function guardarEstudiante() {
    const nombres = document.getElementById('nombresEstudiante').value;
    const apellidos = document.getElementById('apellidosEstudiante').value;
    const dni = document.getElementById('dniEstudiante').value;
    const email = document.getElementById('emailEstudiante').value;
    const telefono = document.getElementById('telefonoEstudiante').value;
    const direccion = document.getElementById('direccionEstudiante').value;
    const grado = document.getElementById('gradoEstudiante').value;
    const seccion = document.getElementById('seccionEstudiante').value;
    const nombrePadre = document.getElementById('nombrePadre').value;
    const telefonoPadre = document.getElementById('telefonoPadre').value;
    const usuario = document.getElementById('usuarioEstudiante').value;
    const contrasena = document.getElementById('contrasenaEstudiante').value;
    
    if (!nombres || !apellidos || !dni || !email || !grado) {
        alert('Por favor complete los campos obligatorios');
        return;
    }
    
    const nuevoEstudiante = {
        id: Date.now(),
        nombres,
        apellidos,
        dni,
        email,
        telefono,
        direccion,
        grado,
        seccion,
        nombrePadre,
        telefonoPadre,
        usuario,
        contrasena
    };
    
    estudiantesData.push(nuevoEstudiante);
    alert('Estudiante guardado exitosamente');
    cancelarFormulario();
    cargarTablaEstudiantes();
}

function cargarTablaEstudiantes() {
    const tbody = document.querySelector('#tablaEstudiantes tbody');
    if (!tbody) return;
    
    if (estudiantesData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="empty-state">No hay estudiantes registrados</td></tr>';
        return;
    }
    
    tbody.innerHTML = '';
    estudiantesData.forEach(est => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${est.nombres}</td>
            <td>${est.apellidos}</td>
            <td>${est.dni}</td>
            <td>${est.email}</td>
            <td>${est.grado}</td>
            <td>${est.seccion}</td>
            <td>${est.usuario}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Funciones para gestión de docentes
function mostrarFormularioDocente() {
    const formulario = document.getElementById('formularioDocente');
    if (formulario) {
        formulario.style.display = 'block';
    }
}

function guardarDocente() {
    const nombres = document.getElementById('nombresDocente').value;
    const apellidos = document.getElementById('apellidosDocente').value;
    const dni = document.getElementById('dniDocente').value;
    const email = document.getElementById('emailDocente').value;
    const telefono = document.getElementById('telefonoDocente').value;
    const especialidad = document.getElementById('especialidadDocente').value;
    const usuario = document.getElementById('usuarioDocente').value;
    const contrasena = document.getElementById('contrasenaDocente').value;
    
    if (!nombres || !apellidos || !dni || !email) {
        alert('Por favor complete los campos obligatorios');
        return;
    }
    
    const nuevoDocente = {
        id: Date.now(),
        nombres,
        apellidos,
        dni,
        email,
        telefono,
        especialidad,
        usuario,
        contrasena
    };
    
    docentesData.push(nuevoDocente);
    alert('Docente guardado exitosamente');
    cancelarFormulario();
    cargarTablaDocentes();
}

function cargarTablaDocentes() {
    const tbody = document.querySelector('#tablaDocentes tbody');
    if (!tbody) return;
    
    if (docentesData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-state">No hay docentes registrados</td></tr>';
        return;
    }
    
    tbody.innerHTML = '';
    docentesData.forEach(doc => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${doc.nombres}</td>
            <td>${doc.apellidos}</td>
            <td>${doc.dni}</td>
            <td>${doc.email}</td>
            <td>${doc.especialidad}</td>
            <td>${doc.usuario}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Funciones para gestión de cursos
function mostrarFormularioCurso() {
    const formulario = document.getElementById('formularioCurso');
    if (formulario) {
        formulario.style.display = 'block';
    }
}

function guardarCurso() {
    const nombre = document.getElementById('nombreCurso').value;
    const codigo = document.getElementById('codigoCurso').value;
    const descripcion = document.getElementById('descripcionCurso').value;
    const grado = document.getElementById('gradoCurso').value;
    const horas = document.getElementById('horasCurso').value;
    const docente = document.getElementById('docenteCurso').value;
    
    if (!nombre || !codigo || !grado) {
        alert('Por favor complete los campos obligatorios');
        return;
    }
    
    const nuevoCurso = {
        id: Date.now(),
        nombre,
        codigo,
        descripcion,
        grado,
        horas,
        docente
    };
    
    cursosData.push(nuevoCurso);
    alert('Curso guardado exitosamente');
    cancelarFormulario();
    cargarTablaCursos();
}

function cargarTablaCursos() {
    const tbody = document.querySelector('#tablaCursos tbody');
    if (!tbody) return;
    
    if (cursosData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty-state">No hay cursos registrados</td></tr>';
        return;
    }
    
    tbody.innerHTML = '';
    cursosData.forEach(curso => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${curso.codigo}</td>
            <td>${curso.nombre}</td>
            <td>${curso.grado}</td>
            <td>${curso.horas}</td>
            <td>${curso.docente}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Funciones para gestión de matrículas
function mostrarFormularioMatricula() {
    const formulario = document.getElementById('formularioMatricula');
    if (formulario) {
        formulario.style.display = 'block';
    }
}

function guardarMatricula() {
    const codigo = document.getElementById('codigoMatricula').value;
    const estudiante = document.getElementById('estudianteMatricula').value;
    const dniEstudiante = document.getElementById('dniEstudianteMatricula').value;
    const grado = document.getElementById('gradoMatricula').value;
    const seccion = document.getElementById('seccionMatricula').value;
    const fecha = document.getElementById('fechaMatricula').value;
    const anio = document.getElementById('anioMatricula').value;
    const estado = document.getElementById('estadoMatricula').value;
    const nombreApoderado = document.getElementById('nombreApoderado').value;
    const telefonoApoderado = document.getElementById('telefonoApoderado').value;
    
    if (!codigo || !estudiante || !dniEstudiante || !grado || !fecha) {
        alert('Por favor complete los campos obligatorios');
        return;
    }
    
    const nuevaMatricula = {
        id: Date.now(),
        codigo,
        estudiante,
        dniEstudiante,
        grado,
        seccion,
        fecha,
        anio,
        estado,
        nombreApoderado,
        telefonoApoderado
    };
    
    matriculasData.push(nuevaMatricula);
    alert('Matrícula guardada exitosamente');
    cancelarFormulario();
}

// Funciones para gestión de roles
function mostrarFormularioRol() {
    const formulario = document.getElementById('formularioRol');
    if (formulario) {
        formulario.style.display = 'block';
    }
}

function guardarRol() {
    const nombre = document.getElementById('nombreRol').value;
    const descripcion = document.getElementById('descripcionRol').value;
    
    const permisos = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        permisos.push(checkbox.value);
    });
    
    if (!nombre) {
        alert('Por favor ingrese el nombre del rol');
        return;
    }
    
    const nuevoRol = {
        id: Date.now(),
        nombre,
        descripcion,
        permisos
    };
    
    rolesData.push(nuevoRol);
    alert('Rol guardado exitosamente');
    cancelarFormulario();
}

// Función para cancelar formularios
function cancelarFormulario() {
    const formularios = document.querySelectorAll('.form-modal');
    formularios.forEach(form => {
        form.style.display = 'none';
        const formElement = form.querySelector('form');
        if (formElement) formElement.reset();
    });
}

// Función de búsqueda
function buscar(termino, tipo) {
    console.log(`Buscando: ${termino} en ${tipo}`);
    // Implementar lógica de filtrado según el tipo de dato
}

// Función para generar reportes
function generarReporte(tipo, formato) {
    alert(`Generando reporte de ${tipo} en formato ${formato}`);
    // Implementar lógica de generación de reportes
}

// Inicializar al cargar el panel
document.addEventListener('DOMContentLoaded', function() {
    // Cargar username si existe
    const username = sessionStorage.getItem('username');
    if (username) {
        const usernameElements = document.querySelectorAll('.username-display');
        usernameElements.forEach(el => el.textContent = username);
    }
    
    // Marcar el primer item del menú como activo
    const primerItem = document.querySelector('.sidebar-item');
    if (primerItem) {
        primerItem.classList.add('active');
    }
});