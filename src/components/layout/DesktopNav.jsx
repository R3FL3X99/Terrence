function DesktopNav({ navLinks, activeSection }) {
  return (
    <ul className="m-0 ml-auto hidden list-none items-center gap-1 p-0 lg:flex">
      {navLinks.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={`inline-flex items-center justify-start rounded-full border border-transparent px-3 py-2 text-sm font-medium transition ${
              activeSection === item.id
                ? "border-white/20 bg-white/10 text-slate-900 dark:text-slate-100"
                : "text-slate-700 hover:bg-slate-900/5 dark:text-slate-300 dark:hover:bg-white/10"
            }`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default DesktopNav;
