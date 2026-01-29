import React from "react";

const projects = [
  {
    title: "Sathi Saloon Center",
    cat: "Web Application",
    desc: "A fully functional online store featuring product filtering, cart management, and secure checkout integration.",
    img: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // TODO: Add your actual link here
    link: "https://sathi-saloon-center.netlify.app/",
  },
  {
    title: "Blink Game",
    cat: "Interactive Game",
    desc: "A browser-based interactive game testing reaction speeds, built with JavaScript for high performance.",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    link: "https://blinkgame.netlify.app/",
  },
  {
    title: "Broadway-Kia",
    cat: "Automotive Landing Page",
    desc: "A responsive promotional website showcasing vehicle features with smooth animations and modern UI design.",
    img: "https://images.unsplash.com/photo-1625037669052-7e033716f325?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://broadway-kia.netlify.app/",
  },
  // {
  //   title: "Kaif Travel Blog",
  //   cat: "Personal Blog",
  //   desc: "My official freelance portfolio designed to showcase my frontend development skills and services.",
  //   img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop",
  //   link: "https://travel-blog-kaif.netlify.app/",
  // },
];

const Projects = () => {
  return (
    <section
      id="work"
      className="py-20 px-6 max-w-7xl mx-auto transition-colors duration-300"
    >
      <div className="flex justify-center items-center mb-12">
        <h2 className="font-heading font-bold text-3xl text-dark dark:text-light">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group cursor-pointer relative
              border border-black/10 dark:border-white/10 rounded-xl p-4
              bg-light dark:bg-dark
              transition-all duration-500 ease-out
              block /* Ensures the anchor tag behaves like a block container */
              
              /* EXTREME GLOW EFFECT */
              hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.1),0_0_80px_15px_rgba(0,0,0,0.1)] 
              dark:hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.15),0_0_80px_15px_rgba(255,255,255,0.1)]
              
              hover:-translate-y-2 
              hover:border-black/20 dark:hover:border-white/20
              z-10 hover:z-20
            "
          >
            {/* Image Container */}
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

            {/* Project Content */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-heading font-bold text-dark dark:text-light leading-tight group-hover:underline decoration-1 underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-gray mt-1">
                    {project.cat}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray/80 dark:text-gray leading-relaxed line-clamp-2">
                {project.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
