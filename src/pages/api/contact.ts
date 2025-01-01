// Contact us api
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, content } = req.body;
    try {
      await prisma.contact.create({
        data: {
          name: firstName + " " + lastName,
          email,
          message: content,
        },
      });
      res.status(201).json({ message: "Contact created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error creating contact" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
