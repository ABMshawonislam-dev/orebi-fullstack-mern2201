const User = require("../models/registrationModel.js")
const numberGenerator = require("number-generator");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
async function forgetPasswordController(req,res){
    const {email} =  req.body

    const existingUser = await User.find({email})

    const generator2 = await aleaRNGFactory(Date.now());

    const randomNumber = generator2.uInt32().toString().substring(0, 4)

    const randomOtp = await User.findOneAndUpdate({ email }, { $set: { "randomOtp": randomNumber } },{new:true})

    console.log(randomOtp) 
}

module.exports = forgetPasswordController
