const Category = require("../models/categoryModel.js")

async function rejectCategoryController(req, res) {
    const { id } = req.params
    
    try {
        let rejectedCategory = await Category.findByIdAndUpdate(
            { _id: id },
            { $set: { status: "rejected" } },
            { new: true }
        )
        return res.status(200).json(
            {
                message: "Category Rejected",
                data: rejectedCategory
            }
        )
    } catch (error) {
        return res.status(500).json({ message: "Server Error" })
    }
}

module.exports = rejectCategoryController