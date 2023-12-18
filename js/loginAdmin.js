const modalAdmin = new bootstrap.Modal(document.getElementById("contactoAdmin"));
const abrirModalAdmin = document.getElementById("abrirModalAdmin");
const formLogin = document.getElementById("formLogin");
const errorMensaje = document.getElementById("errorMensaje");

abrirModalAdmin.addEventListener("click", mostrarModalAdmin);

function mostrarModalAdmin() {
  modalAdmin.show();
}

function iniciarSesion() {
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("clave").value;
  let errorMensaje = document.getElementById("errorMensaje");

  if (!validarCampos(usuario, contraseña)) {
    return;
  }

  if (usuario === "Gamer" && contraseña === "1234") {
    window.location = "administracion.html";
  } else {
    errorMensaje.textContent = "Usuario o Contraseña incorrectos";
    limpiarFormulario();
  }


}
 
function validarCampos(usuario, contraseña) {
  const soloLetrasNumeros = /^[a-zA-Z0-9]+$/;
  const soloNumeros = /^\d+$/;

  if (usuario.trim() === "" || !soloLetrasNumeros.test(usuario)) {
    errorMensaje.textContent = "El usuario debe contener solo letras y números.";
    return false;
    
  }

  if (contraseña.trim() === "" || !soloNumeros.test(contraseña)) {
    errorMensaje.textContent = "La contraseña debe contener solo números.";
    return false;
  }

  return true;
  
}

function limpiarFormulario() {
  formLogin.reset();
  
}

function cerrar() {
  document.getElementById("usuario").value = "";
  document.getElementById("clave").value = "";
  document.getElementById("errorMensaje").textContent = "";
}



