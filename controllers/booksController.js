const db = require("../models/books");

module.exports = {
    findAll: function(req, res) {
        db.Book
        .find(req.query)
        .then(dbmodel => res.json(dbmodel))
        .catch(err => res.status(422).json(err));

    },

    saveBook: function(req, res) {
        db.Book
        .create(req.body)
        .then(dbmodel => res.json(dbmodel))
        .catch(err => res.status(422).json(err));
    },

    deleteBook: function(req, res) {
        db.Book
        .findById({_id: req.params.id})
        .then(dbmodel => dbmodel.remove())
        .then(dbmodel => res.json(dbmodel))
        .catch(err => res.status(422).json(err));

    }

};