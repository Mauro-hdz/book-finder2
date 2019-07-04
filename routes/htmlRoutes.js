const path = require('path');
const express = require("express");
const app = express();


module.exports = function(app) {
    // example route
app.get("/", function(req, res) {
res.render("index", article);

// if (error) console.log(error);
});

app.get("/saved-articles", function(req, res) {
    
res.render("saved")

});



};