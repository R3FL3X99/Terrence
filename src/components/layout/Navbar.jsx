import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "../../data/portfolioData";
import useActiveSection from "../../hooks/useActiveSection";
import useTheme from "../../hooks/useTheme";
import DesktopNav from "./DesktopNav";
import MobileDrawerNav from "./MobileDrawerNav";

function Navbar() {
  const activeSection = useActiveSection(navLinks.map((item) => item.id));
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerSolidBg = theme === "dark" ? "rgb(2 6 23)" : "rgb(255 255 255)";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-[2147483647] border-b border-slate-900/10 bg-white/75 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
      <nav className="container-shell relative flex min-h-[4.25rem] items-center gap-3 py-1.5 max-[380px]:gap-2" aria-label="Primary">
        <a
          href="#hero"
          className="inline-flex min-w-0 items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100 sm:text-base"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 shadow-[0_0_16px_rgba(52,211,153,0.75)]" />
          <span className="truncate">{siteConfig.name}</span>
        </a>

        <DesktopNav navLinks={navLinks} activeSection={activeSection} />

        <div className="z-[10000] ml-auto inline-flex items-center gap-1.5">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 max-[380px]:h-8 max-[380px]:w-8 dark:border-white/20 dark:bg-white/10 dark:text-slate-100 dark:hover:border-white/40"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <ion-icon name={theme === "dark" ? "sunny-outline" : "moon-outline"}></ion-icon>
          </button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 max-[380px]:h-8 max-[380px]:w-8 dark:border-white/20 dark:bg-white/10 dark:text-slate-100 dark:hover:border-white/40 lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <ion-icon className="text-[1.35rem]" name={menuOpen ? "close-outline" : "menu-outline"}></ion-icon>
          </button>
        </div>
      </nav>

      <MobileDrawerNav
        navLinks={navLinks}
        activeSection={activeSection}
        menuOpen={menuOpen}
        closeMenu={() => setMenuOpen(false)}
        drawerSolidBg={drawerSolidBg}
      />

      <button
        type="button"
        className={`fixed inset-0 z-[9998] border-none bg-black/80 transition ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } lg:hidden`}
        aria-hidden={!menuOpen}
        aria-label="Close menu backdrop"
        onClick={() => setMenuOpen(false)}
      />
    </header>
  );
}

export default Navbar;
