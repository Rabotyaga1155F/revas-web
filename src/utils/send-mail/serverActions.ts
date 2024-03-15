"use server";
import { sendMail } from "@/utils/send-mail/mail";

export async function sendMessageToEmail(text: any) {
  try {
    const message = {
      from: "Revas <capitalgk@mail.ru>",
      to: "reg1805@bk.ru",
      subject: "Вам оставили заявку!",
      text: text,
    };

    await sendMail(message);
  } catch (e) {
    console.log("Ошибка", e);
  }
}
