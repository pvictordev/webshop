import express from "express";
import Product from "./Models/ProductModel.js";
import productsData from "./Data/productsData.js";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

ImportData.post(
  "/product",
  asyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const importProduct = await Product.insertMany(productsData);
    res.send({ importProduct });
  })
);

export default ImportData;
