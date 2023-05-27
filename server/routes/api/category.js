const express = require("express")
const router = express.Router()

const addCategoryController = require("../../controllers/addCategoryController.js")
const approveCategoryController = require("../../controllers/approveCategoryController.js")
const rejectCategoryController = require("../../controllers/rejectCategoryController.js")

router.post("/addCategory", addCategoryController)
router.post("/approveCategory/:id", approveCategoryController)
router.post("/rejectCategory/:id", rejectCategoryController)

module.exports = router