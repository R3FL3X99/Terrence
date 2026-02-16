import { contact, socialLinks } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

function Contact() {
  return (
    <section id="contact" className="container-shell scroll-mt-28">
      <Reveal>
        <SectionHeading eyebrow="Contact" title={contact.headline} subtitle={contact.description} />
      </Reveal>
      <Reveal className="glass-card grid justify-items-start gap-4 p-5 md:p-6" delay={120}>
        <a
          href={`mailto:${contact.email}`}
          className="break-all text-xl font-bold text-slate-900 underline-offset-4 hover:underline max-[420px]:text-base dark:text-slate-100 md:text-2xl"
        >
          {contact.email}
        </a>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white/70 px-3 py-1.5 text-sm text-slate-700 transition hover:border-slate-500 hover:text-slate-900 dark:border-white/25 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/40"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
