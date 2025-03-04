const Router = require("express").Router;
const employmentsControllers = require("../controllers/employments-controllers");
const userController = require("../controllers/user-controller");

const router = new Router();

router.get("/employments/:id", employmentsControllers.getEmploymentDetails);
router.get("/employments", employmentsControllers.getAllEmployments);
router.post("/registration", userController.registration);
router.post("/activate/:link", userController.activate);
router.post("/logout", userController.logout);
router.get("/login", userController.login);
router.post("/refresh", userController.refresh);
router.post("/users", userController.getUsers);



module.exports = router;
