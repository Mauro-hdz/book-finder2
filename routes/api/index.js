const router = require('express').Router();
const bookRoutes = require('./book-routes');

router.use('/api/books', bookRoutes);

module.exports = Router;
