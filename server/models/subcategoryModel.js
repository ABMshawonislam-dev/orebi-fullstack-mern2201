const mongoose = require("mongoose");
const { Schema } = mongoose;

const subcategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  discount: {
    type: String,
  },
  status: {
    type: String,
    default: "waiting",
    enum: ["approved", "rejected", "waiting"],
  },
});

module.exports = mongoose.model("Subcategory", subcategorySchema);
