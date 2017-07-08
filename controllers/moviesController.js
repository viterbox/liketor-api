const moviesService = require("../services/moviesService");

exports.getMoviesNowPlaying = (request, callback) => {
    moviesService.getMoviesNowPlaying((err,result) => {
        if (err) {
            throw err;
        }
        callback(err,result);
    });
};