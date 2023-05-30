const Merchant = require("../models/merchantModel.js");

async function allMerchantController(req, res) {
  try {
    const allMerchant = await Merchant.find({}).select({
      phoneNumber: 0,
      voterIdNumber: 0,
    });
    return res.send(allMerchant);
  } catch (error) {
    console.log(error);
    return res.send({ error: "Internal server error" });
  }
}

module.exports = allMerchantController;
