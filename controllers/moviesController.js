const moviesService = require("../services/moviesService");

exports.getMoviesNowPlaying = (request, callback) => {
    moviesService.getMoviesNowPlaying((err,result) => {
        if (err) {
            throw err;
        }
        callback(err,result);
    });
};

exports.postMovieLike = (request, callback) => {
    moviesService.postMovieLike(request.params.movie_id, request.payload.user_id, request.payload.like, (err,result) => {
        if (err) {
            throw err;
        }

        const data = {
            like: result
        };

        callback(err,data);
    });
};

exports.getMovieLike = (request, callback) => {
    moviesService.getMovieLike(request.params.movie_id, (err,result) => {
        if (err) {
            throw err;
        }

        const data = {
            likes: result
        };

        callback(err,data);
    });
};