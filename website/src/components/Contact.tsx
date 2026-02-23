import { portfolioData } from "@/data/portfolio";
import { Mail } from "lucide-react";

export function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="section-shell">
      <div className="content-shell">
        <h3 className="section-title">{contact.title}</h3>
        <div className="narrow-shell px-0 md:px-5 lg:px-5">
          <div className="mx-auto max-w-[760px] py-3">
            <div className="text-center">
              <p className="mx-auto max-w-[608px] text-base leading-6 text-[var(--text-color)]/90">{contact.description}</p>
              <p className="secondary-heading mt-4 inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--primary-color)]" />
                {contact.emailText}
              </p>
            </div>
            <div className="pt-3 text-center">
              <a
                href={contact.emailHref}
                className="contact-button inline-flex items-center justify-center border px-3 py-1.5 text-base"
              >
                {contact.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
