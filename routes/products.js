const express = require('express');
const router = express.Router();
const ProductsController = require('../Controllers/products');



router.route('/')
  .get(ProductsController.index)


router.route('/:productId')

  .delete(ProductsController.deleteProduct);


module.exports = router;
