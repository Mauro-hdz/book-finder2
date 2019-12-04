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
        })
        .catch(err => console.log('Error occurred: ' + err))
    }

}

