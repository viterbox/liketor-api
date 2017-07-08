const movieApiKey = process.env.MOVIE_DB;
const mdb = require("moviedb")(movieApiKey);
const dataSource = require("../config/dataSource");

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
    const likesCollection = dataSource.get().collection("movieLikes");
    likesCollection.updateOne({movie_id:data.movie_id, user_id: data.user_id }, {$set:data}, {upsert:true}, (err, result)=>{
        if(err == null){
            console.log("Data persisted");
            data.created_date = new Date(data.created_date);
            data.updated_date = new Date(data.updated_date);
            result = data;
        }	

        callback(err, result);

    });
};

exports.getMovieLike = (movieId, callback) => {

    const likesCollection = dataSource.get().collection("movieLikes");
    likesCollection.find({"movie_id":parseInt(movieId)}).toArray((err, docs) => {
        console.log(docs);
        
        callback(err, docs.map((item) => {
            item.created_date = new Date(item.created_date);
            item.updated_date = new Date(item.updated_date);
            return item;
        }));
    });

};