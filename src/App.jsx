import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";
import WhatsApp from "./components/WhatsApp";

function App() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle 'dark' class on HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-light text-dark transition-colors duration-300 dark:bg-dark dark:text-light">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <About />
        <Contact />
        <WhatsApp />
      </main>

      <Footer />
    </div>
  );
}

export default App;
