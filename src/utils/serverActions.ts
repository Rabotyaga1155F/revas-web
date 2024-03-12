"use server";

import { sendMail } from "@/utils/mail";

export async function sendMessageToEmail(text: any) {
  const message = {
    from: "Revas <capitalgk@mail.ru>",
    to: process.env.RECIPIENT,
    subject: "Вам оставили заявку!",
    text: text,
  };

  sendMail(message);
}
