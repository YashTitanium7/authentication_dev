const bcrypt = require("bcryptjs");

exports.hash = async (password) => {
  const hash = await bcrypt.hash(password, 12);
  return hash;
};

exports.check = async (hashed, real) => {
  const correct = await bcrypt.compare(hashed, real);
  return correct;
};
