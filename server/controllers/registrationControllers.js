const emailValidation = require("../helpers/emailValidation.js")
const nameValidation = require("../helpers/nameValidation.js")
const User = require("../models/registrationModel.js")
const bcrypt = require('bcrypt');

async function registrationControllers(req, res) {
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
        password,
        randomOtp 
    } = req.body

    if(!nameValidation(firstName)){
        return res.send({"error": "Name is required and number not allow"})
        
    }

    if(!nameValidation(lastName)){
        return res.send({"error": "Name is required and number not allow"})
        
    }



    if(!emailValidation(email)){
        return res.send({"error": "Valid Email Required"})
    }

    let existingEmail = await User.find({email})

    console.log(existingEmail)

    if(existingEmail.length > 0){
        return res.send({"error": "Email alreafy exixts"})
    }

  


    bcrypt.hash(password, 10, function(err, hash) {
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
            password: hash 
        })
    
        userData.save()
    
        res.json({
            "success": "Registration Successful",
            "firstName": userData.firstName,
            "lastName": userData.lastName
        })
    });


    
}

module.exports = registrationControllers

