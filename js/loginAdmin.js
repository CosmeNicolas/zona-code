const modalAmin = new bootstrap.Modal(
    document.getElementById("contactoAdmin")
  );
  const abrirModalAdmin = document.getElementById("abrirModalAdmin");
  
  const mostrarModalAdmin = () => {
    modalAmin.show();
  };
  
  abrirModalAdmin.addEventListener("click", mostrarModalAdmin);
  