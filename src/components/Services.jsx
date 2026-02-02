import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations";

const services = [
  {
    title: "Landing Page for Businesses",
    timeline: "2–3 Days",
    price: "Starting at $199",
    desc: "A focused one-page website designed to convert visitors into inquiries through clear messaging, fast load speed, and strong call-to-action placement.",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Service Business Website",
    timeline: "1–2 Weeks",
    price: "Starting at $599",
    desc: "A professional multi-page website for service-based businesses to present services clearly, build trust, and make it easy for customers to get in touch.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Business Website Redesign",
    timeline: "1–2 Weeks",
    price: "Starting at $799",
    desc: "Redesign an outdated or slow website with a modern layout, improved user experience, and better structure to increase engagement and inquiries.",
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Website Updates & Fixes",
    timeline: "Flexible",
    price: "$25 / hour",
    desc: "Small fixes, design updates, performance improvements, or help with existing websites without committing to a full redesign.",
    img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2000&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 max-w-7xl mx-auto transition-colors duration-300"
    >
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center items-center mb-12"
      >
        <h2 className="font-heading font-bold text-3xl text-dark dark:text-light">
          Services for Businesses
        </h2>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="
              group flex flex-col relative
              border border-black/10 dark:border-white/10 rounded-xl p-4
              bg-light dark:bg-dark
              transition-all duration-500 ease-out
              hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.05)] 
              dark:hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.05)]
              hover:-translate-y-2 
              hover:border-black/20 dark:hover:border-white/20
            "
          >
            <div className="overflow-hidden w-full h-48 rounded-lg mb-5 relative bg-gray/10">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col flex-grow gap-4">
              <div className="flex justify-between items-start w-full">
                <div className="pr-4">
                  <h3 className="text-lg font-heading font-bold text-dark dark:text-light leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-gray mt-1">
                    {service.timeline}
                  </p>
                </div>

                <div className="flex-shrink-0 bg-black/5 dark:bg-white/10 px-3 py-1 rounded-md border border-black/5 dark:border-white/5">
                  <span className="font-mono text-sm font-bold text-dark dark:text-light">
                    {service.price}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray/80 dark:text-gray leading-relaxed line-clamp-3 flex-grow">
                {service.desc}
              </p>

              <a
                href="#contact"
                className="
                  w-full block text-center py-3 rounded-lg 
                  bg-brand text-white 
                  hover:opacity-90 hover:shadow-lg hover:shadow-brand/20 
                  transition-all font-heading text-xs uppercase tracking-widest font-bold
                "
              >
                Start Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
