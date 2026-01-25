import React from "react";

const services = [
  {
    title: "Landing Page",
    timeline: "2-3 Days",
    price: "$199",
    desc: "Single-page conversion site. Strict focus on speed and CTA placement. No fluff, just results.",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Portfolio / Personal",
    timeline: "1 Week",
    price: "$599",
    desc: "Showcase your work with a custom design. Includes blog setup and light/dark mode integration.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Business Website",
    timeline: "2 Weeks",
    price: "$999",
    desc: "Multi-page corporate site with CMS integration so you can edit text yourself.",
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "E-Commerce",
    timeline: "3-4 Weeks",
    price: "$1,800+",
    desc: "Complete Shopify or Custom store. Payment gateways, inventory management, and cart logic.",
    img: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SaaS / Web App",
    timeline: "1 Month+",
    price: "$2,500+",
    desc: "Full-stack application with authentication, database, and complex backend logic using Next.js.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Hourly Work",
    timeline: "Flexible",
    price: "$25 / hr",
    desc: "Fixing bugs, small updates, or technical consultation for existing websites.",
    img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2000&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 max-w-7xl mx-auto transition-colors duration-300"
    >
      {/* Header */}
      <div className="flex justify-center items-center mb-12">
        <h2 className="font-heading font-bold text-3xl text-dark dark:text-light">
          Service Menu
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
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
            {/* Image Container */}
            <div className="overflow-hidden w-full h-48 rounded-lg mb-5 relative bg-gray/10">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
              />
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-grow gap-4">
              {/* HEADER ROW: Title (Left) vs Price (Right) */}
              <div className="flex justify-between items-start w-full">
                {/* Left: Title & Timeline */}
                <div className="pr-4">
                  <h3 className="text-lg font-heading font-bold text-dark dark:text-light leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-gray mt-1">
                    {service.timeline}
                  </p>
                </div>

                {/* Right: Price Badge */}
                <div className="flex-shrink-0 bg-black/5 dark:bg-white/10 px-3 py-1 rounded-md border border-black/5 dark:border-white/5">
                  <span className="font-mono text-sm font-bold text-dark dark:text-light">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray/80 dark:text-gray leading-relaxed line-clamp-3 flex-grow">
                {service.desc}
              </p>

              {/* The Blue Button */}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
