const emailValidation = require("../helpers/emailValidation.js");
const nameValidation = require("../helpers/nameValidation.js");
const voterIdValidation = require("../helpers/voterIdValidation.js");

const AffiliatesUser = require("../models/affiliateModel.js");
const User = require("../models/registrationModel.js");

async function affiliateController(req, res) {
  const { name, email, phone, voterId } = req.body;
  if (!nameValidation(name)) {
    return res.send({ error: "Name is required and number not allow" });
  }

  if (!emailValidation(email)) {
    return res.send({ error: "Valid Email Required" });
  }
  if (!voterIdValidation(voterId)) {
    return res.send({ error: "Number is required and alphabet not allow" });
  }

  let existingEmail = await User.find({ email });

    if (existingEmail.length <= 0) {
      return res.send({ error: "Email not Found" });
    }
  let userData = new AffiliatesUser({
    name,
    email,
    phone,
    voterId,
  });
  userData.save();

  //   let verifyStatus = await AffiliatesUser.findOneAndUpdate({ email }, { $set: { status: "approved" } }, { new: true });

  res.json({success: "Registration Successful. You are Affiliate now"});

//  for test
  let fromMongodb = await AffiliatesUser.find({});
  console.log(fromMongodb);

}

module.exports = affiliateController;
