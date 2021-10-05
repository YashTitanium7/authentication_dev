const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || require("../../../config.json").JWT_SECRET

exports.genToken = (user) => {
  const { name, email } = user;
  let token = jwt.sign(
    { name, email },
    JWT_SECRET
  );
  return token;
};
