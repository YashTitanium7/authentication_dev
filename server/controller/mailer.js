require('dotenv').config({ path: "../../.env" })
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASS,
  },
});

const send_mail = async({
  from, to, subject, text
}) => {
  let info = await transporter.sendMail({
    from, to, subject, text
  })
}

exports.sendMail = send_mail
