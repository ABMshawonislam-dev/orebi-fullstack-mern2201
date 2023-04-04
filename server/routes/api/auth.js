const express = require("express");
const router = express.Router();
const registrationControllers = require("../../controllers/registrationControllers.js")


router.post("/registration", registrationControllers);

module.exports = router;
