import mailer from "nodemailer";

export const sendMail = (message: any) => {
  const smtpTransport = mailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: "poryadin2004@internet.ru",
      pass: "27C9aZ9EUY9ndw0fpBs8",
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
