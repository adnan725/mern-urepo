const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  name: {
    type: "string",
    unique: true,
    trim: true,
  },
  email: {
    type: "string",
    unique: true,
    trim: true,
  },
  heading: {
    type: "string",
    unique: true,
    trim: true,
  },
  content: {
    type: "string",
    unique: true,
    trim: true,
  },
  timeStamp: true,
});

const Quote = new model("Quote", quoteSchema);
