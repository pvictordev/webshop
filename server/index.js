const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
//const Products = require("./Data/Products.js");
import productsData from "./Data/productsData.js";

app.use(cors());
app.use(express.json());

//load products
app.get("/api/Products", (req, res) => {
  res.json(productsData);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
