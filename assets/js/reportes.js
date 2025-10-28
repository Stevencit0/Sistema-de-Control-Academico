// Función para filtrar los reportes por fecha o curso
document.querySelector('#filtrar-reportes').addEventListener('click', () => {
    const fecha = document.querySelector('#fecha').value;
    const curso = document.querySelector('#curso').value;

    if (fecha && curso) {
        alert(`Filtrando reportes para el curso ${curso} en la fecha ${fecha}.`);
        // Aquí puedes agregar lógica para filtrar los datos en el backend
    } else {
        alert('Por favor, selecciona los filtros adecuados.');
    }
});

