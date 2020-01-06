const booksController = require("../../controllers/booksController");

    module.exports = (app) => {
        app.route('/api/books')
        .get(booksController.findAll)//function to res.json all books from model

        app.route('/api/books/:id')
        .get(booksController.findOne)//function to res.json requested book from model

        app.route('/api/books/add')
        .post(booksController.saveBook)//function to add a new book to the db

        app.route('/api/books/delete/:id')
        .delete(booksController.deleteBook)//function to delete the book from the dbs
    };
    




