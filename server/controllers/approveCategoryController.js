const Category = require("../models/categoryModel.js")

async function approveCategoryController(req, res) {
    const { id } = req.params;
    try {
        let approvedCategory = await Category.findByIdAndUpdate(
            { _id: id },
            { $set: { status: "approved" } },
            { new: true }
        )
        return res.status(200).json(
            {
                message: "Category approved successfully",
                data: approvedCategory
            }
        )
    } catch (error) {
        return res.status(500).json({ message: "Server Error" })
    }
}

module.exports = approveCategoryController