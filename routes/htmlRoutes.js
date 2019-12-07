const htmlController = require("../controllers/htmlController");
const path = require('path');

module.exports = function(app) {
    //Home route scrapes articles and sends index file
app.get("/", htmlController.scrapeArticles);

app.get("/saved-articles", htmlController.savedArticles);



};