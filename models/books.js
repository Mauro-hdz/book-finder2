require('dotenv').config();
const Sequelize = require('sequelize');
const DB = require('../DB/connection');

const Book = DB.define('book', {
    title: {type: Sequelize.STRING, allowNull: false},
    subtitle: {type: Sequelize.STRING, allowNull: true},
    author: {type: Sequelize.STRING, allowNull: true},
    summary: {type: Sequelize.STRING, allowNull: true},
    thumbnail: {type: Sequelize.STRING, allowNull: true},
    purchaseLink: {type: Sequelize.STRING, allowNull: true},
    id: {type: Sequelize.STRING, allowNull: false, primaryKey: true}
},
{
    timestamps: false
});


module.exports = Book;