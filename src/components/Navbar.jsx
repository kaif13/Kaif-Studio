import React from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode, isMenuOpen, setIsMenuOpen }) => {
  const handleLinkClick = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#studio-about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 min-[390px]:px-4 md:top-4">
      <nav className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between rounded-full border border-black/10 bg-white/82 px-2.5 pl-4 shadow-2xl shadow-black/10 backdrop-blur-2xl transition-colors duration-500 dark:border-white/10 dark:bg-dark/82 min-[390px]:pl-5 md:h-16 md:px-3">
        <a
          href="#home"
          onClick={handleLinkClick}
          className="flex items-center gap-3"
          aria-label="Kaif Web Studio home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dark font-heading text-sm font-black text-light dark:bg-light dark:text-dark md:h-9 md:w-9">
            K
          </span>
          <span className="font-heading text-base font-black tracking-tight text-dark dark:text-light min-[390px]:text-lg">
            Kaif Web Studio
          </span>
        </a>

        <div className="hidden items-center rounded-full border border-black/10 bg-black/[0.03] p-1 text-xs font-bold uppercase tracking-widest text-dark/65 dark:border-white/10 dark:bg-white/[0.04] dark:text-light/65 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-white hover:text-dark hover:shadow-sm dark:hover:bg-white/10 dark:hover:text-light"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5 md:gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-brand px-5 py-3 text-xs font-bold uppercase tracking-widest text-dark shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand/35 sm:inline-flex"
          >
            Get a Quote
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-dark transition-all duration-300 hover:bg-dark hover:text-light dark:border-white/10 dark:bg-white/5 dark:text-light dark:hover:bg-light dark:hover:text-dark md:h-11 md:w-11"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-dark transition-all duration-300 dark:border-white/10 dark:bg-white/5 dark:text-light md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-3xl border border-black/10 bg-white/95 p-4 shadow-2xl shadow-black/10 backdrop-blur-2xl dark:border-white/10 dark:bg-dark/95 md:hidden">
          <div className="grid gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="min-h-12 rounded-2xl px-4 py-3 font-heading text-lg font-bold text-dark transition-colors hover:bg-black/5 dark:text-light dark:hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-brand px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-dark"
            >
              Get a free website quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
