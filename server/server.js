//const express = require('express');
import express from "express";
import productsData from "./Data/productsData.js";
const app = express();

//load productsData
app.get("/api/productsData", (req, res) => {
  res.json(productsData);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 5000;
app.listen(port, console.log(`Server started on port ${port}`));
