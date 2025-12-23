import { NextResponse } from "next/server";
import nodemailer from "nodemailer";




// 
// API route to send email upon form submission
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, childAges } = body;

    // 🔐 SMTP CONFIG (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

   const submittedAt = new Date().toLocaleString("en-IN", {
  dateStyle: "medium",
  timeStyle: "short",
});

const mailOptions = {
  from: `"Wisbo Waitlist" <${process.env.SMTP_EMAIL}>`,
  to: "marketing@yoomeplaylab.in",
  subject: "🧒 New Waitlist Submission",
  html: `
    <h2>New User Joined Waitlist</h2>

   <p><strong>Name:</strong> ${
  name
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}</p>

    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Submitted On:</strong> ${submittedAt}</p>
    <h3>Child Ages</h3>
    ${
      childAges?.length
        ? `<ul>
            ${childAges
              .map(
                (age: string, index: number) =>
                  `<li>Child ${index + 1} Age: ${age}</li>`
              )
              .join("")}
          </ul>`
        : `<p>No child age provided</p>`
    }
  `,
};


    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
