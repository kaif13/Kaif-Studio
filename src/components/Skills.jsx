import React from "react";

const skillList = [
  "HTML",
  "CSS",
  "Javascript",
  "Tailwind CSS",
  "React.js",
  "Figma",
  "Routing",
  "Redux",
  "Shadcn UI",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-5xl mx-auto border-t border-black/5 dark:border-white/10"
    >
      <div className="text-center">
        <h2 className="font-heading font-bold text-3xl mb-10 text-dark dark:text-light">
          Expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skillList.map((skill, index) => (
            <div
              key={index}
              className="
                border border-black/10 dark:border-white/10 
                px-8 py-3 rounded-full 
                text-sm md:text-base font-medium tracking-wide
                text-dark dark:text-light
                cursor-default 
                
                /* THE SMOOTH ANIMATION CLASSES */
                transition-all duration-700 ease-out transform-gpu
                
                /* Hover Effects */
                hover:bg-dark hover:text-light 
                dark:hover:bg-light dark:hover:text-dark
                hover:scale-110 hover:border-dark dark:hover:border-light
                hover:shadow-xl
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
