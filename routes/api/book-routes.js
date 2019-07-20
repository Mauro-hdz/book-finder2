const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/") 
.get(booksController.findAll)
.post(booksController.//Something goes here)


router
.route("api/books")
.get() //method to read all books from the db
.put() //method to post book to the db
// "api/books/:id" for the following route
.delete()

module.exports = router;