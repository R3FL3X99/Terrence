import { experience } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

function Experience() {
  return (
    <section id="experience" className="container-shell scroll-mt-28">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Professional timeline"
          subtitle="Consistent growth across frontend engineering and product delivery."
        />
      </Reveal>
      <div className="grid gap-4">
        {experience.map((item, index) => (
          <Reveal className="glass-card p-4 md:p-5" delay={index * 100} key={`${item.role}-${item.period}`}>
            <p className="text-xs text-emerald-600 dark:text-emerald-300">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">{item.role}</h3>
            <p className="mb-2 text-sm text-slate-700 dark:text-slate-300">{item.company}</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">{item.details}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Experience;
