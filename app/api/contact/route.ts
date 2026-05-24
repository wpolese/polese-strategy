import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log to server console (visible in Vercel logs)
    console.log("New contact form submission:", {
      name,
      email,
      company: company || "(none)",
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Add email delivery (e.g. Resend, SendGrid, or Nodemailer)
    // Example with Resend:
    // await resend.emails.send({
    //   from: "website@polesestrategy.com",
    //   to: "will@polesestrategy.com",
    //   subject: `New inquiry from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
