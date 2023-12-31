import Producto from "./app-classProducto.js";
import { validarCantidadCaracteres, } from "./validaciones.js";

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
const validarUrlImagen = (url) => {
  // Patrón regex para validar una URL de imagen básica
  const regex = /\.(gif|jpg|jpeg|tiff|png)$/i;
  return regex.test(url);};

const crearProducto = (e) => {
  e.preventDefault();

  const urlImagenValida = validarUrlImagen(imagen.value);
  if (validarCantidadCaracteres(nombre.value, 2, 20) && validarCantidadCaracteres(categoria.value, 2, 20) && validarCantidadCaracteres(descripcion.value, 5, 500) &&
    urlImagenValida) {
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
      iconColor: "#36D9BB",
      background: "#274481",
      title: "<h4 style='color:#fff'>" + `Producto Creado` + "</h4>",
      html: `<p style='color:white'>El Producto ${nuevoProducto.nombre} fue creado correctamente</p>`,
      icon: "success",
    });
  } else {
    Swal.fire({
      iconColor: "#FF4848", // Color para la advertencia (rojo en este caso)
      background: "#274481",
      title: "<h4 style='color:#fff'>" + `¡Advertencia!` + "</h4>",
      html: `<p style='color:white'>Hubo errores en el formulario. Por favor, revísalos.</p>`,
      icon: "warning", // Icono de advertencia
    });
  }
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
  const posicionProductoEditar = inventario.findIndex((itemProducto) => itemProducto.id === idProducto);

  const mostrarDatosProductoAeditar = () => {
    const productoAeditar = inventario[posicionProductoEditar];
    nombre.value = productoAeditar.nombre;
    precio.value = productoAeditar.precio;
    categoria.value = productoAeditar.categoria;
    imagen.value = productoAeditar.imagen;
    descripcion.value = productoAeditar.descripcion;
    stock.value = productoAeditar.stock;
  };

  mostrarDatosProductoAeditar();

  const validarUrlImagen = (url) => {
    const regex = /\.(gif|jpg|jpeg|tiff|png)$/i;
    return regex.test(url);
  };

  const cambiarBoton = () => {
    const botonEditar = document.getElementById('btnEditarProducto');
    botonEditar.innerText = "Editar";
    botonEditar.type = "button";
    botonEditar.removeEventListener("click", cambiarBoton);

    botonEditar.addEventListener("click", (e) => {
      e.preventDefault();

      const urlImagenValida = validarUrlImagen(imagen.value);

      if (
        validarCantidadCaracteres(nombre.value, 2, 20) &&
        validarCantidadCaracteres(categoria.value, 2, 20) &&
        validarCantidadCaracteres(descripcion.value, 5, 25) &&
        urlImagenValida
      ) {
        const productoEditado = inventario[posicionProductoEditar];
        productoEditado.nombre = nombre.value;
        productoEditado.precio = precio.value;
        productoEditado.categoria = categoria.value;
        productoEditado.imagen = imagen.value;
        productoEditado.descripcion = descripcion.value;
        productoEditado.stock = stock.value;

        guardarEnLocalstorage();

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

        modalAdminProducto.hide();
      } else {
        Swal.fire({
          iconColor: "#FF4848",
          background: "#274481",
          title: "<h4 style='color:#fff'>" + `¡Advertencia!` + "</h4>",
          html: `<p style='color:white'>Hubo errores en el formulario. Por favor, revísalos.</p>`,
          icon: "warning",
        });
      }
    });

    mostrarModal();
  };

  cambiarBoton();
};

window.borrarProducto = (idProducto) => {
  Swal.fire({
    title: "<h4 style='color:#fff'>" + `¿Estas seguro que quieres borrar?` + "</h4>",


    icon: "warning",
    showCancelButton: true,
    iconColor: "#36D9BB",
    background: '#274481',
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
        title: "<h4 style='color:#fff'>" + `Producto Eliminado` + "</h4>",
        icon: "success",
        iconColor: "#36D9BB",
        background: '#274481',

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


