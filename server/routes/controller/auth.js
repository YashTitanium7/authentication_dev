const User = require("../../database/models/userSchema"),
  bcrypt = require('bcryptjs'),
  tokenHandler = require('./TokensHandler')

// @desc Registration Route
exports.register = async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  if (!name || !email || !password || !cpassword)
    return res.status(400).json({ success: false, error: "R_AFSP" });
  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ success: false, error: "R_EAEX" });
    if (password !== cpassword)
      return res.status(400).json({ success: false, error: "R_PDMA" });
    const user = new User({ name, email, password }),
      userRegister = await user.save();
    res.status(201).json({ success: true, message: "R_RS" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

// @desc Login Route
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ success: false, error: "L_AFSP" });
  try {
    const user = await User.findOne({ email });
    if (!user) 
      return res.status(400).json({ success: false, error: "L_EDEX" });
    const passVerified = await bcrypt.compare(password, user.password);
    if (!passVerified)
      return res.status(400).json({ success: false, error: "L_ICD" });
    const token = tokenHandler.genToken(user);
    res.json({ success: true, message: "L_LS", token });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
  