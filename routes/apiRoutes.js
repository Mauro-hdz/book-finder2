const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = function(app) {

app.get("/scrape-articles", function() {
// When this route is hit, it is supposed to go scrape again, and delete the old articles
    axios.get("https://finance.yahoo.com/news/").then(function(response) {

const $ = cheerio.load(response.data);

const results = [];

$("h3").each(function(i, element, results) {

        const title = $(element).text();

       const link = $(element).children().attr("href");

       results.push({
           title: title, 
           link:"https://finance.yahoo.com" + link
        });


});
console.log(results)
res.render("index", {article: results});

});
});

app.get("/clear", function() {
    // When this route is hit, it is supposed to clear the index page of all loaded articles
})

};