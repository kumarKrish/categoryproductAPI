const Category = require('../models/categories');
const Product = require('../models/products');
module.exports = {

deleteCategory: (req,res,next) => {
    const id = req.params.CategoryId;

    Product.find({"category.id":id})
    .exec()
    .then(docs => {
           Category.remove({_id:id})
          .exec()
          .then(result => {
           console.log(docs);
            res.status(200).json(result);

          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error:err
            });
          });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })



  }
};
