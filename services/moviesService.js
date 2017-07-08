const movieApiKey = process.env.MOVIE_DB;
const mdb = require("moviedb")(movieApiKey);

exports.getMoviesNowPlaying = (callback) => { 
    mdb.miscNowPlayingMovies({},(err,res) => {
        callback(err,res);
    });
};