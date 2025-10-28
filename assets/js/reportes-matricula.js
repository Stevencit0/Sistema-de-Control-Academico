// Función para filtrar reportes de matrícula por fecha
document.querySelector('#filtrar-matricula').addEventListener('click', () => {
    const fechaInicio = document.querySelector('#fecha-inicio').value;
    const fechaFin = document.querySelector('#fecha-fin').value;

    if (fechaInicio && fechaFin) {
        alert(`Filtrando matrículas desde ${fechaInicio} hasta ${fechaFin}.`);
        // Aquí puedes agregar la lógica para filtrar las matrículas en base a las fechas
    } else {
        alert('Por favor, selecciona ambas fechas.');
    }
});

// Función para generar reporte de matrícula
document.querySelector('#generar-reporte').addEventListener('click', () => {
    alert('Generando reporte de matrícula...');
    // Lógica para generar el reporte (enviar a backend, generar PDF, etc.)
});

