import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations";

const skillList = [
  "Business Website Development",
  "Landing Page Design",
  "Mobile-First Design",
  "Website Redesign & Modernization",
  "Fast & Responsive UI",
  "Conversion-Focused Layouts",
  "Clean & Simple User Experience",
  "Performance Optimization",
  "Design-to-Code Implementation",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-5xl mx-auto border-t border-black/5 dark:border-white/10"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="font-heading font-bold text-3xl mb-10 text-dark dark:text-light">
          What I Help Businesses With
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skillList.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
