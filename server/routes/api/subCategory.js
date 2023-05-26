const express = require("express");
const router = express.Router();
const subcategoryControllers = require("../../controllers/subcategoryControllers.js");

router.get("/", subcategoryControllers.index);
router.post("/create", subcategoryControllers.create);
router.post("/update", subcategoryControllers.update);

module.exports = router;
