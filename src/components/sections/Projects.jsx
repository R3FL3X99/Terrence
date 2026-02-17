import { projects } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

function Projects() {
  return (
    <section id="projects" className="container-shell scroll-mt-28">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="A mix of UI-focused builds and full-stack projects."
        />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            className={`glass-card overflow-hidden transition hover:-translate-y-1 hover:border-white/40 ${
              project.featured ? "md:col-span-2 lg:col-span-2" : ""
            }`}
            delay={index * 90}
          >
            <img src={project.image} alt={project.title} className="h-44 w-full object-cover md:h-52" />
            <div className="p-4 md:p-5">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{project.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-slate-300/80 px-2 py-1 text-xs text-slate-700 dark:border-white/30 dark:text-slate-200"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-2 max-[420px]:flex-col">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-500 max-[420px]:w-full dark:border-white/20 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/40"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-500 max-[420px]:w-full dark:border-white/20 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/40"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
