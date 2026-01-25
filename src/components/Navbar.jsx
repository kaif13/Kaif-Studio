import React from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode, isMenuOpen, setIsMenuOpen }) => {
  // Helper to close menu when a link is clicked
  const handleLinkClick = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" }, // ADDED THIS
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-light/90 dark:bg-dark/90 backdrop-blur-md z-50 border-b border-black/5 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Brand */}
        <a
          href="#"
          className="font-heading font-bold text-2xl tracking-tight text-dark dark:text-light"
        >
          Mohammad Kaif
        </a>

        {/* Desktop Links & Toggles */}
        <div className="flex items-center gap-8">
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-dark dark:text-light">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:opacity-50 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-black/10 dark:border-white/10 text-dark dark:text-light hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark dark:text-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* 
        THE MISSING PIECE: Mobile Dropdown 
        This only renders if isMenuOpen is true 
      */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-light dark:bg-dark border-b border-black/10 dark:border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-xl animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick} // Closes menu when clicked
              className="text-xl font-heading font-bold text-dark dark:text-light hover:translate-x-2 transition-transform"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Resume Button (Optional but good) */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="mt-4 text-center py-3 w-full border border-black/10 dark:border-white/10 rounded-lg text-dark dark:text-light uppercase tracking-widest text-xs font-bold"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
