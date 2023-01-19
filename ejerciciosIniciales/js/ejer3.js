let body = document.querySelector('body');
let formulario = document.createElement('form');
body.appendChild(formulario);
formulario.setAttribute('id', 'formulario');

let fieldset = document.createElement('fieldset');
formulario.appendChild(fieldset);


const ponerDivs = () => {
    let cont = 0;
    do {
        let div = document.createElement('div');
        cont++;
        fieldset.appendChild(div);

    } while (cont < 6);
};

let divs = document.getElementsByTagName('div');
let input = document.createElement('input');
let select = document.createElement('select');


const ponerLabelsInputs = () => {
    for (let i of divs) {
        let label = document.createElement('label');
        i.appendChild(label);
    };
    for (let i of divs) {
        let input = document.createElement('input');
        let select = document.createElement('select');
        if (i[3]) {
            i.appendChild(select)
        } else {
            i.appendChild(input);
        }
    };
};

ponerDivs();
ponerLabelsInputs();

let div = document.createElement('div');
fieldset.appendChild(div);


let label1 = document.getElementsByTagName('label')[0];
label1.setAttribute('for', 'nombreDisco');
label1.textContent = 'Nombre del disco:';
let label2 = document.getElementsByTagName('label')[1];
label2.setAttribute('for', 'grupo');
label2.textContent = 'Nombre del grupo:'
let label3 = document.getElementsByTagName('label')[2];
label3.setAttribute('for', 'year');
label3.textContent = 'Año de publicación:'
let label4 = document.getElementsByTagName('label')[3];
label4.setAttribute('for', 'tipoMusica');
label4.textContent = 'Tipo de música:'
let label5 = document.getElementsByTagName('label')[4];
label5.setAttribute('for', 'localizacion');
label5.textContent = 'Localización:'
let label6 = document.getElementsByTagName('label')[5];
label6.setAttribute('for', 'prestado');
label6.textContent = 'Prestado:'
let button = document.createElement('button');
button.textContent = 'Enviar';
button.setAttribute('id','enviar');
div.appendChild(button);

let input1 = document.getElementsByTagName('input')[0];
input1.setAttribute('type', 'text');
input1.setAttribute('id', 'nombreDisco');
input1.setAttribute('name', 'nombreDisco');
let input2 = document.getElementsByTagName('input')[1];
input2.setAttribute('type', 'text');
input2.setAttribute('id', 'grupo');
input2.setAttribute('name', 'grupo');
let input3 = document.getElementsByTagName('input')[2];
input3.setAttribute('type', 'date');
input3.setAttribute('id', 'year');
input3.setAttribute('name', 'year');
let input4 = document.getElementsByTagName('input')[3];
let input5 = document.getElementsByTagName('input')[4];
input5.setAttribute('type', 'number');
input5.setAttribute('id', 'localizacion');
input5.setAttribute('name', 'localizacion');
let input6 = document.getElementsByTagName('input')[5];
input6.setAttribute('type', 'checkbox');
input6.setAttribute('id', 'prestado');
input6.setAttribute('name', 'prestado');

let div4 = document.querySelectorAll('div')[3];
div4.removeChild(input4);
div4.appendChild(select);
let option = document.createElement('option');

let select2 = document.querySelector('select');
select2.appendChild(option);
select2.setAttribute('id','tipoMusica');
select2.setAttribute('name','tipoMusica');


const ponerOptions = () => {
    let cont = 0;
    do {
        let option = document.createElement('option');
        cont++;
        select2.appendChild(option);

    } while (cont < 3);
};

ponerOptions();

let option1 = document.getElementsByTagName('option')[0];
option1.textContent = 'Rock';
let option2 = document.getElementsByTagName('option')[1];
option2.textContent = 'Pop';
let option3 = document.getElementsByTagName('option')[2];
option3.textContent = 'Punk';
let option4 = document.getElementsByTagName('option')[3];
option4.textContent = 'Indie';

