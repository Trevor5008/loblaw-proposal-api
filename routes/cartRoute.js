const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController.js");

router.route("/:id").get(cartController.getUsersCart);
// .post(cartController.addCart);

// router
//   .route("/:id")
//   .get(cartController.singleCart)
//   .put(cartController.updateCart)
//   .delete(cartController.deleteCart);

module.exports = router;
