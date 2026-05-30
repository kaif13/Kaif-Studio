import React, { lazy, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LazySection from "./components/LazySection";

const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Services = lazy(() => import("./components/Services"));
const Process = lazy(() => import("./components/Process"));
const About = lazy(() => import("./components/About"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
const WhatsApp = lazy(() => import("./components/WhatsApp"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadFloatingActions, setLoadFloatingActions] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const loadActions = () => setLoadFloatingActions(true);
    let idleId;
    let timeoutId;

    const scheduleLoad = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(loadActions, { timeout: 2200 });
      } else {
        timeoutId = window.setTimeout(loadActions, 1200);
      }
    };

    if (document.readyState === "complete") {
      scheduleLoad();
    } else {
      window.addEventListener("load", scheduleLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", scheduleLoad);
      if (idleId) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="page-enter bg-light text-dark transition-colors duration-300 dark:bg-dark dark:text-light">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <Hero />
        <LazySection id="skills" minHeight={560}>
          <Skills />
        </LazySection>
        <LazySection id="work" minHeight={1250}>
          <Projects />
        </LazySection>
        <LazySection id="services" minHeight={1180}>
          <Services />
        </LazySection>
        <LazySection id="process" minHeight={760}>
          <Process />
        </LazySection>
        <LazySection id="studio-about" minHeight={760}>
          <About />
        </LazySection>
        <LazySection id="faq" minHeight={720}>
          <FAQ />
        </LazySection>
        <LazySection id="contact" minHeight={860}>
          <Contact />
        </LazySection>
        {loadFloatingActions && (
          <LazySection minHeight={0}>
            <WhatsApp />
          </LazySection>
        )}
      </main>

      <LazySection minHeight={180}>
        <Footer />
      </LazySection>
    </div>
  );
}

export default App;
