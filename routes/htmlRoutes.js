const path = require('path');
const express = require(express);
const router = express.Router();
module.exports = function(app) {
    // example route
router.get("/", function(req, res) {
res.render("index")

});

router.get("/saved-articles", function(req, res) {
    
res.render("saved")

});



};