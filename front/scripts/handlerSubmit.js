const axios = require('axios');
const {validateCheckboxes,valuesCheckboxes} = require('./checkboxes');


async function handlerSubmit(event){

    event.preventDefault();
    const inputTitle = document.getElementById('title');
    const inputYear = document.getElementById('year');
    const inputDirector = document.getElementById('director');
    const inputDuracion = document.getElementById('duration');
    const inputRate = document.getElementById('rate');
    const inputPoster = document.getElementById('poster');

    const title = inputTitle.value;
    const year = inputYear.value;
    const director = inputDirector.value;
    const duration = inputDuracion.value;
    const rate = inputRate.value;
    const poster = inputPoster.value;

    const genresValidates = validateCheckboxes();
    const genresValues = valuesCheckboxes();

    
    if(![title, year, director, duration, rate, poster,genresValidates].every(Boolean)) return alert ("Faltan llenar campos");


        const bodyData = {
            title,
            year,
            director,
            duration,
            genre: genresValues,
            rate,
            poster,
            
        };
        
        console.log(bodyData);
        try {
            
            const response = await axios.post('http://localhost:3000/movies', bodyData);
    
            
            alert("Película creada exitosamente");
    
            
            console.log(response.data);
        } catch (error) {
           
            console.error("Error al crear la película:", error);
            alert("Error al crear la película. Por favor, intenta de nuevo más tarde.");
        }




}

module.exports = handlerSubmit;