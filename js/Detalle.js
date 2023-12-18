
const parametroURL = new URLSearchParams(window.location.search);

let inventario = JSON.parse(localStorage.getItem("inventarioKey")) || [];

const productoBuscado = inventario.find(producto => producto.id === parametroURL.get('id'));


let labelNombre = document.getElementById('producto-nombre');
let labelPrecio = document.getElementById('producto-precio');
let labelCategoria = document.getElementById('producto-categoria');
let labelDescripcion = document.getElementById('producto-descripcion');
let labelCodigo = document.getElementById('producto-id');
let labelImagen = document.getElementById('producto-imagen');
let labelStock = document.getElementById('producto-stock');



labelNombre.innerHTML = productoBuscado.nombre;
labelDescripcion.innerHTML = productoBuscado.descripcion;
labelCategoria.innerHTML = productoBuscado.categoria;
labelCodigo.innerHTML = productoBuscado.id;
labelPrecio.innerHTML = `$${productoBuscado.precio} `;
labelImagen.src = productoBuscado.imagen;
labelStock.innerHTML = productoBuscado.stock;

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
    let stockDisponible = document.getElementById("producto-stock");

    let cantidadSeleccionada = parseInt(inputCantidad.value, 10) || 0;
    let nuevoStock = productoBuscado.stock - cantidadSeleccionada;

    stockDisponible.textContent = "(" + nuevoStock + " Disponibles)";
  }