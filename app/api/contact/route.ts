import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, email, phone, message, captchaToken } = body;

    // 1. Validate input
    if (!fullName || !email || !phone || !message || !captchaToken) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Verify reCAPTCHA
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY!,
          response: captchaToken,
        }),
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { message: "reCAPTCHA failed" },
        { status: 400 }
      );
    }

    // 3. Create SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 4. Send email
    await transporter.sendMail({
      from:`"YAWE Contact Form" <info@yawe.or.tz>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: "New Contact Form Message - YAWE NGO",

      html: `
        <div style="font-family: Arial, sans-serif; padding: 10px;">
          <h2>New Contact Message</h2>

          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    // 5. Success response
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        message: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}