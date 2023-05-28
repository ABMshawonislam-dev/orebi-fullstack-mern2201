const express = require("express");
const router = express.Router();
const products = require("./product")

const authentication = require("./auth.js");

router.use("/auth", authentication);
router.use("/products", products );
//localhost:8000/auth

http: module.exports = router;
