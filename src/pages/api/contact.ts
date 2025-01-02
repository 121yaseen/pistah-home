// Contact us api
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/libs/prismadb";
import sgMail from "@sendgrid/mail";

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

      // Send out email to admin
      sendEmail(email, firstName + " " + lastName, content);
      res.status(201).json({ message: "Contact created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error creating contact" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

const sendEmail = async (email: string, name: string, message: string) => {
  // Send email using sendgrid
  sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? "");

  const msg = {
    to: process.env.ADMIN_EMAIL ?? "",
    from: process.env.SENDGRID_SENDER_EMAIL ?? "",
    subject: "New message from " + name,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Message</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; background-color: #f9f9f9; }
          .email-container { max-width: 600px; margin: 20px auto; background: #ffffff; border: 1px solid #dddddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          .email-header { background: #007bff; color: #ffffff; padding: 20px; text-align: center; }
          .email-header h1 { margin: 0; font-size: 24px; }
          .email-body { padding: 20px; }
          .email-body p { margin: 10px 0; }
          .email-body strong { color: #000000; }
          .email-footer { background: #f1f1f1; padding: 15px; text-align: center; font-size: 14px; color: #666666; }
          .email-footer a { color: #007bff; text-decoration: none; }
          .email-footer a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h1>New Contact Message</h1>
          </div>
          <div class="email-body">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <div class="email-footer">
            <p>This email was sent from your website's contact form.</p>
            <p><a href="https://pistah.bluebucket.in/">Visit Website</a></p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
};
