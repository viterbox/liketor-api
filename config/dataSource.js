const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/liketor";

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