const express = require("express");
const loginControllers = require("../../controllers/loginControllers.js");
const router = express.Router();
const registrationControllers = require("../../controllers/registrationControllers.js");

const forgetPasswordController = require("../../controllers/forgetPasswordController.js");

const matchOtpController = require("../../controllers/matchOtpController.js");
const newPasswordController = require("../../controllers/newPasswordController.js");

router.post("/registration", registrationControllers);
router.post("/login", loginControllers);
router.post("/forgetpassword", forgetPasswordController);
router.post("/matchOtp", matchOtpController);
router.post("/newPassword", newPasswordController);

module.exports = router;
