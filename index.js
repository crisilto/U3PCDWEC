const imagenes = document.querySelectorAll('.imagen');

function cargarImagenAleatoria(img) {
    const randomId = Math.floor(Math.random() * 1000);
    const randomSize = Math.floor(Math.random() * 500) + 100; // entre 100 y 600 px
    img.src = `https://picsum.photos/id/${randomId}/${randomSize}/${randomSize}`;
}

imagenes.forEach(imagen => {
    cargarImagenAleatoria(imagen);
});

setInterval(() => {
    imagenes.forEach(imagen => {
        cargarImagenAleatoria(imagen);
    });
}, 5000); // Actualiza cada 5 segundos
