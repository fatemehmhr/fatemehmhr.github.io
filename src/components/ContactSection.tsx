"use client";

import { Mail, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

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

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col justify-center px-5 pb-28 sm:px-6 sm:py-24 sm:pb-40"
    >
      <div className="mx-auto w-full max-w-3xl">
        <Reveal direction="up">
          <div className="text-center">
            <span className="kicker mx-auto w-fit">Get in Touch</span>
            <h2 className="font-display mt-4 text-2xl leading-tight text-navy xs:text-3xl sm:text-5xl">
              Let&apos;s build something{" "}
              <span className="text-gradient">extraordinary</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[13px] text-muted xs:text-sm sm:mt-4 sm:text-base">
              Have a project in mind or want to collaborate? Reach out through
              any of the channels below — I usually reply within a day.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-1 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          <Reveal direction="up">
            <a
              href={`mailto:${contact.email}`}
              className="card group flex h-full items-center gap-3.5 p-3 sm:gap-4 sm:p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky/40 text-navy transition group-hover:bg-teal group-hover:text-white sm:h-12 sm:w-12">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] tracking-wide text-muted uppercase sm:text-xs">
                  Email me at
                </p>
                <p className="text-sm font-medium break-all text-ink sm:text-base">
                  {contact.email}
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal direction="up" delay={0.08}>
            <a
              href={`tel:${contact.phone}`}
              className="card group flex h-full items-center gap-3.5 p-3 sm:gap-4 sm:p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky/40 text-navy transition group-hover:bg-teal group-hover:text-white sm:h-12 sm:w-12">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] tracking-wide text-muted uppercase sm:text-xs">
                  Call me at
                </p>
                <p className="text-sm font-medium break-all text-ink sm:text-base" dir="ltr">
                  {contact.phone}
                </p>
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.12}>
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-xs tracking-[0.2em] text-muted uppercase">
              Find me on
            </p>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-3">
              {contact.socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost !px-3.5 !py-2 !text-[13px] sm:!px-4 sm:!py-2.5 sm:!text-sm"
                  >
                    {Icon && (
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    )}
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <p className="mt-10 text-center text-xs text-muted/70 sm:mt-14">
          © {portfolioData.name.full}
        </p>
      </div>
    </section>
  );
}
