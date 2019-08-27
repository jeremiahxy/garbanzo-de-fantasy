const db = require("../config/db");

module.exports = {
  findAll: (req, res) => {
    const collection = db.get({}).collection('players');

    collection.find().toArray(function(err, docs) {
        if(err) { res.status(422).json(err) }
        res.status(200).json(docs);
    });
  }
};
