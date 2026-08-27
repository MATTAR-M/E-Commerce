import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer/index.js";
import {EMAIL,PASS} from "../../../config/config.services"
export const sendEmail = async (mailOptions:Mail.Options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASS,
    },
  });
  const info = await transporter.sendMail({
    from: `"SocialApp Ceo" <${EMAIL}>`,
    ...mailOptions
  });

  console.log("Message sent: %s", info.messageId);
  return info.accepted.length > 0 ? true : false;
};

export const generateOtp = async () => {
  return Math.floor(Math.random() * 900000 + 100000);
};
