import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  detailedDescription: {
    type: String,
    required: true,
  },
  texture: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  size: {
    width: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
  },
  favorite: {
    type: Boolean,
    required: true,
    default: false,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
