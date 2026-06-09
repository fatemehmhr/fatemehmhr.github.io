"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

type IconProps = { className?: string };

// Brand logos as inline SVGs (lucide-react no longer ships brand icons).
function GitHubIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
    </svg>
  );
}

function TelegramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M21.94 4.6l-3.32 15.66c-.25 1.1-.9 1.38-1.83.86l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.14L17.4 6.85c.4-.36-.09-.56-.63-.2L7.1 12.86l-4.99-1.56c-1.08-.34-1.1-1.08.23-1.6l19.5-7.52c.9-.34 1.69.2 1.4 1.42z" />
    </svg>
  );
}

const socialIcons: Record<string, (props: IconProps) => React.ReactElement> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  send: TelegramIcon,
};

export function ContactSection() {
  const { contact } = portfolioData;
  const [formState, setFormState] = useState({
    name: "",
    message: "",
  });

  // Open the visitor's own email client with a pre-filled message addressed
  // to the site owner. No backend or SMTP credentials are required: the
  // visitor sends from their own mailbox.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio message from ${formState.name}`;
    const body = `${formState.message}\n\n— ${formState.name}`;
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Trigger via a synthetic anchor click. Re-assigning `window.location` to
    // a mailto: URL is ignored by some browsers on repeated submissions, so a
    // fresh click each time is the reliable approach.
    const link = document.createElement("a");
    link.href = mailto;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col justify-center px-6 py-24 pb-40"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-sm font-medium tracking-widest text-rose uppercase"
        >
          Get in Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-4 text-3xl font-bold text-ink sm:text-4xl"
        >
          Let&apos;s Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 max-w-xl text-muted"
        >
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you. Send me a message and let&apos;s create something
          extraordinary.
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, name: e.target.value }))
                }
                className="w-full rounded-xl border border-charcoal/15 bg-surface px-4 py-3 text-ink placeholder-muted/60 outline-none transition-colors focus:border-rose"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, message: e.target.value }))
                }
                className="w-full resize-none rounded-xl border border-charcoal/15 bg-surface px-4 py-3 text-ink placeholder-muted/60 outline-none transition-colors focus:border-rose"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-rose to-charcoal py-3.5 font-medium text-white transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <a
              href={`mailto:${contact.email}`}
              className="mb-8 flex items-center gap-4 rounded-2xl border border-charcoal/10 bg-surface p-6 shadow-sm shadow-charcoal/5 transition-colors hover:border-rose/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose/20">
                <Mail className="h-6 w-6 text-rose" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-muted">Email me at</p>
                <p className="font-medium text-ink">{contact.email}</p>
              </div>
            </a>

            <a
              href={`tel:${contact.phone}`}
              className="mb-8 flex items-center gap-4 rounded-2xl border border-charcoal/10 bg-surface p-6 shadow-sm shadow-charcoal/5 transition-colors hover:border-rose/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal/15">
                <Phone className="h-6 w-6 text-charcoal" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-muted">Call me at</p>
                <p className="font-medium text-ink" dir="ltr">
                  {contact.phone}
                </p>
              </div>
            </a>

            <p className="mb-4 text-sm text-muted">Find me on</p>
            <div className="flex flex-wrap gap-3">
              {contact.socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-charcoal/10 bg-surface px-5 py-3 text-sm text-ink/80 shadow-sm shadow-charcoal/5 transition-all hover:border-rose/40 hover:text-rose"
                  >
                    {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                    {social.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
