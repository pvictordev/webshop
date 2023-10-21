const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  texture: String,
  weight: String,
  size: {
    width: 10,
    height: 15,
    depth: 5,
  },
  category: String,
});

const ProductModel = mongoose.model('Products', ProductSchema);

module.exports = ProductModel;