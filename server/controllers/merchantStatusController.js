const emailValidation = require("../helpers/emailValidation");
const Merchant = require("../models/merchantModel.js");

async function merchantStatusController(req, res) {
  const { email, status } = req.body;

  if (!email) {
    return res.send({ error: "Email required" });
  } else if (!emailValidation(email)) {
    return res.send({ error: "Valid email required" });
  } else if (!status) {
    return res.send({ error: "Status required" });
  }

  try {
    const existingMerchant = await Merchant.find({ email });
    if (!existingMerchant.length > 0) {
      return res.send({ error: "Merchant not found" });
    }

    await Merchant.findOneAndUpdate(
      { email },
      { status: status },
      { new: true }
    );

    if (status === "approved") {
      return res.send({ success: "Approved merchant request" });
    } else if (status === "rejected") {
      return res.send({ success: "Rejected merchant request" });
    }
  } catch (error) {
    console.log(error);
    return res.send({ error: "Internal server error" });
  }
}

module.exports = merchantStatusController;
