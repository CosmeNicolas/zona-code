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