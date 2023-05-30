const express = require("express");
const router = express.Router();

const authentication = require("./auth.js");
const merchant = require("./merchant.js");

router.use("/auth", authentication);
router.use("/merchant", merchant);
//localhost:8000/auth

http: module.exports = router;
