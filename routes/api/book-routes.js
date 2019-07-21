const express = require("express");
// const app = express()
const router = express.Router();
const booksController = require("../../controllers/booksController");

    router.route("/saved") 
    .get(booksController.findAll);
    // .post(booksController)//Something goes here)
    
    
    router
    .route("/saved/:id")
    //.create()
    .post(booksController.saveBook)
    // .delete()
    .delete(booksController.deleteBook)

    module.exports = router
    




