const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController.js");

router
  .route("/")
  .get(transactionsController.index)
//   .post(transactionsController.addTransaction);

// router.route("/:id").get(transactionsController.singleTransaction);

module.exports = router;
