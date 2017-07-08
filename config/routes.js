"use strict";

const moviesController = require("../controllers/moviesController");

exports.endoints = [
    {
        method:"GET", 
        path:"/movies/now_playing", 
        handler: (request, reply) => {
            moviesController.getMoviesNowPlaying(request,(err, result)=> {
                reply(result);
            });
        }
    }
];

