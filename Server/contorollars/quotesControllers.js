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

  try {
    res.status(201).json({
      quote,
    });
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
};

exports.deleteQuote = async (req, res) => {
  const id = req.params.id;

  try {
    await Quote.deleteOne({ _id: id });
    res.status(204).send("Deleted successfully");
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
};
