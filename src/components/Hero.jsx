import React from "react";
import { ArrowRight, FileText } from "lucide-react";

const Hero = () => {
  // IMPORTANT: Make sure you have a file named 'resume.pdf' in your public folder.
  const resumeLink = "/Resume.pdf";

  return (
    <section
      id="about"
      className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* 
        BACKGROUND ACCENT 
        A very subtle blue glow in the top right to mix with the B&W theme.
        This prevents the site from feeling "dead".
      */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] opacity-50"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text & Buttons */}
        <div className="flex flex-col items-start z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 border border-black/5 dark:border-white/10 px-4 py-1.5 rounded-full mb-8 bg-light/50 dark:bg-dark/50 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-dark dark:text-light">
              Available for new projects
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-bold text-5xl md:text-7xl leading-[1.1] mb-6">
            {/* "Crafting" - Solid Black in Light Mode, Solid White in Dark Mode */}
            <span className="text-black dark:text-white">Crafting</span> <br />
            {/* "Digital Perfection" - Gradient Text */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/90 to-black/10 dark:from-white dark:to-white/10">
              Digital Perfection.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray mb-10 leading-relaxed max-w-lg font-body">
            I'm{" "}
            <span className="text-dark dark:text-light font-bold">Kaif</span>. I
            engineer accessible, pixel-perfect web interfaces using
            <span className="text-dark dark:text-light font-bold underline decoration-1 underline-offset-4">
              {" "}
              React
            </span>{" "}
            and
            <span className="text-dark dark:text-light font-bold underline decoration-1 underline-offset-4">
              {" "}
              Tailwind
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* PRIMARY BUTTON: Electric Blue (The 10% Color Rule) */}
            <a
              href="#contact"
              className="
                group
                px-8 py-4 rounded-full 
                font-bold font-heading text-sm uppercase tracking-widest
                bg-brand text-white border border-brand
                hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]
                hover:scale-105
                transition-all duration-300
                flex items-center gap-2
              "
            >
              Let's Talk{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            {/* SECONDARY BUTTON: Resume */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative overflow-hidden
                bg-dark dark:bg-light 
                text-light dark:text-dark 
                px-8 py-4 rounded-full 
                font-bold font-heading text-sm uppercase tracking-widest
                transition-transform duration-300 hover:scale-105
                flex items-center gap-2
              "
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Side: Photo */}
        {/* Right Side: The "Code Window" (Replaces the Photo) */}
        <div className="relative group flex justify-center md:justify-end perspective-1000">
          {/* The Blue Glow behind the code */}
          <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full -z-10"></div>

          {/* The Code Window Card */}
          <div
            className="
    relative w-full max-w-md bg-[#1e1e1e] rounded-xl overflow-hidden 
    border border-white/10 shadow-2xl shadow-brand/20
    transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]
  "
          >
            {/* Window Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs font-mono text-gray-400">
                Hero.jsx
              </div>
            </div>

            {/* The Code Content */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
              <div className="flex">
                <span className="text-gray-500 w-6 select-none">1</span>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-300 ml-2">Developer</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-white">()</span>{" "}
                <span className="text-purple-400">=&gt;</span>{" "}
                <span className="text-white">{`{`}</span>
              </div>

              <div className="flex">
                <span className="text-gray-500 w-6 select-none">2</span>
                <span className="text-purple-400 ml-4">const</span>{" "}
                <span className="text-blue-400 ml-2">skills</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-white">[</span>
              </div>

              <div className="flex">
                <span className="text-gray-500 w-6 select-none">3</span>
                <span className="text-green-400 ml-8">'React'</span>
                <span className="text-white">,</span>
              </div>

              <div className="flex">
                <span className="text-gray-500 w-6 select-none">4</span>
                <span className="text-green-400 ml-8">'Next.js'</span>
                <span className="text-white">,</span>
              </div>

              <div className="flex">
                <span className="text-gray-500 w-6 select-none">5</span>
                <span className="text-green-400 ml-8">'Tailwind CSS'</span>
              </div>

              <div className="flex">
                <span className="text-gray-500 w-6 select-none">6</span>
                <span className="text-white ml-4">];</span>
              </div>

              <div className="flex mt-2">
                <span className="text-gray-500 w-6 select-none">7</span>
                <span className="text-purple-400 ml-4">return</span>{" "}
                <span className="text-white">(</span>
              </div>

              <div className="flex">
                <span className="text-gray-500 w-6 select-none">8</span>
                <span className="text-pink-500 ml-8">&lt;Kaif</span>
              </div>

              <div className="flex">
                <span className="text-gray-500 w-6 select-none">9</span>
                <span className="text-blue-300 ml-12">problemSolver</span>
                <span className="text-white">=</span>
                <span className="text-blue-500">{`{true}`}</span>
              </div>

              <div className="flex">
                <span className="text-gray-500 w-6 select-none">10</span>
                <span className="text-blue-300 ml-12">hireable</span>
                <span className="text-white">=</span>
                <span className="text-blue-500">{`{true}`}</span>
              </div>

              <div className="flex">
                <span className="text-gray-500 w-6 select-none">11</span>
                <span className="text-pink-500 ml-8">/&gt;</span>
              </div>

              <div className="flex">
                <span className="text-gray-500 w-6 select-none">12</span>
                <span className="text-white">);</span>
              </div>

              <div className="flex">
                <span className="text-gray-500 w-6 select-none">13</span>
                <span className="text-white">{"}"};</span>
              </div>

              {/* Blinking Cursor Effect */}
              <div className="flex mt-2">
                <span className="text-gray-500 w-6 select-none">14</span>
                <span className="ml-4 w-2 h-5 bg-brand animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
