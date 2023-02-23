URL = 'https://randomuser.me/api/?nat=es';
const tablaUsuario = document.querySelector('#contenidoUsuario');
const tablaDatos = document.querySelector('#contenidoDatos');
const listaUsuarios = [];
const READY_STATE_COMPLETE = 4;

let datosUsuario = {
    "name": '',
    "phone": '',
    "street": '',
    "email": '',
    "image": '',
};

let tabla = document.createElement('table');
tabla.style.border = "1px solid black";
tablaDatos.appendChild(tabla);

window.onload = () => {
    document.querySelector('#obtener').addEventListener('click', obtenerUsuario);
    document.querySelector('#guardar').addEventListener('click', guardarUsuarioFetch);
    document.querySelector('#guardar2').addEventListener('click', guardarUsuarioXml);
    document.querySelector('#addInfo').addEventListener('click', addInfo);
}

function obtenerUsuario() {
    console.log('Obtener');
    fetch('https://randomuser.me/api/?nat=es')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            console.log(user.picture.medium);
            console.log(user.name.first);
            console.log(user.location.street.name);
            console.log(user.phone);
            console.log(user.email);

            let imagen = document.createElement('img');

            datosUsuario = {
                "name": user.name.first + ' ' + user.name.last,
                "phone": user.phone,
                "street": user.location.street.name,
                "email": user.email,
                "image": user.picture.large,
            }

            tablaUsuario.innerHTML = '';

            console.log(datosUsuario);

            imagen.setAttribute('src', datosUsuario.image)
            tablaUsuario.appendChild(imagen);

            let datos = '<br> ' + 'Nombre: ' + '<b>' + datosUsuario.name + '</b>' + '<br>' +
                'Dirección: ' + datosUsuario.street + '<br>' +
                'Teléfono: ' + datosUsuario.phone + '<br>' +
                'Email: ' + datosUsuario.email;

            tablaUsuario.innerHTML += datos;
        })
        .catch(error => {
            console.log(error);
        });
}

function guardarUsuarioFetch() {
    console.log('guardar');
    fetch("save_users.php", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(listaUsuarios),
        })
        .then((response) => {
            if (response.ok) return response.json();
        })
}

function guardarUsuarioXml() {
    console.log('guardarXML');
    xhr = new XMLHttpRequest();
    xhr.open("POST", "save_users.php");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === READY_STATE_COMPLETE && xhr.status === 200) {
            let users = JSON.parse(xhr.responseText);
            console.log(users);
        }
    };
    xhr.send(JSON.stringify(listaUsuarios));
}

function addInfo() {
    listaUsuarios.push(datosUsuario);
    console.log(listaUsuarios);
    console.log('Añadir');

    let fila1 = tabla.rows[0];

    if (!fila1) {
        fila1 = tabla.insertRow();
        let celdaNombre = fila1.insertCell();
        celdaNombre.textContent = "Nombre";

        let celdaDireccion = fila1.insertCell();
        celdaDireccion.innerHTML = "Dirección";

        let celdaTelefono = fila1.insertCell();
        celdaTelefono.innerHTML = "Teléfono";

        let celdaEmail = fila1.insertCell();
        celdaEmail.innerHTML = "Email";
    }

    let fila2 = tabla.insertRow();

    let celda1 = fila2.insertCell();
    celda1.innerHTML = "Nombre: " + datosUsuario.name;

    let celda2 = fila2.insertCell();
    celda2.innerHTML = "Dirección: " + datosUsuario.street;

    let celda3 = fila2.insertCell();
    celda3.innerHTML = "Teléfono: " + datosUsuario.phone;

    let celda4 = fila2.insertCell();
    celda4.innerHTML = "Email: " + datosUsuario.email;

    for (let i = 0; i < fila2.cells.length; i++) {
        fila2.cells[i].style.border = "1px solid black";
    }
}