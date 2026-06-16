"use server";

import { Resend } from "resend";
import { z } from "zod";

export type ContactActionResult = { ok: true } | { ok: false; error: string };

let resendClient: Resend | null = null;

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email is too long."),
  message: z
    .string()
    .trim()
    .min(1, "Please enter a message.")
    .max(2000, "Message is too long."),
});

function getResend(apiKey: string): Resend {
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

function getString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendContactMessage(
  _previousState: ContactActionResult | null,
  formData: FormData,
): Promise<ContactActionResult> {
  const honeypot = getString(formData, "website");
  if (honeypot.trim()) {
    return { ok: true };
  }

  const parsed = contactSchema.safeParse({
    name: getString(formData, "name"),
    email: getString(formData, "email"),
    message: getString(formData, "message"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      error: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return {
      ok: false,
      error: "The contact form is not configured yet. Please try again later.",
    };
  }

  const { name, email, message } = parsed.data;
  const subjectName = name.replaceAll(/[\r\n]+/g, " ").slice(0, 80);
  const html = `
    <h1>New MoonLeaf contact message</h1>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  try {
    const resend = getResend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `MoonLeaf contact form: ${subjectName}`,
      html,
    });

    if (error) {
      return {
        ok: false,
        error: "Your message could not be sent right now. Please try again shortly.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Your message could not be sent right now. Please try again shortly.",
    };
  }
}
