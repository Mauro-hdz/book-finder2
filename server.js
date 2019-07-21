const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}



app.use(routes);

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/booksDB', {useNewUrlParser: true});

app.listen(PORT, () => console.log(`Now listening on: http://localhost:${PORT}`));





