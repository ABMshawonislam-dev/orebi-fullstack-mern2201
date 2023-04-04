const express = require("express");
const router = express.Router();

const authentication = require("./auth.js");

router.use("/auth", authentication);
//localhost:8000/auth

http: module.exports = router;
