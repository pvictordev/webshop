import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/MongoDB.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import ImportData from "./DataImport.js";

dotenv.config();
connectDB();
const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://webshop-smoky.vercel.app/",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

//MongoDB API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);

//error handler
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));

  // "proxy": "http://localhost:5000/"