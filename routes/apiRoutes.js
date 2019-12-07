const articleController = require("../controllers/articleController");
//App parameter comes from server.js
module.exports = function(app) {


app.post("/add", articleController.createArticle);

app.get("/saved", articleController.allArticles);

};