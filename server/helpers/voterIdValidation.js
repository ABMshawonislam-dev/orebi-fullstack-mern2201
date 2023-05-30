function voterIdValidation(voterId) {
  if (!voterId) {
    return false;
  }

  let pattern = /^[0-9]+$/gi;
  let result = pattern.test(voterId);

  if (!result) {
    return false;
  }

  return true;
}

module.exports = voterIdValidation;
