const path = require('path');
const express = require("express");
const app = express();
const cheerio = require("cheerio");
const axios = require("axios");

module.exports = function(app) {
    // example route
app.get("/", function(req, res) {

    const results = [];


    axios.get("https://finance.yahoo.com/news/").then(function(response) {

        const $ = cheerio.load(response.data);
        
        
        $("h3").each(function(i, element) {
        
                const title = $(element).text();
        
               const link = $(element).children().attr("href");
        
               results.push({
                   title: title, 
                   link: link
                });
        
                console.log(results)
                res.render("index", {article: results});
        
        });
        
        });
        



// if (error) console.log(error);

});

app.get("/saved-articles", function(req, res) {
    
res.render("saved")

});



};