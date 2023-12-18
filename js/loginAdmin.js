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
  
  if(usuario==="Gamer" && contraseña==="1234"){
      window.location="administracion.html"
  }
  else
  alert ("Datos incorrectos");
  }