import { navLinks, siteConfig, socialLinks } from "../../data/portfolioData";

function Footer() {
  return (
    <footer className="border-t border-slate-900/10 bg-slate-950/85 pt-8 dark:border-white/10 dark:bg-slate-950/80">
      <div className="container-shell grid gap-4 pb-6 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <p className="font-bold text-slate-100">{siteConfig.name}</p>
          <p className="mt-2 max-w-xl text-sm text-slate-300">{siteConfig.tagline}</p>
        </div>
        <ul className="m-0 grid list-none gap-1 p-0">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-slate-300 transition hover:text-slate-100">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="grid gap-1">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 transition hover:text-slate-100"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <p className="m-0 border-t border-white/10 px-4 py-4 text-center text-sm text-slate-400">
        Copyright {new Date().getFullYear()} {siteConfig.name}
      </p>
    </footer>
  );
}

export default Footer;
