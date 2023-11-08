import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/MongoDB.js";
import ImportData from "./DataImport.js";

dotenv.config();
connectDB();
const app = express();

app.use(bodyParser.json());
app.use(cors());

//MongoDB API
app.use("/api/import", ImportData);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
