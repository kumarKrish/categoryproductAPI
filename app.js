const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const products = require('./routes/products');
const categories = require('./routes/categories');
const logger = require('morgan');
const mongoose = require('mongoose');
mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost:27017/store',{useNewUrlParser:true})


// middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(logger('dev'));
// routes
app.use('/products', products);
app.use('/categories',categories);

// catch 404 errors and forward them to error handler
app.use((req,res,next) => {
  const err = new Error('not Found');
  err.status = 404;
  next(err);
})

//error handler function
app.use((err,req,res,next) => {
  const status = err.status || 500;
  // respond to client
  res.status(status).json(err)
  // respond  to ourselves
  console.error(err);
})


const port = app.get('port') || 3000;
app.listen(port,() =>  {
  console.log(`server is listening on port ${port}`);
})
