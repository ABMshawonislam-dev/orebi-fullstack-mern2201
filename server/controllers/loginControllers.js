const emailValidation = require("../helpers/emailValidation.js")
const nameValidation = require("../helpers/nameValidation.js")
const User = require("../models/registrationModel.js")
const bcrypt = require('bcrypt');

async function loginControllers(req, res) {
    const { 
        email,
        password 
    } = req.body



    if(!emailValidation(email)){
        return res.send({"error": "Valid Email Required"})
    }

    let existingEmail = await User.find({email})


    if(existingEmail.length > 0){

        bcrypt.compare(password, existingEmail[0].password, function(err, result) {
   
            if(result){
                res.json({
                    "success": "Login Successful",
                    "firstName": existingEmail[0].firstName,
                    "lastName": existingEmail[0].lastName
                })
            }else{

                res.send({"error": "Credential not match"}) 
            }
        });
        
    }else{
        res.send({"error": "Credential not match"}) 

    }


    
}

module.exports = loginControllers

