const jwt = require('jsonwebtoken')

exports.genToken = user => {
  const { name, email } = user
  let token = jwt.sign({ name, email }, process.env.JWT_SECRET);
  return token;
}

