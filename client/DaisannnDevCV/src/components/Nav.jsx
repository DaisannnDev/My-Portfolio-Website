import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/rhythmdesk", label: "RhythmDesk" },
    { to: "/experience", label: "Experience" },
    { to: "/resume", label: "Resume" },
    { to: "/skills", label: "Skills" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-black/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em]"
        >
          <span className="text-white">Daisannn</span>
          <motion.span
            className="bg-gradient-to-r from-brand-accent via-rose-400 to-brand-blue bg-[length:220%_220%] bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            Dev
          </motion.span>
        </NavLink>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.25em] text-brand-muted md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors hover:text-brand-accent ${isActive ? "text-brand-accent" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black/90 py-2 md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-6 py-2 text-sm uppercase tracking-[0.2em] text-brand-muted transition hover:text-brand-accent"
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
