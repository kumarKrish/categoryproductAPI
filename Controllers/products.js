const Product = require('../models/products');

module.exports = {

  index: (req,res,next) => {
    // get all the products

    Product.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })

  },

deleteProduct: (req,res,next) => {
    const id = req.params.productId;
    Product.remove({_id:id})
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error:err
      });
    });
  }
};
