const { register, login, forgotPassword, resetPassword } = require("../controller/auth");

const express = require("express"),
  router = express.Router()

router.get("/", (req, res) => res.send("This is api"));
router.post("/register", register);
router.post("/login", login);
router.post('/forgotPassword', forgotPassword)
router.post('/resetPassword', resetPassword)

module.exports = router;
