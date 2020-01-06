const Book = require("../models/books");

module.exports = {
    findAll: (req, res) => {
        Book.findAll()
        .then(response => {
            console.log(response);
            res.json({response});
        })
        .catch(err => {console.log('Error at findAll: ' + err)});
    },

    findOne: (req, res) => {
        // Book.findAll({
        //     where: {
        //         //some property to be determined
        //     }
        // })
        res.send('You made a request to findOne')
    },

    saveBook: (req, res) => {
        console.log(req.body)
        Book.create({
            //properties of our model with requested info
            title: req.body.title,
            subtitle: req.body.subtitle,
            author: req.body.author,
            summary: req.body.description,
            thumbnail: req.body.thumbnail,
            purchaseLink: req.body.purchaseLink,
            id: req.body.id
        })
        .then(response => {
            console.log(response, 'Book successfully created');
            res.send('Book has been saved')
          })
        .catch(err => {
            console.log('Error at saveBook: ' + err);
            res.send('Book was unable to be saved')
        });
    },

    deleteBook: (req, res) => {
        console.log(req.params)
        Book.destroy({
            where: {
                //properties to look for to delete the object
                id: req.params.id
            }
        })
        .then(response => {
            res.send('Book was successfully deleted')
            console.log(response, 'Book successfully deleted')
        })
        .catch(err => {console.log('Error at deleteBook: ' + err)});
    }

};