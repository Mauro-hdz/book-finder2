const express = require('express')
const app = express();
// const router = express.Router()
// const path = require('path');
const bookRoutes = require('./book-routes');

app.use('/api/books', bookRoutes);
// bookRoutes.initialize(App)

// If no API routes are hit, send the React app
// app.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });

  // app.get('*', function (req, res) {
  //   const index = path.join(__dirname, 'build', 'index.html');
  //   res.sendFile(index);
  // });

module.exports = app;
