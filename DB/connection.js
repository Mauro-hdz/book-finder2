require('dotenv').config();
const Sequelize = require('sequelize');


const DB = new Sequelize(process.env.CLEARDB_SCHEMA ||'saved_books_db', process.env.CLEARDB_USER || 'root', process.env.CLEARDB_PW || process.env.mySQL_PW, {
    host: process.env.CLEARDB_HOSTNAME || 'localhost',
    dialect: 'mysql'
});

module.exports = DB;