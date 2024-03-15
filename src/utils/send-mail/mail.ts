import mailer from "nodemailer";

export const sendMail = async (message: any) => {
  const smtpTransport = mailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: "capitalgk@mail.ru",
      pass: "yWQQw6Uf93gqUqKUv1vC",
    },
    tls: { rejectUnauthorized: false },
  });

  try {
    const info = await smtpTransport.sendMail(message);
    console.log("email sent", info);
  } catch (err) {
    console.log("Ошибка", err);
  } finally {
    smtpTransport.close();
  }
};
