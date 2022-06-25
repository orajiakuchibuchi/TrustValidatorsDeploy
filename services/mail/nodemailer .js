"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(from, to, subject, text,html) {
  // Generate test SMTP service account from ethereal.email
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "bc2f81ef8788b7",
      pass: "b9f81048ecaf15"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
  });

  return info;
}

module.exports = async function(from, to, subject, text, html) {
    const sender = await main(from,to,subject,text,html);
    return sender;
}
