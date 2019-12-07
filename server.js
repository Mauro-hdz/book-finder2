const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
//Set up handlebars
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
//Handles JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// connecting mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/scrapeDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true   
    })
    .catch (error => (console.log("Mongoose Connection Error: ", error)));

// including routes
require("./routes/htmlRoutes") (app);
require("./routes/apiRoutes") (app);

app.listen(PORT, function(){
    console.log("App listening on port: " + PORT);
});







