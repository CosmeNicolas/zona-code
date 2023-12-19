
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
                        <button class="wishlist-button detail-button m-2" 
                        onclick="agregarListaDeseos('${producto.id}')">Deseados</button>
                    <p class="card-text text-light">Precio: <button class="price-button text-black">${producto.precio}</button></p>
                </div>

            </div>
        `;

        container.appendChild(card);
    });
});

function agregarListaDeseos(id) {
    const productos = JSON.parse(localStorage.getItem("inventarioKey")) || [];
    const productoDeseado = productos.find(producto => producto.id === id);

    const listaDeseos = JSON.parse(localStorage.getItem("listaDeseos")) || [];
    if (!listaDeseos.some(item => item.id === id)) {
        listaDeseos.push(productoDeseado);
        localStorage.setItem("listaDeseos", JSON.stringify(listaDeseos));
        Swal.fire({
            title: "Agregado",
            text: "Agregado correctamente a la lista de deseados.",
            imageUrl: "../img/Agregado.jpeg",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "PerroFeliz"
          });
    } else {
        Swal.fire({
            title: "Upss",
            text: "El producto ya existe en la lista.",
            imageUrl: "../img/Upss.jpeg",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "PerroUpss"
          });
    }
}



