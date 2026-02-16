import { skillGroups } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

function Skills() {
  return (
    <section id="skills" className="container-shell scroll-mt-28">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies and workflow"
          subtitle="Core tooling I use to ship frontend products that scale cleanly."
        />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <Reveal
            key={group.title}
            className="glass-card p-5 transition hover:-translate-y-1 hover:border-white/40 md:p-6"
            delay={groupIndex * 80}
          >
            <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">{group.title}</h3>
            <ul className="grid gap-2">
              {group.items.map((item) => (
                <li key={item} className="relative pl-4 text-sm text-slate-700 dark:text-slate-300">
                  <span className="absolute left-0 top-[0.44rem] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
