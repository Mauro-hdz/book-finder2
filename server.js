const express = require('express');
const exphbs  = require('express-handlebars');
const axios = require('axios');
const cheerio = require('cheerio')
const mongoose = require('mongoose');
const mLogger = require('morgan');
const app = express();

const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.listen(PORT, function(){
    console.log("App listening on port: " + PORT);
});


// I will connect a mongooseDB to the server
// When the user sees an article he wants to save the article will be saved to the db 
// When the user wants to leave a note attached to the article it will be saved




// https://finance.yahoo.com/news/  
// I will scrape from the site above

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