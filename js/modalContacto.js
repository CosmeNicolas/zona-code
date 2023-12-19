const modalContacto = new bootstrap.Modal(
  document.getElementById("contactoModal")
);
const abrirModalContacto = document.getElementById("abrirModalContacto");

const mostrarModal = () => {
  modalContacto.show();
};

abrirModalContacto.addEventListener("click", mostrarModal);



