const Category = require("../models/categoryModel.js")

async function categoryController(req, res) {
    try {
        const cateroies = await Category.find()
        return res.status(200).json(
            {
                message: "Success",
                data: cateroies
            }
        )
    } catch (error) {
        return res.status(500).json({ message: "Server Error" })
    }
}

module.exports = categoryController