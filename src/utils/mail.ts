import mailer from "nodemailer";

export const sendMail = (message: any) => {
  const smtpTransport = mailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER2,
      pass: process.env.EMAIL_PASS2,
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
