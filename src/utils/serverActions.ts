"use server";

import { sendMail } from "@/utils/mail";

export async function sendMessageToEmail(text: any) {
  const message = {
    from: "Revas <poryadin2004@internet.ru>",
    to: "cool.poryadin2014@yandex.ru",
    subject: "Вам оставили заявку!",
    text: text,
  };

  sendMail(message);
}
