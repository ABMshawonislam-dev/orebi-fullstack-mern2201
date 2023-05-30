const express = require("express");
const merchantRegistrationController = require("../../controllers/merchantRegistrationController.js");
const merchantStatusController = require("../../controllers/merchantStatusController.js");
const allMerchantController = require("../../controllers/allMerchantController.js");
const router = express.Router();

router.post("/merchantRegistration", merchantRegistrationController);
router.post("/merchantStatus", merchantStatusController);
router.get("/allMerchant", allMerchantController);

module.exports = router;
