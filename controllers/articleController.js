const Article = require("../models/articlesData");

module.exports = {
    allArticles: (req, res) => {
        Article.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err);
            console.log('allArticles failed at: ' + err)
        });
    },
    createArticle: (req, res) => {
        Article.create(req.body)
        .then(data => {
            console.log('Data Successfully Added: ' + data)
            res.json(data)
        })
        .catch(err => console.log('Error occurred: ' + err));
    },
    deleteArticle: (req, res) => {
        Article.findByIdAndDelete(req.params.id)
        .then((response) => {
            console.log("Item deleted from Article collection: " + response)
            res.json("Item deleted: " + response)
        })
        .catch(err => console.log("deleteArticle error: " + err));
    },
    updateNote: (req, res) => {
        Article.findByIdAndUpdate(req.params.id, {note: req.body.note})
        .then(data => {
            console.log('Update Successfull')
            res.json('Update Successfull')
        })
        .catch(err => console.log("updateNote error: " + err));
    }

}

