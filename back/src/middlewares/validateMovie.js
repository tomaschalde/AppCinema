const validateMovie = (req,res,next) => {
                                    
	const {title, year, director, duration, genre, rate, poster} = req.body;
	
	
	if(!title || !year || !director || !duration || !genre || !rate || !poster) return res.status(400).json({message: "faltan datos por completar"});
		
	next()
}

module.exports = validateMovie;