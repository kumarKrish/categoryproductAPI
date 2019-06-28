const express = require('express');
const router = express.Router();
const ProductsController = require('../Controllers/products');

router.route('/:categoryId')
      .get(ProductsController.index)

module.exports = router;
