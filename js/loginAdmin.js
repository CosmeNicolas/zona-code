function iniciarSesion() {
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("clave").value;
  let errorMensaje = document.getElementById("errorMensaje");
  let mensajeDeIngreso = document.getElementById("mensajeDeIngreso");

  if (usuario.trim() === "" || contraseña.trim() === "") {
    errorMensaje.textContent = "Por favor, ingrese usuario y contraseña.";
    return;
  }

  if (!validarCampos(usuario, contraseña)) {
    return;
  }


  if (usuario === "Gamer" && contraseña === "1234") {
    borrarmensaje();
    mensajeDeIngreso.textContent =
      "Datos ingresados correctamente!, se dirige a pagina administrador";
    setTimeout(() => {
      window.location = "administracion.html";
    }, 6000);
    mostrarBotonAdicional();
  } else {
    errorMensaje.textContent = "Usuario o Contraseña incorrectos";
    limpiarFormulario();
  }
  
}

function validarCampos(usuario, contraseña) {
  const soloLetrasNumeros = /^[a-zA-Z0-9]+$/;
  const soloNumeros = /^\d+$/;

  if (
    usuario.trim() === "" ||
    !soloLetrasNumeros.test(usuario) ||
    usuario.length < 4 ||
    usuario.length > 15
  ) {
    errorMensaje.textContent = "El usuario debe contener letras y/o números.";
    limpiarFormulario();
    return false;
  }

  if (
    contraseña.trim() === "" ||
    !soloNumeros.test(contraseña) ||
    contraseña.length < 4 ||
    contraseña.length > 15
  ) {
    errorMensaje.textContent = "La contraseña debe contener solo números.";
    limpiarFormulario();
    return false;
  }

  return true;
}

function limpiarFormulario() {
  formLogin.reset();
}

function borrarmensaje() {
  document.getElementById("errorMensaje").textContent = "";
}

function mostrarBotonAdicional() {
  // Muestra el botón o campo de entrada adicional
  const botonAdicional = document.getElementById("botonAdicional");
  if (botonAdicional) {
    botonAdicional.style.display = "block"; // O utiliza "inline" o cualquier otro estilo según tus necesidades
  }
}


