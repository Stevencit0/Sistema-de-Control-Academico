// Función para abrir y cerrar el menú lateral con el botón de hamburguesa
document.querySelector('.btn-hamburguesa').addEventListener('click', () => {
    document.querySelector('.main-container').classList.toggle('show-sidebar');
});

// Resaltar el enlace activo en el menú lateral
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.menu-item').forEach(link => link.classList.remove('active'));
        item.classList.add('active');
    });
});
