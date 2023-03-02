const express = require("express");
const quotesController = require("../contorollars/quotesControllers");

const router = express.Router();

router
  .route("/quotes")
  .get(quotesController.getAllQuotes)
  .post(quotesController.createQuote);

router.route("/quotes/:id").delete(quotesController.deleteQuote);

module.exports = router;
