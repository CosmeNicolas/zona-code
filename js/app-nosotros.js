function mostrarInformacion() {
    var info = document.getElementById("informacionAdicional");
    var btn = document.getElementById("mostrarBtn");

    if (info.style.display === "none") {
      info.style.display = "block";
      btn.innerHTML = "Ocultar";
    } else {
      info.style.display = "none";
      btn.innerHTML = "Mostrar más";
    }
  }
