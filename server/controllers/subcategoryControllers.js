const subcategoryModel = require("../models/subcategoryModel.js");

module.exports = {
  async index(req, res) {
    const subcategory = await subcategoryModel.find({});

    res.json({
      data: subcategory,
    });
  },
  
  create(req, res) {
    const { title, description, discount, status } = req.body;

    const subcategory = new subcategoryModel({
      title,
      description,
      discount,
      status,
    });

    subcategory.save();

    res.json({
      success: "Subcategory Create Doen!",
    });
  },

  async update(req, res) {
    const { _id, status } = req.body;

    // const existingId = await subcategoryModel.find({ _id });

    try {
      const existingId = await subcategoryModel.find({ _id });
      const updateSubcategory = await subcategoryModel.findOneAndUpdate(
        { _id },
        { $set: { status: status } },
        { new: true }
      );
      return res.send({ success: "Subcategory Updated" });
    } catch (err) {
      return res.send({ success: "Subcategory not Match" });
    }

    // if (existingId.length > 0) {
    //   const updateSubcategory = await subcategoryModel.findOneAndUpdate(
    //     { _id },
    //     { $set: { status: "approved" } },
    //     { new: true }
    //   );
    //   return res.send({ success: "Subcategory Updated" });
    // } else {
    //   return res.send({ success: "Subcategory not Match" });
    // }
  },
};
