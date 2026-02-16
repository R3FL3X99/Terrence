import { hero, siteConfig, socialLinks } from "../../data/portfolioData";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../ui/Reveal";

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="container-shell grid min-h-[calc(100dvh-5rem)] scroll-mt-28 items-center gap-6 pt-6 max-[420px]:gap-5 max-[420px]:pt-4 md:pt-12 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <Reveal className="" delay={80}>
        <p className="mb-2 text-sm text-emerald-600 dark:text-emerald-300">{hero.greeting}</p>
        <h1 className="max-w-[12ch] text-4xl font-bold leading-[1.05] text-slate-900 max-[420px]:text-[1.9rem] dark:text-slate-100 md:text-6xl">
          {hero.name}
        </h1>
        <p className="mt-2 text-base text-slate-700 dark:text-slate-200 md:mt-3 md:text-xl">{siteConfig.role}</p>
        <p className="mt-4 max-w-2xl text-sm text-slate-700 dark:text-slate-300 md:text-base">
          {hero.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5 max-md:flex-col">
          {hero.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              className={`inline-flex min-h-11 items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 max-md:w-full ${
                cta.type === "primary"
                  ? "border-emerald-400 bg-gradient-to-br from-emerald-300 to-emerald-500 text-emerald-950"
                  : "border-slate-300 bg-white/70 text-slate-900 dark:border-white/20 dark:bg-white/5 dark:text-slate-100"
              }`}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noreferrer" : undefined}
            >
              {cta.label}
            </a>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-1.5 text-xs text-slate-800 transition hover:-translate-y-0.5 max-[420px]:w-full max-[420px]:justify-center dark:border-white/20 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/40"
              target="_blank"
              rel="noreferrer"
            >
              <img src={social.icon} alt="" aria-hidden="true" className="h-4 w-4" />
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal className="justify-self-center" delay={140}>
        <motion.div
          className="w-[min(420px,86vw)] overflow-hidden rounded-[1.6rem] shadow-2xl shadow-black/30 max-[420px]:rounded-2xl"
          animate={reduceMotion ? { y: 0 } : { y: [0, -10, 0] }}
          transition={reduceMotion ? { duration: 0 } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={hero.image}
            alt={`${hero.name} portrait`}
            className="h-full w-full rounded-[1.6rem] object-cover"
          />
        </motion.div>
      </Reveal>
    </section>
  );
}

export default Hero;
