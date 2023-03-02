const API_KEY = "9eedcf3271231113c1af4ecf891022a9";
const TRENDING_MOVIES_URL = "trending/movie/week";
const API_BASE_URL = `https://api.themoviedb.org/3/${TRENDING_MOVIES_URL}?api_key=${API_KEY}`;
let listaPeliculas = [];
const READY_STATE_COMPLETE = 4;

let trazas = document.querySelector("#trazas");
let cartasPelicula = document.querySelector("#cartasPelicula");


let datosPelicula = {
    "id": '',
    "original_title": '',
    "overview": '',
    "original_language": '',
    "release_date": '',
    "vote_average": '',
    "poster_path ": ''
};

window.onload = () => {
    document.querySelector('#obtener').addEventListener('click', obtenerPeliculas);
    document.querySelector('#guardarFetch').addEventListener('click', guardarPelisFetch);
    document.querySelector('#obtenerXML').addEventListener('click', obtenerPelisFav);
    document.querySelector('#limpiar').addEventListener('click', limpiarFichas);
}

function obtenerPeliculas() {
    console.log("Obtener películas");
    trazas.innerHTML = '';
    trazas.innerHTML = 'Obtener películas'
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.responseText);
            const movies = response.results;
            console.log(movies);
            for (let i = 0; i < 20; i++) {
                let datosPelicula = {
                    "id": response.results[i].id,
                    "original_title": response.results[i].original_title,
                    "overview": response.results[i].overview,
                    "original_language": response.results[i].original_language,
                    "release_date": response.results[i].release_date,
                    "vote_average": response.results[i].vote_average,
                    "poster_path": response.results[i].poster_path
                };
                console.log(datosPelicula);
                let div = document.createElement('div');
                div.setAttribute('class', 'card');
                div.setAttribute('width', '18rem');
                let div2 = document.createElement('div');
                div2.setAttribute('class', 'card-body');
                let div3 = document.createElement('div');
                let div4 = document.createElement('div');

                cartasPelicula.appendChild(div);
                div.appendChild(div2);

                let imagenPelicula = document.createElement('img');
                let imagenFav = document.createElement('img');
                let url = `https://image.tmdb.org/t/p/w500/${datosPelicula.poster_path}`;

                let datos = '<br> ' + 'ID: ' + '<b>' + datosPelicula.id + '</b>' + '<br>' +
                    'Título original: ' + datosPelicula.original_title + '<br>' +
                    'Overview: ' + datosPelicula.overview + '<br>' +
                    'Idioma original ' + datosPelicula.original_language + '<br>' +
                    'Fecha de lanzamiento: ' + datosPelicula.release_date + '<br>' +
                    'Media de votos: ' + datosPelicula.vote_average;

                div2.innerHTML = datos;
                imagenPelicula.setAttribute('src', url);
                imagenFav.setAttribute('src', 'img/heart_border.png');
                imagenPelicula.style.width = '300px';
                imagenPelicula.style.height = '400px';
                div2.appendChild(div3);
                div3.appendChild(imagenPelicula);
                div3.appendChild(div4)
                div4.appendChild(imagenFav);

                const addFav = () => {
                    if (imagenFav.src.endsWith('heart_border.png')) {
                        imagenFav.src = 'img/heart_filled.png';
                        trazas.innerHTML += '<br>' + 'Añadido a favoritos';
                        listaPeliculas.push(datosPelicula);
                        console.log(listaPeliculas);
                    } else {
                        imagenFav.src = 'img/heart_border.png';
                        trazas.innerHTML += '<br>' + 'Eliminado de favoritos';
                        const index = listaPeliculas.findIndex(pelicula => pelicula.id === datosPelicula.id);
                        if (index > -1) {
                            listaPeliculas.splice(index, 1);
                            console.log(listaPeliculas);
                        }
                    }
                };

                imagenFav.addEventListener('click', addFav)
            }
        }
    };



    xhr.open("GET", API_BASE_URL);
    xhr.send();
}

function guardarPelisFetch() {
    console.log('Guardar fetch');
    trazas.innerHTML = '';
    trazas.innerHTML = 'Guardar favoritos en BD (Fetch) ';
    fetch("save_movies.php", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(listaPeliculas),
        })
        .then((response) => {
            if (response.ok) return response.json();
        })
}

function obtenerPelisFav() {
    console.log('Obtener XML');
    trazas.innerHTML = '';
    trazas.innerHTML = 'Obtener favoritos de la BD (XML)'
    xhr = new XMLHttpRequest();
    xhr.open("GET", "get_favs.php");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === READY_STATE_COMPLETE && xhr.status === 200) {
            let pelis = JSON.parse(xhr.responseText);
            console.log(pelis);

            for (let i = 0; i < pelis.length; i++) {

                let pelicula = {
                    "id": pelis[i].id,
                    "original_title": pelis[i].original_title,
                    "overview": pelis[i].overview,
                    "original_language": pelis[i].original_language,
                    "release_date": pelis[i].release_date,
                    "vote_average": pelis[i].vote_average,
                    "poster_path": pelis[i].poster_path
                };

                console.log(pelicula);

                let datos = '<br> ' + 'ID: ' + '<b>' + pelis[i].id + '</b>' + '<br>' +
                    'Título original: ' + pelis[i].original_title + '<br>' +
                    'Overview: ' + pelis[i].overview + '<br>' +
                    'Idioma original ' + pelis[i].original_language + '<br>' +
                    'Fecha de lanzamiento: ' + pelis[i].release_date + '<br>' +
                    'Media de votos: ' + pelis[i].vote_average;

                let div = document.createElement('div');
                div.setAttribute('class', 'card');
                div.setAttribute('width', '18rem');
                let div2 = document.createElement('div');
                div2.setAttribute('class', 'card-body');
                let div3 = document.createElement('div');

                cartasPelicula.appendChild(div);
                div.appendChild(div2);

                let imagenPelicula = document.createElement('img');
                let url = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;

                div2.innerHTML = datos;
                imagenPelicula.setAttribute('src', url);
                imagenPelicula.style.width = '300px';
                imagenPelicula.style.height = '400px';
                div2.appendChild(div3);
                div3.appendChild(imagenPelicula);
            }
        }
    };
    xhr.send(JSON.stringify(listaPeliculas));
}

function limpiarFichas() {
    console.log('Limpiar...');

    cartasPelicula.textContent = '';
}