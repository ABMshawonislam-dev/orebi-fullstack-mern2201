const User = require("../models/registrationModel.js")

function registrationControllers(req, res) {
    const { 
        firstName,
        lastName,
        email,
        telephone,
        addressOne,
        addressTwo,
        city,
        postCode,
        country,
        state,
        password 
    } = req.body


    let userData = new User({
        firstName,
        lastName,
        email,
        telephone,
        addressOne,
        addressTwo,
        city,
        postCode,
        country,
        state,
        password 
    })

    userData.save()

    res.json(userData)
}

module.exports = registrationControllers

