import { NextResponse } from "next/server";

import { sendContactEmail } from "@/lib/mailer";
import type {
  ContactApiResponse,
  ContactFormPayload,
} from "@/types/contact";

// Nodemailer relies on Node APIs, so this route must run on the Node.js
// runtime rather than the Edge runtime.
export const runtime = "nodejs";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

// Pragmatic email shape check; full RFC validation is intentionally avoided.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate and normalize the incoming request body into a contact payload.
 *
 * @returns the sanitized payload or a map of field-level errors.
 */
function validatePayload(
  body: unknown
):
  | { ok: true; data: ContactFormPayload }
  | { ok: false; errors: ContactApiResponse["errors"] } {
  const errors: NonNullable<ContactApiResponse["errors"]> = {};

  const record = (body ?? {}) as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const message =
    typeof record.message === "string" ? record.message.trim() : "";

  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length > MAX_NAME_LENGTH) {
    errors.name = `Name must be at most ${MAX_NAME_LENGTH} characters.`;
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message) {
    errors.message = "Message is required.";
  } else if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be at most ${MAX_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data: { name, email, message } };
}

/**
 * POST /api/contact
 *
 * Accepts a contact-form submission, validates it, and relays it to the
 * configured inbox via SMTP. Never leaks internal/SMTP error details to the
 * client.
 */
export async function POST(request: Request): Promise<NextResponse<ContactApiResponse>> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const result = validatePayload(body);
  if (!result.ok) {
    return NextResponse.json(
      {
        success: false,
        message: "Please correct the highlighted fields.",
        errors: result.errors,
      },
      { status: 422 }
    );
  }

  try {
    await sendContactEmail(result.data);
    return NextResponse.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    // Log full detail server-side for diagnostics; return a generic message.
    console.error("[api/contact] Failed to send contact email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while sending your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
