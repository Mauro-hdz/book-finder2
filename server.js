const express = require('express');
const app = express();
require('dotenv').config();
const mysql = require('mysql2');
const Sequelize = require('sequelize');
const routes = require('./routes');
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

const sequelize = new Sequelize('saved_books_db', 'root', process.env.mySQL_PW, {
    host: 33036,
    dialect: 'mysql'
})

sequelize
  .authenticate()
  .then(function(err) {
    console.log('🌍 Connection has been established at PORT: ' + 33036);
  })
  .catch(function (err) {
    console.log('❌ Unable to connect to the database:', err);
  });



app.use(routes);


app.listen(PORT, () => console.log(`Now listening on: http://localhost:${PORT}`));





