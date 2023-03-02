const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const quotesRouter = require("./routes/quotesRoutes");

const app = express();

app.use(cors());
mongoose.set("strictQuery", false);

app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

app.use("/", quotesRouter);

module.exports = app;
