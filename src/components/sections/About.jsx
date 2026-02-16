import { about } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

function About() {
  return (
    <section id="about" className="container-shell scroll-mt-28">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="Building thoughtful digital experiences"
          subtitle="A frontend specialist with full-stack awareness and product-focused execution."
        />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="glass-card overflow-hidden" delay={80}>
          <img src={about.image} alt="Workspace and code illustration" className="h-full min-h-[19rem] w-full object-cover" />
        </Reveal>
        <Reveal className="glass-card p-5 md:p-6" delay={120}>
          <p className="text-sm text-slate-700 dark:text-slate-300 md:text-base">{about.summary}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {about.highlights.map((item) => (
              <div
                className="rounded-xl border border-white/20 bg-white/10 p-3 dark:border-white/20 dark:bg-white/5"
                key={item.label}
              >
                <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{item.value}</p>
                <p className="text-xs text-slate-700 dark:text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
