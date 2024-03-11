require("dotenv").config();
import mailer from "nodemailer";

export const sendMail = (message: any) => {
  const smtpTransport = mailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  smtpTransport.sendMail(message, function (err, info) {
    if (err) {
      console.log("Ошибка", err);
    } else {
      console.log("email sent", info);
    }
    smtpTransport.close();
  });
};
