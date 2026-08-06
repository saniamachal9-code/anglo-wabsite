import { Router } from "express";
import { Resend } from "resend";
import { z } from "zod";

const router = Router();

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().min(10),
  subject: z.string().min(2),
  message: z.string().min(10),
});

router.post("/contact", async (req, res) => {
  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    res.status(503).json({ error: "Email service not configured." });
    return;
  }

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data.", details: parsed.error.issues });
    return;
  }

  const { name, email, phone, subject, message } = parsed.data;

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Anglo School Contact Form <noreply@aryaschoolpundri.com>",
    to: ["info@aryaschoolpundri.com"],
    replyTo: email || undefined,
    subject: `[Contact Form] ${subject}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#1a4d2e;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;">${message}</p>
      </div>
    `,
  });

  if (error) {
    res.status(500).json({ error: "Failed to send email. Please try again." });
    return;
  }

  res.json({ success: true });
});

export default router;
