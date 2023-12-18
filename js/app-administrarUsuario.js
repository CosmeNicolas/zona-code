import Usuario from "./classUsuario.js";
const modalRegistrarUsuario = new bootstrap.Modal(
  document.getElementById("registrarUsuario")
);
const btnAgregarUsuario = document.getElementById("btnAgregarUsuario");
const formularioUsuario = document.getElementById("formularioUsuario");
const nombre = document.getElementById("nombreUsuario"),
  apellido = document.getElementById("apellido"),
  email = document.getElementById("emailUsuario"),
  contraseña = document.getElementById("contraseña");
const listaUsuarios = JSON.parse(localStorage.getItem("UsuariosKey")) || [];
const mostrarModal = () => {
  modalRegistrarUsuario.show();
};
const crearUsuario = (e) => {
  e.preventDefault();
  const nuevoUsuario = new Usuario(
    undefined,
    nombre.value,
    apellido.value,
    email.value,
    contraseña.value
  );
  listaUsuarios.push(nuevoUsuario);
  limpiarFormulario();
  guardarEnLocalStorage();
  modalRegistrarUsuario.hide();
  Swal.fire({
    iconColor: "#36D9BB",
    background: "#274481",
    title: "<h4 style='color:#fff'>" + `Usuario Creado` + "</h4>",
    html: `<p style='color:white'>Tu usuario fue creado correctamente</p>`,
    icon: "success",
  });
};
const limpiarFormulario = () => {
  formularioUsuario.reset();
};
function guardarEnLocalStorage() {
  localStorage.setItem("UsuariosKey", JSON.stringify(listaUsuarios));
}
btnAgregarUsuario.addEventListener("click", mostrarModal);
formularioUsuario.addEventListener("submit", crearUsuario);
