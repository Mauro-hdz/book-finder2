const express = require('express');
const app = express();
require('dotenv').config();
const mysql = require('mysql2');
const Sequelize = require('sequelize');

const PORT = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

//connecting to mySQL DB
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL ||'saved_books_db', 'root' || process.env.CLEARDB_DATABASE_URL, process.env.CLEARDB_DATABASE_URL || process.env.mySQL_PW, {
    host: 33036,
    dialect: 'mysql'
});
//'checks' for connection or returns error on failure
sequelize
  .authenticate()
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





