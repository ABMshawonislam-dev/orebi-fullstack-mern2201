const nodemailer = require("nodemailer");
const otpTemplate = require("../emailTemplate/otpTemplate");
// async function emailSend(email, data, template) {
async function emailSend(email, ...agr) {
  console.log(email, agr[1]);

  let template = agr[1];

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "citmern2201@gmail.com",
      pass: "trkjaprryczajqzi",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "citmern2201@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Varification OTP",
    html: template(agr[0]),
  });
}

module.exports = emailSend;
