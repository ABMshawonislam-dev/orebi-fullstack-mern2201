const mongoose = require("mongoose");
const { Schema } = mongoose;

const merchantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  voterIdNumber: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    default: "waiting",
    enum: ["waiting", "approved", "rejected"],
  },
});

module.exports = mongoose.model("Merchant", merchantSchema);
