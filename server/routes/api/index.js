const express = require("express");
const router = express.Router();

const authentication = require("./auth.js");
const affiliate = require("./affiliate.js");

router.use("/auth", authentication);
router.use("/affiliate", affiliate);
//localhost:8000/auth

http: module.exports = router;
