let boton = document.querySelector('#boton');
let botonBorrarPrimero = document.querySelector('#borrarPrimero');
let botonBorrarUltimo = document.querySelector('#borrarUltimo');

boton.addEventListener('click', () => {
    let nombreIntroducido = prompt('Introduce un nombre:');
    let lista = document.querySelector('#lista');
    let element = document.createElement('li');
    element.textContent = nombreIntroducido;
    lista.appendChild(element);
});
/*
botonBorrarPrimero.addEventListener('click',() => {
    let elemento = document.querySelectorAll('li');
    let cantidad = elemento.length;
    if (cantidad > 0) {
    elemento = elemento[0];
    elemento.remove();
    }
});

botonBorrarUltimo.addEventListener('click',() => {
    let elemento = document.querySelectorAll('li');
    let cantidad = elemento.length;
    if (cantidad > 0){
    elemento = elemento[cantidad - 1];
    elemento.remove();
    }
});
*/
botonBorrarPrimero.addEventListener('click',() => {
    let lista = document.querySelector('#lista');
    lista.removeChild(lista.children[0]);
});

botonBorrarUltimo.addEventListener('click',() => {
    let lista = document.querySelector('#lista');
    let numElementList = document.getElementsByTagName('li').length;
    lista.removeChild(lista.children[numElementList-1]);
});

