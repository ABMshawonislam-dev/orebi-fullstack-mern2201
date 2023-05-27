const Category = require("../models/categoryModel.js")

async function addCategoryController(req, res) {
    const { title, description, discount, status } = req.body
    try {
        if (!title || !description) {
            return res.status(400).json({ message: "Title & Descripion fields are required" })
        }

        let category = new Category({
            title,
            description,
            discount,
            status,
        });

        await category.save()
        return res.status(200).json(
            {
                message: "Category saved Successfully",
                data: category
            }
        )
    } catch (error) {
        return res.status(500).json({ message: "Server Error" })
    }
}
module.exports = addCategoryController