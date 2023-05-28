const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
    unique: false,
  },
  image: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
    default:null
  },
  status: {
    type: String,
    default: "waiting",
  },
});

module.exports = mongoose.model("Product", productSchema);