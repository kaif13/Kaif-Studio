import React from "react";

const Footer = () => {
  const links = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#studio-about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-black/10 bg-white/70 px-6 py-10 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-dark/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-2xl font-black text-dark dark:text-light">
            Kaif Web Studio
          </p>
          <p className="mt-2 max-w-md text-sm text-gray dark:text-white/55">
            Premium websites for service businesses, luxury brands, and modern
            local companies.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-xs font-bold uppercase tracking-widest text-dark/65 dark:text-light/65">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-brand"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-gray">
          2026 Kaif Web Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
