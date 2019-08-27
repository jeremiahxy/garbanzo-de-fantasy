require('dotenv').config()

const express = require("express");
const app = express();

const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const db = require('./config/db');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

dbURI = process.env.MONGODB_URI || "mongodb://localhost/fancy-garbanzo";

db.connect(dbURI, err => {
  if(err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    // Start the API server
    app.listen(PORT, function() {
      console.log(`Mongo-Express-Node API active on ${PORT}, yo.`);
    });
  }
})