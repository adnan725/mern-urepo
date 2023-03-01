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
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
