import Usuario from "./classUsuario.js";

const modalRegistrarUsuario = new bootstrap.Modal(document.getElementById ('registrarUsuario'));
const btnAgregarUsuario = document.getElementById('btnAgregarUsuario');
const formularioUsuario = document.getElementById('formularioUsuario')
const nombre = document.getElementById('nombreUsuario'),
apellido = document.getElementById('apellido'),
email = document.getElementById('emailUsuario'),
contraseña = document.getElementById('contraseña');
const listaUsuarios = [];


const mostrarModal = () =>{
    modalRegistrarUsuario.show();
}


const crearUsuario = (e)=>{
    e.preventDefault();
    console.log('aqui debo crear el usuario nuevo')

    const nuevoUsuario = new Usuario(undefined, nombre.value, apellido.value, email.value, contraseña.value );
    console.log(nuevoUsuario)
    
    listaUsuarios.push(nuevoUsuario)
    console.log(listaUsuarios)
    limpiarFormulario();
    guardarEnLocalStorage();
}

const limpiarFormulario = ()=>{
    formularioUsuario.reset();
}

function guardarEnLocalStorage(){
    localStorage.setItem('UsuariosKey', JSON.stringify(listaUsuarios))
}


btnAgregarUsuario.addEventListener('click', mostrarModal);
formularioUsuario.addEventListener('submit', crearUsuario)




/*

const modalAdminUsuario = new bootstrap.Modal(document.getElementById('registrarUsuario'));
const btnRegistrarUsuario = document.getElementById('btnNuevoUsuario');
const formularioUsuario = document.querySelector('form');
const nombre = document.getElementById('nombre'),
apellido = document.getElementById('apellido'),
email = document.getElementById('email'),
contraseña = document.getElementById('contraseña');

const mostrarModal = ()=>{
    modalRegistrarUsuario.show();
}

const crearUsuario = (e) =>{
    e.preventDefault();
console.log('aqui debo ver el nuevo usuario')

const nuevoUsuario = new Usuario(undefined, nombre.value, apellido.value, email.value, contraseña.value );
console.log(nuevoUsuario)
}

btnRegistrarUsuario.addEventListener('click', mostrarModal);
formularioUsuario.addEventListener('submit', crearUsuario)

*/