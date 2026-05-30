import React from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const stats = [
  { value: "7+", label: "Business builds" },
  { value: "1-2w", label: "Typical delivery" },
  { value: "100%", label: "Mobile focused" },
];

const industries = ["Cafe", "Real Estate", "Salon", "Luxury Brand"];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-4 pb-10 pt-24 min-[390px]:px-5 md:px-6 md:pb-14 md:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(184,137,46,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,250,0.92),rgba(247,248,244,0.98))] dark:bg-[radial-gradient(circle_at_18%_8%,rgba(184,137,46,0.2),transparent_34%),linear-gradient(180deg,rgba(8,10,15,0.92),rgba(8,10,15,1))]" />
      <div className="absolute right-0 top-20 -z-10 h-64 w-64 rounded-full bg-brand/20 blur-[110px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-7 md:gap-8 lg:grid-cols-[0.95fr_1.05fr] xl:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-4xl">
          <div className="hero-reveal mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-dark shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-light md:mb-5 md:px-4 md:text-xs md:tracking-widest">
            <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_18px_rgba(184,137,46,0.75)]" />
            Available for premium website projects
          </div>

          <h1 className="max-w-5xl font-heading text-[2.45rem] font-black leading-[1.03] text-dark dark:text-light min-[390px]:text-[2.75rem] md:text-6xl xl:text-7xl">
            Premium Websites That Make Your Business Look Expensive Online
          </h1>

          <p className="hero-reveal hero-reveal-delay-1 mt-4 max-w-2xl text-[1.05rem] leading-[2.05rem] text-dark/75 dark:text-zinc-300 md:mt-5 md:text-lg md:leading-8 md:text-gray md:dark:text-white/65">
            I design and build modern, mobile-first websites for cafes, real
            estate brands, jewellery stores, hotels, salons, gyms, and service
            businesses that want more trust, enquiries, and online presence.
          </p>

          <div className="hero-reveal hero-reveal-delay-2 mt-5 flex flex-col gap-3 sm:flex-row md:mt-7">
            <a
              href="#work"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-dark px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-light shadow-xl shadow-black/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-brand/25 dark:bg-light dark:text-dark"
            >
              View My Work
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/80 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-dark shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 dark:border-white/10 dark:bg-white/10 dark:text-light"
            >
              <Sparkles size={17} />
              Get a Free Website Quote
            </a>
          </div>

          <div className="hero-reveal hero-reveal-delay-3 mt-6 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 md:mt-7">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/75 p-3.5 dark:bg-white/[0.04] min-[390px]:p-4"
              >
                <p className="font-heading text-xl font-black text-dark dark:text-light min-[390px]:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase leading-4 tracking-[0.14em] text-gray min-[390px]:text-xs min-[390px]:tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-reveal hero-reveal-delay-2 relative">
          <div className="rounded-[1.75rem] border border-black/10 bg-white/80 p-3 shadow-2xl shadow-black/10 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
            <div className="overflow-hidden rounded-[1.35rem] border border-black/10 bg-dark dark:border-white/10">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-white/75">
                  kaif studio system
                </span>
              </div>

              <div className="grid gap-4 p-4 md:p-5">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=65&w=800&auto=format&fit=crop"
                    srcSet="
                      https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=60&w=520&auto=format&fit=crop 520w,
                      https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=65&w=800&auto=format&fit=crop 800w
                    "
                    sizes="(min-width: 1024px) 672px, 100vw"
                    alt="Premium website mockup"
                    width="800"
                    height="533"
                    fetchPriority="low"
                    loading="lazy"
                    decoding="async"
                    className="h-64 w-full object-cover md:h-80 lg:h-[390px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#d8b45a]">
                      Luxury website preview
                    </p>
                    <h2 className="mt-1 max-w-md font-heading text-2xl font-black text-white md:text-4xl">
                      Trust-first design for serious clients.
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm font-bold text-white md:p-4"
                    >
                      <CheckCircle2 size={16} className="text-brand" />
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
