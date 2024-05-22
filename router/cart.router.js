const router = require("express").Router();
const controler = require("../controller/index");

router.post("/addToCart", controler.cartController.addToCart);

module.exports = {
  cart: router,
};
