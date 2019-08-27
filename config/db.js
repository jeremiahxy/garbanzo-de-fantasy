const MongoClient = require('mongodb').MongoClient;

let db = null;

exports.connect = (url, done) => {
    if(db) return done();

    MongoClient.connect(url, (err, connection) => {
        if(err) return done(err);
        db = connection.db("fancy-garbanzo");
        done();
    })
}

exports.get = function() {
    return db;
}

exports.close = done => {
    if(db) {
        db.close((err,result) => {
            db = null;
            done (err);
        })
    }
}