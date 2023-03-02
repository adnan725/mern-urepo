const connectToDB = require("./config/connectToDB");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const cors = require("cors");
const quotesController = require("./contorollars/quotesControllers");

app.use(cors());
mongoose.set("strictQuery", false);

// connect to the database
connectToDB();

//Routes

app.get("/quotes", quotesController.getAllQuotes);

app.post("/quotes", quotesController.createQuote);

// Server
const host = "localhost";
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`MERN-App is running on http://${host}:${port}`);
});
