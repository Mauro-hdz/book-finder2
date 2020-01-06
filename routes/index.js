const path = require("path");
const router = require("express").Router();



//code for deployment/production
router.use(function(req, res) {
    res.sendFile( path.join(__dirname, '../client/build/index.html'));
  });

  module.exports = router