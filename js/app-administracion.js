import Producto from "./app-classProducto.js";


const modalAdminProducto = new bootstrap.Modal(
  document.getElementById("administrarProducto")
);
const btnAgregarProducto = document.getElementById("btnNuevoProducto");
const formularioProducto = document.getElementById("formluarioProducto");
const id = document.getElementById("id"),
  nombre = document.getElementById("nombre"),
  precio = document.getElementById("precio"),
  categoria = document.getElementById("categoria"),
  imagen = document.getElementById("imagen"),
  descripcion = document.getElementById("descripcion"),
  stock = document.getElementById("stock");
const inventario = JSON.parse(localStorage.getItem("inventarioKey")) || [];

/* console.log(inventario) */
const mostrarModal = () => {
  /*  limpiarFormulario(); */
  modalAdminProducto.show();
};

const crearProducto = (e) => {
  e.preventDefault();
  console.log("aqui debo crear el producto nuevo");

  const nuevoProducto = new Producto(
    undefined,
    nombre.value,
    precio.value,
    categoria.value,
    imagen.value,
    descripcion.value,
    stock.value
  );
  console.log(nuevoProducto);
  inventario.push(nuevoProducto);
  console.log(inventario);
  limpiarFormulario();
  guardarEnLocalstorage();
  crearFila(nuevoProducto, inventario.length);
  modalAdminProducto.hide();
  Swal.fire({
    title: "Prodcuto creado",
    text: `El Producto ${nuevoProducto.nombre} fue creado correctamente`,
    icon: "success",
  });
};

function limpiarFormulario() {
  formularioProducto.reset();
}

function guardarEnLocalstorage() {
  localStorage.setItem("inventarioKey", JSON.stringify(inventario));
}

function crearFila(producto, fila) {
  const tablaProductos = document.querySelector("tbody");
  tablaProductos.innerHTML += `<tr>
    <th scope="row">${fila}</th>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.categoria}</td>
    <td>${producto.imagen}</td>
    <td>${producto.descripcion}</td>
    <td>${producto.stock}</td>
    <td>
    <button class="btn btn-primary" onclick="verDetalleProducto('${producto.id}')">Detalle</button>
      <button class="btn btn-warning me-1" onclick="editarProducto('${producto.id}')">Editar
      </button>
      <button class="btn btn-danger" onclick="borrarProducto('${producto.id}')">Borrar</button>
    </td>
  </tr>`;
}


function cargaInicial() {
  if (inventario.length > 0) {
    inventario.map((itemProducto, posicion) =>
      crearFila(itemProducto, posicion + 1)
    );
  }
}

//EDITAR Producto - arreglo "inventario"
window.editarProducto = (idProducto) => {
  const posicionProductoEditar = inventario.findIndex((itemProducto) => itemProducto.id === idProducto)
  console.log(posicionProductoEditar)
  //mostrar los datos del producto a editar a traves del modal

  const mostrarDatosProductoAeditar = () => {
    const productoAeditar = inventario[posicionProductoEditar]
    console.log(productoAeditar)
    nombre.value = productoAeditar.nombre;
    precio.value = productoAeditar.precio;
    categoria.value = productoAeditar.categoria;
    imagen.value = productoAeditar.imagen;
    descripcion.value = productoAeditar.descripcion;
    stock.value = productoAeditar.stock;
  }
  mostrarDatosProductoAeditar()
  //cambiar el boton de agregar > Editar

  const cambiarBoton = () => {
    const botonEditar = document.getElementById('btnEditarContacto');
    botonEditar.innerText = "Editar";
    botonEditar.type = "button";
    botonEditar.removeEventListener("click", cambiarBoton)
    botonEditar.addEventListener("click", function (e) {
      e.preventDefault();
      const productoEditado = inventario[posicionProductoEditar];
      productoEditado.nombre = nombre.value;
      productoEditado.precio = precio.value;
      productoEditado.categoria = categoria.value;
      productoEditado.imagen = imagen.value;
      productoEditado.descripcion = descripcion.value;
      productoEditado.stock = stock.value;

      guardarEnLocalstorage();
      //mostrar editado exitoso
      Swal.fire({
        position: "top-center",
        icon: "success",
        iconColor: "#36D9BB",
        title: "<h4 style='color:#fff'>" + `Producto Editado Con Exito` + "</h4>",
        background: "#274481",
        showConfirmButton: false,
        timer: 1500
      });

      window.setTimeout(() => {
        window.location.reload();
      }, 1500);
      //ocultar el modal luego de editar y guardar en el localSotrage
      modalAdminProducto.hide()

    })
    mostrarModal()
  }

  cambiarBoton()
}

window.borrarProducto = (idProducto) => {
  Swal.fire({
    title: "¿Estas seguro que quieres borrar?",
    text: "No puedes revertir este paso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
           
      const posicionProductoBuscado = inventario.findIndex(
        (itemProducto) => itemProducto.id === idProducto
      );
       
      inventario.splice(posicionProductoBuscado, 1);     
      guardarEnLocalstorage();
      
      const tablaProductos = document.querySelector("tbody");     
      tablaProductos.removeChild(
      tablaProductos.children[posicionProductoBuscado]);
      

      Swal.fire({
        title: "Contacto eliminado",
        text: "El contacto fue eliminado exitosamente",
        icon: "success",

      });
    }
  });
};

btnAgregarProducto.addEventListener("click", () => {
  limpiarFormulario(); // Limpia el formulario al hacer clic en "Nuevo Producto"
  mostrarModal();
});

formularioProducto.addEventListener("submit", crearProducto);

cargaInicial();


// carga de productos en el html
