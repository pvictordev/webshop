import express from "express";
import productsData from "./Data/productsData.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/MongoDB.js";

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json());
app.use(cors());

//load productsData from server
app.get("/api/productsData", (req, res) => {
  res.json(productsData);
});
//load product by id
app.get("/api/productsData/:id", (req, res) => {
  const product = productsData.find((x) => x.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
