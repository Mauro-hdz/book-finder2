const articleController = require("../controllers/articleController");
//App parameter comes from server.js
module.exports = function(app) {

app.post("/api/add", articleController.createArticle);

app.get("/api/saved", articleController.allArticles);

app.delete("/api/delete/:id", articleController.deleteArticle);

app.post("/api/update/:id", articleController.updateNote);

};