import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-black/5 dark:border-white/10 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-2">
        {/* Main Copyright */}
        <p className="text-sm text-dark dark:text-light font-heading font-medium tracking-wide text-center">
          © 2025 Kaif Web Studio. All rights reserved.
        </p>

        {/* Subtle Subtext */}
        <p className="text-xs text-gray font-mono uppercase tracking-widest opacity-60 text-center">
          Designed and built for business use
        </p>
      </div>
    </footer>
  );
};

export default Footer;
