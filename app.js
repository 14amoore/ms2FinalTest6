const express = require('express');
const bodyParser = require('body-parser');

const product = require('./ProductsApp/routes/product.route');

// initialize the express app
const app = express();

app.use('/products', product);

const port = 8000;

app.listen(port, () => {
  console.log('Server is up and running on port ' + port);
});

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'https://cloud.mongodb.com/v2/5cb628d2c56c982fe1b18d78#access';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
