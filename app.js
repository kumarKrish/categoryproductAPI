const express = require('express')
const app = exports.app=express();
const products = require('./routes/products');
const categories = require('./routes/categories');
const logger = require('morgan');
const mongoose = require('mongoose');
//To connect to MongoDatabase with DB Name store
mongoose.connect('mongodb://localhost:27017/store',{useNewUrlParser:true})

// middlewares
app.use(logger('dev'));
// routes
app.use('/products', products);
app.use('/categories',categories);

const port = app.get('port') || 3000;
app.listen(port,() =>  {
  console.log(`server is listening on port ${port}`);
})
