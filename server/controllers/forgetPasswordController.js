const User = require("../models/registrationModel.js");
const numberGenerator = require("number-generator");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
const emailSend = require("../helpers/emailSend.js");
const otpTemplate = require("../emailTemplate/otpTemplate.js");
const emailTemplate = require("../emailTemplate/emailTemplate.js");
async function forgetPasswordController(req, res) {
  const { email } = req.body;

  const existingUser = await User.find({ email });

  const generator2 = await aleaRNGFactory(Date.now());

  const randomNumber = generator2.uInt32().toString().substring(0, 4);

  const randomOtp = await User.findOneAndUpdate(
    { email },
    { $set: { randomOtp: randomNumber } },
    { new: true }
  );

  emailSend(email, "alkdjlaksdj", emailTemplate);

  //   console.log(randomOtp);

  res.json({ success: "OTP send, Check your email" });
}

module.exports = forgetPasswordController;
