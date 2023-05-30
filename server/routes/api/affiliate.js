const express = require("express");
const router = express.Router();
const affiliateController = require("../../controllers/affiliateController.js");

router.post("/registration", affiliateController);

module.exports = router;
