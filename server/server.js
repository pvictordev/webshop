//const express = require('express');
import express from "express";
import productsData from "./Data/productsData.js";

const app = express();

//load productsData from server
app.get("/api/productsData", (req, res) => {
    console.log(productsData)
  res.json(productsData);
});
//load product by id
app.get("/api/productsData/:id", (req, res) => {
  const product = productsData.find((x) => x.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 5000;
app.listen(port, console.log(`Server started on port ${port}`));
