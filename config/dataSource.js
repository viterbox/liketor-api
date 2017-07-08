const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/liketor";

const state = {
    db: null,
};

exports.connect = (callback) => {
    MongoClient.connect(url, (err, db) => {
        state.db = db;
        callback(err);
    });
};

exports.get = () => {
    return state.db;
};