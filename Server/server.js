const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
  });

app.get("/hello", (req, res) => {
  res.send("hello from Server");
});

const host = "localhost";
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`MERN-App is running on http://${host}:${port}`);
});
