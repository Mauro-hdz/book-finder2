require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('saved_books_db', 'root', process.env.mySQL_PW);

const Book = sequelize.define('book', {
    title: {
        type: Sequelize.STRING
    },
    subtitle: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    thumbnail: {
        type: Sequelize.STRING
    },
    purchaseLink: {
        type: Sequelize.STRING
    }
});
