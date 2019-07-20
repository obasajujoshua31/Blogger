const { Router } = require("express");
const middlewares = require("../middlewares/validate");
const auth = require("../middlewares/authenticate");
const userController = require("../controllers/user");
const router = Router();

router.post(
  "/register",
  middlewares.validateUserRegistration(),
  userController.registerUser()
);
router.get("/user", auth.authenticateUser, userController.getUserProfile());
router.post("/login", userController.logInUser());

module.exports = router;
