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

const sequelize = new Sequelize('saved_books_db', 'root', , {
    host: 33036,
    dialect: 'mysql'
})



app.use(routes);


app.listen(PORT, () => console.log(`Now listening on: http://localhost:${PORT}`));





