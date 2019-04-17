const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {type: String, max: 100},
  price: {type: Number},
});

// export module
module.exports = mongoose.model('Product', productSchema);
