const Book = require("../models/books");

module.exports = {
    findAll: (req, res) => {
        // Book.findAll()
        // .then(response => {
        //     console.log(response);
        //     res.json({user: billybob});
        // })
        // .catch(err => {console.log('Error at findAll: ' + err)});
        res.send('You  made a request to findall')
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
        // Book.create({
        //     //properties of our model with requested info
        // })
        // .then(response => {
        //     console.log(response, 'Book successfully destroyed');
        //   })
        // .catch(err => {console.log('Error at saveBook: ' + err)});
    },

    deleteBook: (req, res) => {
        // Book.destroy({
        //     where: {
        //         //properties to look for to delete the object
        //     }
        // })
        // .then(response => {
        //     console.log(response, 'Book successfully deleted')
        // })
        // .catch(err => {console.log('Error at deleteBook: ' + err)})
    }

};