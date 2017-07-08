"use strict";

const moviesController = require("../controllers/moviesController");

exports.endoints = [
    {
        method:"GET", 
        path:"/movies/now_playing", 
        handler: (request, reply) => {
            reply( 
                moviesController.getMoviesNowPlaying(request)
            );
        }
    }
];

