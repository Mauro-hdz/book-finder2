const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = function(app) {

app.get("/scrape-articles", function(req, res) {
// When this route is hit, it is supposed to go scrape again, and delete the old articles
    res.redirect("/");
    console.log("NEW ARTICLES SCRAPED!!!");
});

app.get("/clear", function() {
    // When this route is hit, it is supposed to clear the index page of all loaded articles
})

};