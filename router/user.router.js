const router = require(`express`).Router();
const controller = require("../controller/index");
const validator = require("../validation/index");

router.post("/register", controller.userController.register);
router.get("/getAllUsers", controller.userController.getAllUsers);
router.get("/getUserById/:id", controller.userController.getUserById);
router.get("/getUserByName/:name", controller.userController.getUserByName);
router.get(
  "/getUserBySalary/:salary",
  controller.userController.getUserBySalary
);
router.post("/login", controller.userController.login);
router.put("/resetPassword", controller.userController.resetPassword);
router.put("/updateUser/:id", controller.userController.updateUser);
router.put(
  "/updateProfilePhoto/:id",
  controller.userController.updateProfilePhoto
);

module.exports = { user: router };
