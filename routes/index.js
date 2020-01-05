const path = require("path");
const router = require("express").Router();

//import our api routes here and this file gets exported to:
//server.js
router.use(require('./api/book-routes'))
//code for deployment/production
router.use(function(req, res) {
    res.sendFile( path.join(__dirname, '../client/build/index.html'));
  });

  module.exports = router