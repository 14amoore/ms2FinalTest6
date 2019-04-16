const express = require('express');
const router = express.Router();

// Require the controllers, which need to be created
const product_controller = require('../controllers/product.controller');

// a test url to check our work
router.get('/test', product_controller.test);

module.exports = router;
