
const {Movies} = require('../types/class');
const Movie = require('../models/Movie');

module.exports = {
    getAllMovies: async () => {
            
            try {
                
                const data = await Movie.find();
                const movies = data.map((movie) => new Movies(movie));
                
                return movies;

            } catch (error) {
                throw new Error(error);
            }
    },

    postMovieService: async (movie) => {
        try {
            const newMovie = await Movie.create(movie);
            return newMovie;
        } catch (error) {
            throw Error (error.message)
        }
    }

}
