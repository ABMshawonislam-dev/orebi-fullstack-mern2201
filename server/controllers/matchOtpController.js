const User = require("../models/registrationModel.js")

async function matchOtpController(req,res){
    const {otp,email} = req.body

    const existingOtp = await User.find({email})

    if (existingOtp[0].randomOtp == otp){
        const randomOtp = await User.findOneAndUpdate({ email }, { $unset: {"randomOtp": ""} }, { new: true })
        return res.send({"success": "Otp Match"})
       
    }else{
        return res.send({ "success": "Otp not Match" })
    }



}

module.exports = matchOtpController