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
      let user=document.getElementById("usuario").value;
      let pass=document.getElementById("clave").value;
  
  if(user==="Gamer" && pass==="1234"){
      window.location="administracion.html"
  }
  else
  alert ("Datos incorrectos");
  }