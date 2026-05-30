import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations";

const projects = [
  {
    title: "Aurum Fit Club",
    cat: "Luxury Fitness Website",
    goal: "Built with a premium fitness experience, admin panel, contact form, BMI calculator, and membership-focused enquiry flow.",
    tags: ["Admin panel", "Contact form", "BMI calculator"],
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=70&w=760&auto=format&fit=crop",
    link: "https://aurum-fit-club.web.app/",
  },
  {
    title: "Qamar Noir",
    cat: "Luxury Cafe Website",
    goal: "Designed to make the cafe look premium, client-ready, and memorable online.",
    tags: ["Luxury brand", "Cafe website", "Premium UI"],
    img: "https://images.unsplash.com/photo-1565650839149-2c48a094196c?w=760&auto=format&fit=crop&q=70",
    link: "https://qamarnoircafe.netlify.app/",
  },
  {
    title: "Haji Jewellers",
    cat: "Luxury Jewellery Website",
    goal: "Created to present jewellery collections with a premium brand feel, stronger trust, and clear customer enquiry paths.",
    tags: ["Jewellery brand", "Luxury UI", "Product showcase"],
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=70&w=760&auto=format&fit=crop",
    link: "https://hajijewellers.netlify.app/",
  },
  {
    title: "Caelvorn Estates",
    cat: "Luxury Real Estate",
    goal: "Built to improve brand trust and present premium properties with authority.",
    tags: ["Real estate", "Luxury market", "Property showcase"],
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=70&w=760&auto=format&fit=crop",
    link: "https://caelvorn.netlify.app/",
  },
  {
    title: "Sathi Salon Center",
    cat: "Salon Website",
    goal: "Created for better online presence, trust, and appointment enquiries.",
    tags: ["Salon brand", "Booking CTA", "Local business"],
    img: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=70&w=640&auto=format&fit=crop",
    link: "https://sathi-saloon-center.netlify.app/",
  },
  {
    title: "Broadway Kia",
    cat: "Automotive Landing Page",
    goal: "Built to improve buyer confidence and generate more local enquiries.",
    tags: ["Automotive", "Lead focused", "Responsive"],
    img: "https://images.unsplash.com/photo-1625037669052-7e033716f325?q=70&w=640&auto=format&fit=crop",
    link: "https://broadway-kia.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="px-4 py-12 min-[390px]:px-5 md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Motion.div
          variants={fadeUp}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 grid gap-5 md:mb-12 md:gap-7 lg:mb-14 lg:grid-cols-[0.9fr_0.6fr] lg:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#8a5f12] dark:text-[#d8b45a]">
              Selected work
            </p>
            <h2 className="max-w-3xl font-heading text-3xl font-black leading-tight text-dark dark:text-light min-[390px]:text-4xl md:text-5xl">
              Websites that make small businesses feel premium, trusted, and
              established.
            </h2>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/70 p-5 text-[15px] leading-7 text-gray shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:text-white/65 min-[390px]:p-6 min-[390px]:text-base min-[390px]:leading-8">
            A focused collection of business websites designed to improve
            trust, enquiries, and online presence.
          </div>
        </Motion.div>

        <Motion.div
          variants={staggerContainer}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-6"
        >
          {projects.map((project, index) => (
            <Motion.a
              key={project.title}
              variants={fadeUp}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand/35 hover:shadow-2xl hover:shadow-brand/10 dark:border-white/10 dark:bg-[#0b0b0b] ${
                index < 2
                  ? "lg:col-span-3"
                  : "md:col-span-1 lg:col-span-2"
              }`}
            >
              <div className="relative overflow-hidden bg-black">
                <img
                  src={project.img}
                  alt={project.title}
                  width={index < 2 ? "760" : "640"}
                  height={index < 2 ? "520" : "430"}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 ${
                    index < 2 ? "h-64 min-[390px]:h-72 md:h-80" : "h-60 min-[390px]:h-64"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/20 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-xl">
                  {project.cat}
                </span>
                <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-dark shadow-xl transition-all duration-500 group-hover:bg-brand group-hover:text-dark">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              <div className="flex flex-col p-5 min-[390px]:p-6 md:p-7">
                <div className="mb-4 flex items-start justify-between gap-4 min-[390px]:mb-5">
                  <h3 className="font-heading text-[1.6rem] font-black leading-tight text-dark dark:text-light min-[390px]:text-[1.7rem] md:text-[1.7rem]">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={20}
                    className="mt-1 flex-shrink-0 text-gray transition-colors group-hover:text-brand"
                  />
                </div>

                <p className="text-base leading-8 text-gray dark:text-white/72">
                  {project.goal}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 min-[390px]:mt-6 min-[390px]:gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-black/[0.035] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-dark/75 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/75 min-[390px]:px-3.5 min-[390px]:text-[11px] min-[390px]:tracking-[0.16em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-black/10 pt-5 dark:border-white/10">
                  <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-black uppercase tracking-widest text-dark shadow-lg shadow-brand/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-brand/35">
                    View Live Project
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </Motion.a>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;
