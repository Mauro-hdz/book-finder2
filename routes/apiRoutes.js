const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");
const jq = require('jquery');
const articleController = require("../controllers/articleController");

module.exports = function(app) {

app.get("/scrape-articles", function(req, res) {
// When this route is hit, it is supposed to go scrape again, and delete the old articles
    res.redirect("/");
    console.log("NEW ARTICLES SCRAPED!!!");
}),

app.get("/saved", articleController.allArticles);

};