
function navegarPaginaDetalle(id){
    window.location.href = window.location.origin + '/pages/Detalle.html?id=' + id;
}

document.addEventListener('DOMContentLoaded', () => {
    const productos = JSON.parse(localStorage.getItem("inventarioKey")) || [];
    const container = document.getElementById('product-container');

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card-principal-productos m-2 col-lg-3 col-md-5 col-12'; 
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top pt-2">
            <div class="card-body-prod ">
                <h5 class="card-title-prod text-light py-2">${producto.nombre}</h5>
            </div>
            <div class="card-footer-prod text-light">
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

