const Product = require('../models/products');

module.exports = {

  index: (req,res,next) => {
    // get all the products
    const id = req.params["categoryId"];
    Product.find({"category.id":parseInt(id)})
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

  }
};
