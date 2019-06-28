const Category = require('../models/categories');
const Product = require('../models/products');
module.exports = {
deleteCategory: (req,res,next) => {
  const id = parseInt(req.params["categoryId"]);
  Product.find({"category.id":id})
    .exec()
    .then(docs => {
           Product.remove({"category.id":id})
          .exec()
          .then(result => {
                 Category.remove({"id":id})
                .exec()
                .then(result => {
                  res.status(200).json(docs);

                })
                .catch(err => {
                  res.status(500).json({
                    error:err
                  });
                });
          })
          .catch(err => {
            res.status(500).json({
              error:err
            });
          });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
  }

};
