import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL ?? "will@polesestrategy.com";

    const { error } = await resend.emails.send({
      from: "PSI Website <contact@polesestrategy.com>",
      to: toEmail,
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #F8F6F1; padding: 40px; border-radius: 8px;">
          <div style="border-bottom: 3px solid #C9943A; padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="color: #0B1F3A; margin: 0; font-size: 22px;">New Contact Form Submission</h2>
            <p style="color: #888; margin: 4px 0 0; font-size: 13px; font-family: sans-serif;">Polese Strategic Insights — polesestrategy.com</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px;">
            <tr>
              <td style="color: #888; padding: 8px 0; width: 100px; vertical-align: top;">Name</td>
              <td style="color: #0B1F3A; font-weight: 600; padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="color: #888; padding: 8px 0; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #C9943A;">${email}</a></td>
            </tr>
            ${company ? `<tr>
              <td style="color: #888; padding: 8px 0; vertical-align: top;">Company</td>
              <td style="color: #0B1F3A; padding: 8px 0;">${company}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 24px; background: white; border-radius: 6px; padding: 20px; border-left: 4px solid #C9943A;">
            <p style="color: #888; font-family: sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Message</p>
            <p style="color: #0B1F3A; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-family: sans-serif; font-size: 12px; color: #aaa; text-align: center;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
