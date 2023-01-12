// Accedemos a las etiquetas con el nombre 'p' para acceder a los párrafos del DOM 
// y luego con length vemos cuantos hay.

let numParrafos = document.getElementsByTagName('p').length;
console.log(numParrafos);

// Accedemos a las etiquetas con el nombre 'p' para acceder a los párrafos del DOM 
// y luego cogemos el segundo párrafo y con textContent vemos su contenido.

let segundoParrafo = document.getElementsByTagName('p')[1].textContent;
console.log(segundoParrafo);

// Accedemos a las etiquetas con el nombre 'a' para acceder a los enlaces del DOM 
// y luego con length vemos cuantos hay.

let numEnlaces = document.getElementsByTagName('a').length;
console.log(numEnlaces);

// Accedemos a las etiquetas con el nombre 'a' para acceder a los enlaces del DOM 
// y luego seleccionamos el primer enlace y con getAttribute seleccionamos el atributo
// 'href' para ver su contenido.

let primerEnlace = document.getElementsByTagName('a')[0].getAttribute('href');
console.log(primerEnlace);



let penultimoEnlace = document.getElementsByTagName('a').length - 2;
let enlace = document.getElementsByTagName('a')[penultimoEnlace].getAttribute('href');
console.log(enlace);



let enlaces = document.getElementsByTagName('a');


const wikiMunicipio = () => {
    let cont = 0;

    for (const i of enlaces){
        if(i.href.includes('https://educacionadistancia.juntadeandalucia.es/wiki/Municipio')){
            cont++;
        }
    }
    console.log(cont);
};

let contador = 0;

for (const i of enlaces){
    if(i.href.includes('https://educacionadistancia.juntadeandalucia.es/wiki/Municipio')){
        contador++;
    }
}
console.log(contador);



let primerParrafo = document.getElementsByTagName('p')[0];
numEnlacesPrimerParrafo = primerParrafo.getElementsByTagName('a').length;
console.log(numEnlacesPrimerParrafo);


let info = document.querySelector('#info');
info.innerHTML = `<strong>Número de párrafos:</strong> ${numParrafos} <br>
                <strong>El texto del segundo párrafo:</strong> ${segundoParrafo} <br>
                <strong>Número de enlaces de la página:</strong> ${numEnlaces} <br>
                <strong>Dirección del primer enlace:</strong> ${primerEnlace} <br>
                <strong>Dirección del primer enlace:</strong> ${enlace} <br>
                <strong>Número de enlaces que apuntan a /wiki/Municipio:</strong> ${contador} <br>
                <strong>Número de enlaces que hay en el primer párrafo:</strong> ${numEnlacesPrimerParrafo}`;

info.style.fontFamily = 'JetBrains Mono';