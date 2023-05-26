const express = require("express");
const router = express.Router();

const authentication = require("./auth.js");
const subcategory = require("./subCategory.js");

router.use("/auth", authentication);
router.use("/subcategory", subcategory);
//localhost:8000/auth

http: module.exports = router;
