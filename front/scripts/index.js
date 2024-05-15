//Mostramos las peliculsa en la pagina
const getFilms = require('./handler');
getFilms();

//Cambia el fondo del inicio cuando paso el mouse por la imagen de alguna de las peliculas
const mostrar = require('./showBackground');
const ocultar = require('./hideBackground');





//Solucion con javascript puro
/*
// Seleccionamos el contenedor donde se agregarán las tarjetas
const containerPeliculas = document.querySelector(".containerCards");

function renderPeliculas(pelicula){
    //Creo el contenedor que tendra a cada pelicula
    const movieElement = document.createElement('div');
    movieElement.classList.add('card');

    movieElement.innerHTML = `
                        <h3>${pelicula.title} (${pelicula.year})</h3>
                        <img src= "${pelicula.poster}" alt="${pelicula.title}">
                        <p> <strong>Director: </strong> ${pelicula.director}</p>
                        <p> <strong>Duración: </strong> ${pelicula.duration}</p>
                        <p> <strong>Genero: </strong> ${pelicula.genre.join(', ')}</p>
                        <p> <strong>Validación: </strong> ${pelicula.rate}</p>
                        `
    
    containerPeliculas.appendChild(movieElement);
  }
    
//Appendeamos todas las tarjetas ya construidas en el container de tarjetas
tempData.forEach(renderPeliculas)

*/