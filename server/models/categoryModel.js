const mongoose = require("mongoose")
const { Schema } = mongoose

const categorySchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    discount: {
        type: Number,
    },
    status: {
        type: String,
        default: "waiting",
        enum: ["approved", "rejected", "waiting"]
    }
})

module.exports = mongoose.model("Category", categorySchema)