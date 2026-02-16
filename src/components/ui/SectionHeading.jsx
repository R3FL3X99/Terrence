function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <header className="mb-6 max-w-3xl md:mb-7">
      {eyebrow ? (
        <p className="mb-2 text-xs uppercase tracking-[0.12em] text-emerald-400 dark:text-emerald-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold leading-tight text-slate-900 max-[420px]:text-[1.45rem] dark:text-slate-100 md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 md:text-base">{subtitle}</p>
      ) : null}
    </header>
  );
}

export default SectionHeading;
