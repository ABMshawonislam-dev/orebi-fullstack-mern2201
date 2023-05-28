const express = require("express");
const {productControllers,getAllProducts,updateStatus} = require("../../controllers/productControllers");
const router = express.Router();



router.post("/productupload", productControllers);
router.post("/status", updateStatus);
router.get("/getAllProducts", getAllProducts);

module.exports = router;