const Merchant = require("../models/merchantModel.js");
const emailValidation = require("../helpers/emailValidation.js");

async function merchantRegistrationController(req, res) {
  const { name, email, phoneNumber, voterIdNumber } = req.body;

  if (!name) {
    return res.send({ error: "Username required" });
  } else if (!emailValidation(email)) {
    return res.send({ error: "Valid email required" });
  } else if (!phoneNumber) {
    return res.send({ error: "Phone number required" });
  } else if (!voterIdNumber) {
    return res.send({ error: "Voter ID required" });
  }

  try {
    const existingMerchant = await Merchant.find({ email });
    const existingVoterId = await Merchant.find({ voterIdNumber });

    if (existingMerchant.length > 0) {
      return res.send({ error: "Merchant already exist" });
    }

    if (existingVoterId.length > 0) {
      return res.send({ error: "Voter Id number is already being used" });
    }

    const merchant = new Merchant({
      name,
      email,
      phoneNumber,
      voterIdNumber,
    });

    await merchant.save();
    return res.send({ success: "Merchant registration successfull" });
  } catch (error) {
    console.log(error);
    return res.send({ error: "Internal server error" });
  }
}

module.exports = merchantRegistrationController;
