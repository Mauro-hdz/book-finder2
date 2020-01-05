const express = require("express");
const app = express()
const booksController = require("../../controllers/booksController");
const bookModel = require('../../models/books');

    module.exports = () => {
        app.route('/')
        .get()//function to res.json all books from model

        app.route('/:id')
        .get()//function to res.json requested book from model

        app.route('/add')
        .post()//function to add a new book to the db

        app.route('/delete/:id')
        .delete()//function to delete the book from the dbs
    }
    




