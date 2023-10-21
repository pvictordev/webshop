const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const ProductModel = require('./models/Products');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/webshopDB");

const port = process.env.PORT || 5000;

app.get('/getProducts', (req, res) => {
    ProductModel.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})