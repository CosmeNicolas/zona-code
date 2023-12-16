// En assets/js/productos.js
document.addEventListener('DOMContentLoaded', () => {
    const productos = JSON.parse(localStorage.getItem("inventarioKey")) || [];
    const container = document.getElementById('product-container');

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card m-2 col-lg-3 col-md-5 col-12 '; // Clases de Bootstrap aplicadas aquí
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top pt-2>
            <div class="card-body">
                <h5 class="card-title text-light py-2">${producto.nombre}</h5>
                <p class="card-text text-light">${producto.descripcion}</p>
               
            </div>
            <div class="card-footer text-light">
            <div class="d-flex justify-content-around">
            <button class="detail-button" onclick="verDetalle('${producto.id}')">Ver Detalle</button>
            <p class="card-text text-light">Precio: <button class="price-button text-black">${producto.precio}</button></p>
            </div>
         
            </div>
        `;

        container.appendChild(card);
    });
});

function verDetalle(idProducto) {
    alert('Detalles del producto con ID ' + idProducto);
}
