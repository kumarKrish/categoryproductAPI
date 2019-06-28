const express = require('express');
const router = express.Router();
const CategoriesController = require('../Controllers/categories');



router.route('/:CategoryId')
      .delete(CategoriesController.deleteCategory);


module.exports = router;
