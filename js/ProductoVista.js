
function navegarPaginaDetalle(id){
    window.location.href = window.location.origin + '/pages/Detalle.html?id=' + id;
}

document.addEventListener('DOMContentLoaded', () => {
    const productos = JSON.parse(localStorage.getItem("inventarioKey")) || [];
    const container = document.getElementById('product-container');

    productos.forEach(producto => {
        const card = document.createElement('div');

        card.className = 'card col-12 col-lg-3 col-md-6 '; 
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top pt-2">
            <div class="card-body ">
                <h5 class="card-title text-light py-2">${producto.nombre}</h5>
            </div>
            <div class="card-footer text-light">
                <div class="d-flex justify-content-around">
                    <button
                        class="detail-button" 
                        onclick="navegarPaginaDetalle('${producto.id}')">Ver Detalle</button>
                    <p class="card-text text-light">Precio: <button class="price-button text-black">${producto.precio}</button></p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
});

