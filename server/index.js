const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ProductModel = require("./models/Products");
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/webshopDB");

app.use(cors());

app.use(express.json());

app.get("/getProducts", (req, res) => {
  ProductModel.find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
