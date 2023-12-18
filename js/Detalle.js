
const parametroURL = new URLSearchParams(window.location.search);

let inventario = JSON.parse(localStorage.getItem("inventarioKey")) || [];

const productoBuscado = inventario.find(producto => producto.id === parametroURL.get('id'));


/* render detalle paquete */
let labelNombre = document.getElementById('producto-nombre');
let labelPrecio = document.getElementById('producto-precio');
let labelCategoria = document.getElementById('producto-categoria');
let labelDescripcion = document.getElementById('producto-descripcion');
let labelCodigo = document.getElementById('producto-id');
let labelImagen = document.getElementById('producto-imagen');
let labelStock = document.getElementById('producto-stock');


labelCategoria.innerHTML = productoBuscado.categoria;
labelNombre.innerHTML = productoBuscado.nombre;
labelDescripcion.innerHTML = productoBuscado.descripcion;
labelCodigo.innerHTML = productoBuscado.id;
labelPrecio.innerHTML = `${productoBuscado.precio} $`;
labelStock.innerHTML = productoBuscado.stock;
labelImagen.src = productoBuscado.imagen;


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