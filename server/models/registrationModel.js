const mongoose = require("mongoose")
const { Schema } = mongoose

const  registrationSchema = new Schema({

    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telephone: {
        type: String,
        required: true
    },
    addressOne: {
        type: String,
    },
    addressTwo: {
        type: String,
    },
    city: {
        type: String,
    },
    postCode: {
        type: String,
    },
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    password:{
        type: String,
        required: true
    }


})

module.exports = mongoose.model("User", registrationSchema)