
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
                <button class="remove-button detail-button" onclick="eliminarListaDeseos('${producto.id}')">Eliminar</button>
                    <p class="card-text text-light">Precio: <button class="price-button text-black">${producto.precio}</button></p>
                </div>

            </div>
        `;
        container.appendChild(card);
    });
});

function eliminarListaDeseos(id) {
    const listaDeseos = JSON.parse(localStorage.getItem("listaDeseos")) || [];
    const index = listaDeseos.findIndex(item => item.id === id);

    if (index !== -1) {
        listaDeseos.splice(index, 1);
        localStorage.setItem("listaDeseos", JSON.stringify(listaDeseos));

        Swal.fire({
            title: "Eliminado",
            text: "Lamentamos que tu producto ya no lo desees.",
            imageUrl: "../img/Quitar.jpeg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "PerroTriste"
          });
    }
}


