const User = require("../database/models/userSchema"),
  jwt = require("jsonwebtoken"),
  tokenHandler = require("./TokensHandler"),
  JWT_SECRET = process.env.JWT_SECRET,
  mailer = require("../controller/mailer"),
  hasher = require('./hasher')

// @desc Registration Route
exports.register = async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  if (!name || !email || !password || !cpassword)
    return res.status(400).json({ success: false, error: "AFSF" });
  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ success: false, error: "EAE" });
    if (password !== cpassword)
      return res.status(400).json({ success: false, error: "PDM" });
    const hashedPassword = await hasher.hash(password)
    const user = new User({ name, email, password: hashedPassword }),
      userRegister = await user.save();
    res.status(201).json({ success: true, message: "R_RS" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc Login Route
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ success: false, error: "AFSF" });
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, error: "EDE" });
    const passVerified = await hasher.check(password, user.password);
    if (!passVerified)
      return res.status(400).json({ success: false, error: "IC" });
    const token = tokenHandler.genToken(user);
    res.json({ success: true, message: "L_LS", token });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc Forgot Password Route
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, error: "AFSF" });
  try {
    const userInDatabase = await User.findOne({ email });
    if (!userInDatabase)
      return res.status(400).json({ success: false, error: "EDE" });
    const secret = JWT_SECRET + userInDatabase.password;
    const payload = {
      email: userInDatabase.email,
      id: userInDatabase._id,
      pstring: userInDatabase.password
    };
    const token = jwt.sign(payload, secret);
    const host = process.env.HOST_ADDR || "http://localhost:3000";
    const url = `${host}/resetP/${token}`;
    mailer.sendMail({
      to: email,
      subject: "Link to reset your password",
      text: `reset your password using the link below ${url}`,
    });
    return res.json({ success: true, message: "FP_EMSS" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

const updatePassword = async(_id, password) => {
  try {
    const result = await User.updateOne({ _id }, { $set: { password } })
  } catch (error) {
    console.log(error.message)
  }
}

exports.resetPassword = async(req, res) => {
  const { password, cpassword, id } = req.body;
  if (!id) return res.status(400).json({ success: false, error: "SWW" });
  if (!password || !cpassword)
    return res.status(400).json({ success: false, error: "AFSF" });
  if (password !== cpassword)
    return res.status(400).json({ success: false, error: "PDM" });
  try {
    const hashedPassword = await hasher.hash(password)
    updatePassword(id, hashedPassword)
    res.status(200).json({ success: true, message: "PRS" })
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ success: false, error: error.message });
  }
};
