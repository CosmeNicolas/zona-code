document.getElementById('userform').addEventListener("submit", (e) => {
    e.preventDefault();
    });

const email = document.getElementById ('email').value;
const password = document.getElementById ('password').value;

if (email === '' || password === '') {
    alert('Por favor completa los campos.');
    return;    
}

let emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
if (!emailRegex.test(email)) {
    alert('Ingresa un correo electronico valido.');
    return;
}

window.location.href = 'administracion.html';