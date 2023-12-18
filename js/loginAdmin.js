const modalAmin = new bootstrap.Modal(
    document.getElementById("contactoAdmin")
  );
  const abrirModalAdmin = document.getElementById("abrirModalAdmin");
  
  const mostrarModalAdmin = () => {
    modalAmin.show();
  };
  
  abrirModalAdmin.addEventListener("click", mostrarModalAdmin);


  function loguear()
  {
      let usuario=document.getElementById("usuario").value;
      let contraseña=document.getElementById("clave").value;
      let errorMensaje = document.getElementById("errorMensaje");
  
      if (usuario.trim() === "" || contraseña.trim() === "") {
        errorMensaje.textContent = "Por favor, ingrese usuario y contraseña.";
        return;
    }
    
  if(usuario==="Gamer" && contraseña==="1234"){
      window.location="administracion.html"
  }
  else
  errorMensaje.textContent = "Usuario o Contraseña incorrectos";
  }