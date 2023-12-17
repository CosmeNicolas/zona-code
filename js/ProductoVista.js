// En assets/js/productos.js
document.addEventListener('DOMContentLoaded', () => {
    const productos = JSON.parse(localStorage.getItem("inventarioKey")) || [];
    const container = document.getElementById('product-container');

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card-fondo col-lg-3 col-md-6 col-sm-12 articulo '; // Clases de Bootstrap aplicadas aquí
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title text-light">${producto.nombre}</h5>
                <p class="card-text text-light">${producto.descripcion}</p>
                <p class="card-text text-light">Precio: <button class="price-button text-black">${producto.precio}</button></p>
            </div>
            <div class="footer-card text-light">
                <button class="detail-button" onclick="verDetalle('${producto.id}')">Ver Detalle</button>
            </div>
        `;

        container.appendChild(card);
    });
});

function navegarPaginaDetalle(codigo){
    window.location.href = window.location.origin + '/pages/Detalle.html?codigo=' + codigo;
}

