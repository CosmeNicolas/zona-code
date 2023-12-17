//IMAGENES DE LOS PRODUCTOS
let images = Array.from(document.getElementsByClassName("imgCarousel"))

let mainPhoto = document.getElementById("mainPhoto")

function updateImage(event){
    let image = event.target

    mainPhoto.src = image.src
}

images.forEach(function(image){
    image.addEventListener("click",updateImage)
});

const parametroURL = new URLSearchParams(window.location.search);

let listaPaquetes = JSON.parse(localStorage.getItem("inventario")) || [];

const paqueteBuscado = inventario.find((producto) => producto.codigo === parametroURL.get('codigo'));

/* render detalle paquete */
let labelNombre = document.getElementById('producto-nombre');
let labelPrecio = document.getElementById('producto-precio');
let labelCategoria = document.getElementById('producto-categoria');
let labelDescripcion = document.getElementById('producto-descripcion');
let labelCodigo = document.getElementById('producto-codigo')


labelCategoria.innerHTML = paqueteBuscado.categoria;
labelNombre.innerHTML = paqueteBuscado.nombre;
labelDescripcion.innerHTML = paqueteBuscado.descripcion;
labelCodigo.innerHTML = paqueteBuscado.codigo;
labelPrecio.innerHTML = `${paqueteBuscado.precio} $`;


// BOTON DE CANTIDAD
var stockInicial = 85;

  function incrementarCantidad() {
    let inputCantidad = document.getElementById("inputCantidad");
    let cantidad = parseInt(inputCantidad.value, 10) || 0;
    inputCantidad.value = cantidad + 1;
    actualizarStockDisponible();
  }

  function decrementarCantidad() {
    let inputCantidad = document.getElementById("inputCantidad");
    let cantidad = parseInt(inputCantidad.value, 10) || 0;
    if (cantidad > 1) {
      inputCantidad.value = cantidad - 1;
      actualizarStockDisponible();
    }
  }

  function actualizarStockDisponible() {
    let inputCantidad = document.getElementById("inputCantidad");
    let stockDisponible = document.getElementById("stockDisponible");

    let cantidadSeleccionada = parseInt(inputCantidad.value, 10) || 0;
    let nuevoStock = stockInicial - cantidadSeleccionada;

    stockDisponible.textContent = "(" + nuevoStock + " Disponibles)";
  }