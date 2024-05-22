//Hacemos un enrutador para las movies
const {Router} = require('express');
const movieRouter = Router();
const validateMovie = require('../middlewares/validateMovie')

const { getMovies, postMovies } = require('../controllers/movieControllers'); 

movieRouter.get('/',getMovies);
movieRouter.post('/',validateMovie,postMovies);


module.exports = movieRouter;