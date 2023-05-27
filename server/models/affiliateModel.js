const mongoose = require("mongoose");
const { Schema } = mongoose;

const affiliateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telephone: {
    type: String,
  },
  voterID: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "waiting",
  },
});
module.exports = mongoose.module("Affiliates", affiliateSchema);
