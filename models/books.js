require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.CLEARDB_SCHEMA ||'saved_books_db', process.env.CLEARDB_USER || 'root', process.env.CLEARDB_PW || process.env.mySQL_PW, {
    host: process.env.CLEARDB_HOSTNAME || 'localhost',
    dialect: 'mysql'
});

const Book = sequelize.define('book', {
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