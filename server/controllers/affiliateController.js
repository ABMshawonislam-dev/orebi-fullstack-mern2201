const emailValidation = require("../helpers/emailValidation.js");
const nameValidation = require("../helpers/nameValidation.js");
const voterIdValidation= require("../helpers/voterIdValidation.js");
const User = require("../models/affiliateModel.js");

async function affiliateController(req, res) {
  const {
    name,
    email,
    phone,
    voterId
  } = req.body;

  console.log(req.body);
  if (!nameValidation(name)) {
    return res.send({ error: "Name is required and number not allow" });
  }

  if (!emailValidation(email)) {
    return res.send({ error: "Valid Email Required" });
  }
  if (!voterIdValidation(voterId)) {
    return res.send({ error: "Name is required and number not allow" });
  }

  let existingEmail = await User.find({ email });

  if (existingEmail.length > 0) {
    return res.send({ error: "Email alreafy exixts" });
  }

    let userData = new User({
        name,
        email,
        phone,
        voterId
    });

    userData.save();

    res.json({
      success: "Registration Successful. You are Affiliate now",
      name: userData.name,
      email: userData.email,
    });
}

module.exports = affiliateController;