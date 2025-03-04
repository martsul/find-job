const Router = require("express").Router;
const employmentsControllers = require("../controllers/employments-controllers");
const userController = require("../controllers/user-controller");
const { body } = require("express-validator");

const router = new Router();

router.get("/employments/:id", employmentsControllers.getEmploymentDetails);
router.get("/employments", employmentsControllers.getAllEmployments);
router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 4, max: 32 }),
  userController.registration
);
router.get("/activate/:link", userController.activate);
router.post("/logout", userController.logout);
router.post("/login", userController.login);
router.get("/refresh", userController.refresh);

module.exports = router;
