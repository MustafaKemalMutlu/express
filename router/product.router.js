const router = require("express").Router();
const controller = require("../controller/index");

router.post("/createProduct", controller.productController.createProduct);
router.put("/updateProduct/:id", controller.productController.updateProduct);
router.get("/getAllProduct", controller.productController.getAllProduct);
router.get("/getProductById/:id", controller.productController.getProductById);
router.get(
  "/getProductByName/:name",
  controller.productController.getProductByName
);
router.get(
  "/getProductByStock/:stock",
  controller.productController.getProductByStock
);
router.get(
  "/getProductByCategory/:category",
  controller.productController.getProductByCategory
);
router.get(
  "/getProductByPrice/:price",
  controller.productController.getProductByPrice
);

module.exports = { product: router };
