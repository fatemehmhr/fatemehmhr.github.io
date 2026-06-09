/**
 * Shared types for the contact form feature.
 *
 * Consumed by both the client (`ContactSection`) and the server
 * (`/api/contact` route handler) so the request/response contract stays
 * in sync across the frontend/backend boundary.
 */

/** Payload sent from the contact form to the contact API. */
export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

/** Response returned by the contact API. */
export interface ContactApiResponse {
  success: boolean;
  /** Human-readable message, safe to surface in the UI. */
  message: string;
  /** Field-level validation errors keyed by field name, when applicable. */
  errors?: Partial<Record<keyof ContactFormPayload, string>>;
}
