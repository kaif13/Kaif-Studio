import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations";

const steps = [
  {
    id: "01",
    title: "Discovery",
    icon: <Search size={24} />,
    desc: "We start with a short call to understand your business, goals, and what’s currently not working. No assumptions, no wasted time.",
  },
  {
    id: "02",
    title: "Planning",
    icon: <PenTool size={24} />,
    desc: "I plan the structure and flow of your website so visitors clearly understand your services and know exactly what action to take.",
  },
  {
    id: "03",
    title: "Build",
    icon: <Code2 size={24} />,
    desc: "I design and build a fast, clean, and responsive website focused on clarity, usability, and real-world business needs.",
  },
  {
    id: "04",
    title: "Launch & Support",
    icon: <Rocket size={24} />,
    desc: "Your website goes live smoothly. I guide you on how to manage it and remain available for fixes or updates if needed.",
  },
];

const Process = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16 md:text-center max-w-2xl mx-auto"
      >
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark dark:text-light mb-4">
          How the Process Works
        </h2>
        <p className="text-gray text-lg">
          A simple, transparent four-step process to take your website from idea
          to a live business asset.
        </p>
      </motion.div>

      {/* Steps Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
      >
        <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent -z-10"></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            // variants={fadeUp}
            className="group relative flex flex-col items-start p-6 rounded-xl bg-light dark:bg-dark border border-black/10 dark:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-black/30 dark:hover:border-white/30 hover:shadow-xl"
          >
            <div className="absolute -top-4 -right-4 text-6xl font-black text-black/5 dark:text-white/5 font-heading group-hover:text-black/10 dark:group-hover:text-white/10 transition-colors select-none">
              {step.id}
            </div>

            <div className="w-12 h-12 mb-6 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/5 text-dark dark:text-light group-hover:bg-dark group-hover:text-light dark:group-hover:bg-light dark:group-hover:text-dark transition-colors duration-300">
              {step.icon}
            </div>

            <h3 className="text-xl font-heading font-bold text-dark dark:text-light mb-3">
              {step.title}
            </h3>

            <p className="text-sm text-gray/80 dark:text-gray leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Process;
