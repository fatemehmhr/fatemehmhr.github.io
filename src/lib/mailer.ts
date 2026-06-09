import "server-only";

import nodemailer, { type Transporter } from "nodemailer";

import type { ContactFormPayload } from "@/types/contact";

/**
 * SMTP transport configuration, sourced exclusively from environment
 * variables so that credentials never live in the codebase.
 *
 * Required env vars (see `.env.local.example`):
 *   - SMTP_HOST       e.g. "smtp.gmail.com"
 *   - SMTP_PORT       e.g. "465" (SSL) or "587" (STARTTLS)
 *   - SMTP_USER       the authenticating mailbox, e.g. "96mehri@gmail.com"
 *   - SMTP_PASS       app password / SMTP token (never the raw account password)
 *   - CONTACT_TO_EMAIL  inbox that should receive contact messages
 */

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

/**
 * Lazily-created singleton transporter. Reused across invocations in a warm
 * serverless/runtime instance to avoid re-opening SMTP connections per request.
 */
let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const host = getRequiredEnv("SMTP_HOST");
  const port = Number(getRequiredEnv("SMTP_PORT"));
  const user = getRequiredEnv("SMTP_USER");
  const pass = getRequiredEnv("SMTP_PASS");

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    // Port 465 uses implicit TLS; everything else upgrades via STARTTLS.
    secure: port === 465,
    auth: { user, pass },
  });

  return cachedTransporter;
}

/** Escape user-provided text before embedding it in the HTML email body. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Send a contact-form submission to the configured inbox.
 *
 * @throws if SMTP env vars are missing or the message fails to send.
 */
export async function sendContactEmail(
  payload: ContactFormPayload
): Promise<void> {
  const transporter = getTransporter();
  const toEmail = getRequiredEnv("CONTACT_TO_EMAIL");
  const fromEmail = getRequiredEnv("SMTP_USER");

  const { name, email, message } = payload;

  await transporter.sendMail({
    // `from` must be a mailbox we are authorized to send as; the visitor's
    // address goes into `replyTo` so replying from the inbox reaches them.
    from: `"Portfolio Contact" <${fromEmail}>`,
    to: toEmail,
    replyTo: `"${name}" <${email}>`,
    subject: `Portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="margin: 0 0 12px;">New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
  });
}
