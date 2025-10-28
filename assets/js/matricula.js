// Función para manejar la solicitud de matrícula
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío tradicional del formulario

    const curso = document.querySelector('#curso').value;
    const nombre = document.querySelector('#nombre').value;

    if (curso && nombre) {
        alert(`Matrícula solicitada con éxito para el curso ${curso}.`);
        // Aquí puedes agregar lógica para enviar el formulario a un servidor o procesar los datos
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});
