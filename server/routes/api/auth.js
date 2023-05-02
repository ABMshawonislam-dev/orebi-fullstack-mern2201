const express = require("express");
const loginControllers = require("../../controllers/loginControllers.js");
const router = express.Router();
const registrationControllers = require("../../controllers/registrationControllers.js")


router.post("/registration", registrationControllers);
router.post("/login", loginControllers);

module.exports = router;
