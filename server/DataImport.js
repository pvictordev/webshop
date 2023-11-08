import express from "express";
import Product from "./Models/ProductModel.js";
import productsData from "./Data/productsData.js";

const ImportData = express.Router();

ImportData.post("/product", async (req, res) => {
  await Product.remove({});
  const importProduct = await Product.insertMany(productsData);
  res.send({ importProduct });
});

export default ImportData;
