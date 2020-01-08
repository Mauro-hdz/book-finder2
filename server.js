const express = require('express');
const app = express();
require('dotenv').config();
const mysql = require('mysql2');
const Sequelize = require('sequelize');
const DB = require('./DB/connection');

const PORT = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

//'checks' for DB connection or returns error on failure
DB.authenticate()
  .then(function(err) {
    console.log('🌍 Database connection has been established at PORT: ' + 33036);
  })
  .catch(function (err) {
    console.log('❌ Unable to connect to the database:', err);
  });

//conecting our routes
require('./routes/api/book-routes') (app);
app.use(require('./routes'));

//starting server
app.listen(PORT, () => console.log(`Now listening on PORT:${PORT}`));





