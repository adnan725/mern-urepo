const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const Quote = require("./modals/quoteModal");
const app = express();
app.use(express.json());

mongoose.set("strictQuery", false);

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
  })
  .catch((error) => {
    console.log(`Database is not connected ${error}`);
  });

app.get("/quotes", async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json({
      quotes,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

app.post("/quotes", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const heading = req.body.heading;
  const content = req.body.content;

  const quote = await Quote.create({
    name,
    email,
    heading,
    content,
  });

  res.status(200).json({
    quote,
  });
});

const host = "localhost";
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`MERN-App is running on http://${host}:${port}`);
});
