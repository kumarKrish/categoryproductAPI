const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  id: Number,
  name: String
  });

const Category = mongoose.model('category', categorySchema);

module.exports = Category;
