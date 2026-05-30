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
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import StartupIntro from "./components/StartupIntro";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="bg-light text-dark transition-colors duration-300 dark:bg-dark dark:text-light">
      <StartupIntro />
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
        <Process />
        <About />
        <FAQ />
        <Contact />
        <WhatsApp />
      </main>

      <Footer />
    </div>
  );
}

export default App;
