const express = require('express');
const exphbs  = require('express-handlebars');
const axios = require('axios');
const cheerio = require('cheerio')
const mongoose = require('mongoose');
const mLogger = require('morgan');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


// connecting mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/scrapeDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true   
    })
.catch (error => (console.log("Hey bud we got an error: ", error)));

// including routes
require("./routes/htmlRoutes") (app);
require("./routes/apiRoutes") (app);

app.listen(PORT, function(){
    console.log("App listening on port: " + PORT);
});







