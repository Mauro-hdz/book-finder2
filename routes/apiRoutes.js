const articleController = require("../controllers/articleController");
//App parameter comes from server.js
module.exports = function(app) {

app.get("/scrape-articles", function(req, res) {
// When this route is hit, it is supposed to go scrape again, and delete the old articles
    res.redirect("/");
    console.log("NEW ARTICLES SCRAPED!!!");
}),
app.post("/add", articleController.createArticle);

app.get("/saved", articleController.allArticles);

};