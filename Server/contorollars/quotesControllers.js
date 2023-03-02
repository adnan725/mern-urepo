const Quote = require("../modals/quoteModal");

exports.getAllQuotes = async (req, res) => {
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
};

exports.createQuote = async (req, res) => {
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
};

exports.deleteQuote = async (req, res) => {
  const id = req.params.id;
  Quote.deleteOne({ _id: id });
};
