const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemsController.js");

router.route("/").get(itemsController.index).post(itemsController.addItem);

router.route("/:id").get(itemsController.singleItem);

module.exports = router;
