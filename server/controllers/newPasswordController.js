function newPasswordController(req, res) {
  const { email, password } = req.body;

  // find email and update and return new object
  //   const randomOtp = await User.findOneAndUpdate(
  //     { email },
  //     { $set: { password: password } },
  //     { new: true }
  //   );
}

module.exports = newPasswordController;
