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
    },
    {
        method:["post","get"],
        path:"/movies/{movie_id}/likes",
        handler: (request,reply) => {
            switch (request.method) {
            case "post":
                moviesController.postMovieLike(request,(err,result) => {
                    reply(result);
                });
                break;
            case "get":
                moviesController.getMovieLike(request,(err, result)=> {
                    reply(result);
                });
                break;
            default:
                break;
            } 
          
        }
    }
];

