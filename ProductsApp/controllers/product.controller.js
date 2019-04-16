const Product = require('../models/product.model');

// this is without sanitation or validation
exports.test = function(req, res) {
  res.send('Greetings from test controller!');
};
