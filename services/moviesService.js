const movieApiKey = process.env.MOVIE_DB;
const mdb = require("moviedb")(movieApiKey);
const dataSource = require("../config/dataSource");

const likesCollection = dataSource.get().collection("movieLikes");

const buildData = (movieId, userId, like) => {

    const currentDate = new Date().getTime();

    const data = {
        movie_id: parseInt(movieId),
        user_id: userId,
        like: like,
        created_date: currentDate,
        updated_date: currentDate, 
    };

    return data;
};

exports.getMoviesNowPlaying = (callback) => { 
    mdb.miscNowPlayingMovies({},(err,res) => {
        callback(err,res);
    });
};

exports.postMovieLike = (movieId, userId, like, callback) => {
    
    const data = buildData(movieId, userId, like);
    likesCollection.insertOne(data,function(err, result) {

        if(err == null && result.insertedCount == 1){
            console.log("Data Inserted");
            data.created_date = new Date(data.created_date);
            data.updated_date = new Date(data.updated_date);
            result = data;
        }	

        callback(err, result);
    });
};