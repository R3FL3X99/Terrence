function MobileDrawerNav({ navLinks, activeSection, menuOpen, closeMenu, drawerSolidBg }) {
  return (
    <ul
      className={`fixed left-0 right-0 top-[4.25rem] z-[9999] m-0 flex list-none flex-col gap-2 border-b border-slate-300 px-4 py-4 shadow-[0_14px_28px_rgba(0,0,0,0.25)] transition duration-300 lg:hidden ${
        menuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: drawerSolidBg }}
      aria-hidden={!menuOpen}
    >
      {navLinks.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={`inline-flex w-full items-center justify-start rounded-xl border px-3 py-3 text-[0.95rem] font-medium transition max-[380px]:px-2.5 max-[380px]:py-2.5 max-[380px]:text-sm ${
              activeSection === item.id
                ? "border-slate-300 bg-slate-100 text-slate-900 dark:border-white/30 dark:bg-white/10 dark:text-slate-100"
                : "border-transparent text-slate-800 hover:border-slate-300 hover:bg-slate-100 dark:text-slate-100 dark:hover:border-white/20 dark:hover:bg-white/10"
            }`}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MobileDrawerNav;
