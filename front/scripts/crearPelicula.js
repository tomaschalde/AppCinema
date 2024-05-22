
const renderGenres = require('./genresMovies');
const handlerSubmit = require('./handlerSubmit');
const cleanInputs = require('./cleanInputs')
const btnSubmit = document.getElementById('btnSubmit');
const btnCleaner = document.getElementById('btnCleaner');



renderGenres();
btnSubmit.addEventListener('click', handlerSubmit);
btnCleaner.addEventListener('click', cleanInputs);