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
  phone: {
    type: String,
  },
  voterID: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "waiting",
    enum: ["approved", "rejected"],
  },
});
module.exports = mongoose.model("Affiliates", affiliateSchema);
