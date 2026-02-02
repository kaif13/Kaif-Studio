import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations";

const projects = [
  {
    title: "Sathi Salon Center",
    cat: "Local Business Website",
    desc: "Designed a modern website for a salon to showcase services, pricing, and make it easy for customers to contact and book appointments.",
    img: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop",
    link: "https://sathi-saloon-center.netlify.app/",
  },
  {
    title: "Broadway Kia",
    cat: "Business Landing Page",
    desc: "Built a promotional landing page to highlight vehicle offerings, improve brand presence, and capture customer interest through a clean and responsive layout.",
    img: "https://images.unsplash.com/photo-1625037669052-7e033716f325?q=80&w=1170&auto=format&fit=crop",
    link: "https://broadway-kia.netlify.app/",
  },
  {
    title: "FlowBase",
    cat: "Service Business Landing Page",
    desc: "Created a conversion-focused landing page to present services clearly, build trust, and encourage visitors to get in touch for inquiries.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop",
    link: "https://landingpagekaif.netlify.app/",
  },
  {
    title: "Blink Game",
    cat: "UI & Interaction Demo",
    desc: "An interactive browser-based project demonstrating smooth animations, performance optimization, and engaging user interactions.",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    link: "https://blinkgame.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="work"
      className="py-20 px-6 max-w-7xl mx-auto transition-colors duration-300"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center items-center mb-12"
      >
        <h2 className="font-heading font-bold text-3xl text-dark dark:text-light">
          Business Work & Examples
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            variants={fadeUp}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group cursor-pointer relative
              border border-black/10 dark:border-white/10 rounded-xl p-4
              bg-light dark:bg-dark
              transition-all duration-500 ease-out
              block
              hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.1),0_0_80px_15px_rgba(0,0,0,0.1)] 
              dark:hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.15),0_0_80px_15px_rgba(255,255,255,0.1)]
              hover:-translate-y-2 
              hover:border-black/20 dark:hover:border-white/20
              z-10 hover:z-20
            "
          >
            {/* Image */}
            <div className="overflow-hidden w-full h-48 rounded-lg mb-5 relative bg-gray/10">
              <img
                src={project.img}
                alt={project.title}
                className="
                  w-full h-full object-cover 
                  grayscale group-hover:grayscale-0 
                  transition-all duration-700 ease-out 
                  transform group-hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="text-lg font-heading font-bold text-dark dark:text-light leading-tight group-hover:underline decoration-1 underline-offset-4">
                  {project.title}
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-wider text-gray mt-1">
                  {project.cat}
                </p>
              </div>

              <p className="text-sm text-gray/80 dark:text-gray leading-relaxed line-clamp-2">
                {project.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
