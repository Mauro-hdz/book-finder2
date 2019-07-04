const express = require("express");
const app = express();
const axios = require("axios");
module.exports = function(app) {

app.get("/scrape-articles", function() {
    axios.get("https://finance.yahoo.com/news/").then(function(response) {

const $ = cheerio.load(response.data);

const results = [];

$("h3").each(function(i, element) {

        const title = $(element).text();

       const link = $(element).children().attr("href");

       results.push({
           title: title, 
           link: link
        });

        console.log(results)

});

});
})

};