
// Modificar el código JavaScript para la página de Lista de Deseos
document.addEventListener('DOMContentLoaded', () => {
    const listaDeseos = JSON.parse(localStorage.getItem("listaDeseos")) || [];
    const container = document.getElementById('wishlist-container');

    listaDeseos.forEach(producto => {
        const card = document.createElement('div');
        // Construir la tarjeta de producto en la lista de deseos (puedes reutilizar parte del código de la página principal)
        card.className = 'card-principal-productos m-2 col-lg-3 col-md-5 col-12'; 
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top pt-2">
            <div class="card-body-prod ">
                <h5 class="card-title-prod text-light py-2">${producto.nombre}</h5>
            </div>
            <div class="card-footer-prod text-light">
                <div class="d-flex justify-content-around">
        
                        <button class="wishlist-button" onclick="agregarListaDeseos('${producto.id}')">Quitar de lista de deseados</button>
                    <p class="card-text text-light">Precio: <button class="price-button text-black">${producto.precio}</button></p>
                </div>

            </div>
        `;
        container.appendChild(card);
    });
});
