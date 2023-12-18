function crearFila(usuario, fila) {
  const tablaUsuarios = document.querySelector("tbody");
  tablaUsuarios.innerHTML += `
    <tr>
      <th scope="row">${fila}</th>
      <td>${usuario.nombre}</td>
      <td>${usuario.apellido}</td>
      <td>${usuario.email}</td>
      <td>${usuario.contraseña}</td>
      <td>
        <button class="btn btn-danger" onclick="borrarUsuario('${usuario.id}')">Borrar</button>
      </td>
    </tr>`;
}
function cargaInicial() {
  const listaUsuarios = JSON.parse(localStorage.getItem("UsuariosKey")) || [];

  if (listaUsuarios.length > 0) {
    listaUsuarios.map((usuario, posicion) => {
      crearFila(usuario, posicion + 1);
    });
  }
}

function borrarUsuario(id) {
  Swal.fire({
    iconColor: "#36D9BB",
    background: "#274481",
    title: "<h3 style='color:#fff'>" + "¿Estás seguro?" + "</h3>",
    html: `<p style='color:white'>¡No podrás revertir esto!</p>`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, borrar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      let listaUsuarios = JSON.parse(localStorage.getItem("UsuariosKey")) || [];
      listaUsuarios = listaUsuarios.filter((usuario) => usuario.id !== id);
      localStorage.setItem("UsuariosKey", JSON.stringify(listaUsuarios));
      Swal.fire({
        iconColor: "#36D9BB",
        background: "#274481",
        title: "<h4 style='color:#fff'>" + `Usuario borrado` + "</h4>",
        html: `<p style='color:white'>El usuario fue borrado correctamente</p>`,
        icon: "success",
      });
      cargarListaUsuarios();
    }
  });
}

function cargarListaUsuarios() {
  const tablaUsuarios = document.querySelector("tbody");
  tablaUsuarios.innerHTML = "";

  const listaUsuarios = JSON.parse(localStorage.getItem("UsuariosKey")) || [];

  if (listaUsuarios.length > 0) {
    listaUsuarios.forEach((usuario, posicion) => {
      crearFila(usuario, posicion + 1);
    });
  }
}

cargaInicial();
