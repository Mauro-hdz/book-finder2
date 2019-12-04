const path = require('path');
const express = require("express");
const app = express();
const cheerio = require("cheerio");
const axios = require("axios");

module.exports = function(app) {
    //Home route
app.get("/", function(req, res) {

    axios.get("https://finance.yahoo.com/news/").then(function(response) {

        const $ = cheerio.load(response.data);
        const results = [];

            
        $("h3").each(function(i, element) {
        
                const title = $(element).text();
        
               const link = $(element).children().attr("href");
        
               results.push({
                   title: title, 
                   link:"https://finance.yahoo.com" + link
                });
        });
        console.log(results);
        res.render("index", {article: results});
        });
        




});

app.get("/saved-articles", function(req, res) {
    
res.render("saved")

});



};