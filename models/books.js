require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('saved_books_db', 'root', process.env.mySQL_PW, {
    host: 33036,
    dialect: 'mysql'
});

const Book = sequelize.define('book', {
    title: {type: Sequelize.STRING, allowNull: false},
    subtitle: {type: Sequelize.STRING, allowNull: true},
    author: {type: Sequelize.STRING, allowNull: false},
    description: {type: Sequelize.STRING, allowNull: false},
    thumbnail: {type: Sequelize.STRING, allowNull: false},
    purchaseLink: {type: Sequelize.STRING, allowNull: false}
});


module.exports = Book;