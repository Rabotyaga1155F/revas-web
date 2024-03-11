import { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "@/utils/mail";
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { Name, Phone } = req.body;

  sendMail("Тестовое письмо");
}
