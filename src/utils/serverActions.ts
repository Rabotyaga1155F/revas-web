"use server";
import { sendMail } from "@/utils/mail";

export async function sendMessageToEmail(text: any) {
  try {
    const message = {
      from: "Revas <capitalgk@mail.ru>",
      to: process.env.RECIPIENT,
      subject: "Вам оставили заявку!",
      text: text,
    };

    await sendMail(message);
  } catch (e) {
    console.log("Ошибка", e);
  }
}
