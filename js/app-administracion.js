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

const mostrarModal = () => {
  limpiarFormulario();
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
    <button class="btn btn-primary" onclick="verDetalleProducto('${producto.id}')">Ver detalle</button>
      <button class="btn btn-warning me-1">Editar</button
      ><button class="btn btn-danger" onclick="borrarProducto('${producto.id}')">Borrar</button>
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

btnAgregarProducto.addEventListener("click", mostrarModal);
formularioProducto.addEventListener("submit", crearProducto);

cargaInicial();
