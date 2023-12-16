let formularioBusqueda = document.getElementById('formularioDeBusqueda');
let resultadoRenglonBusqueda = document.getElementById('renglonBusqueda');
let mensaje = document.getElementById("sincoincidencias");
let search = document.getElementById("renglonBusqueda");

formularioBusqueda.addEventListener('submit', (e) => {
  e.preventDefault();
});

const productosTotales = document.querySelectorAll(".card");

document.addEventListener('keyup', (e) => {
  if (e.key === "Escape") {
    e.target.value = "";
  } 
  if (e.target.matches('#renglonBusqueda')) {
    const searchTerm = e.target.value.toLowerCase();

    const productosFiltrados = Array.from(productosTotales).filter(producto => {
      const textoProducto = producto.children[1].children[0].innerHTML.toLowerCase();
      return textoProducto.includes(searchTerm);
    });

    productosTotales.forEach(producto => {
      const coincide = productosFiltrados.includes(producto);
      if (coincide) {
        producto.style.display = "col-12";
        producto.classList.remove('ocultarProducto');
      } else {
        producto.style.display = 'none';
        producto.classList.add('ocultarProducto');
      }
    });

     const productosOcultos = document.querySelectorAll('.ocultarProducto');
    if (productosOcultos.length >= productosTotales.length) {
      mensaje.className = "fs-1 text-center text-light my-5";
    } else {
      mensaje.className = "fs-2 d-none";
    }
  }
});