import React from "react";
import { MousePointer2 } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-4 pb-0 pt-28 min-[390px]:px-5 md:min-h-screen md:px-6 md:pb-10 md:pt-32"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_12%,rgba(177,132,69,0.15),transparent_34%),linear-gradient(145deg,#f8f6f1_0%,#f1eee8_52%,#e9e4dc_100%)] dark:bg-[linear-gradient(135deg,#181817_0%,#201e1a_48%,#10100f_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.18] dark:opacity-[0.12] [background-image:linear-gradient(rgba(24,24,23,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,23,0.1)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)] dark:[background-image:linear-gradient(rgba(248,246,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(248,246,241,0.1)_1px,transparent_1px)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px] md:h-[34rem] md:w-[34rem]" />

      <div className="mx-auto flex max-w-7xl flex-col">
        <div className="relative pb-6 lg:pt-4 text-center sm:pb-8 md:py-12 lg:py-14">
          <div className="hero-reveal hero-reveal-delay-1 mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-dark/15 bg-white/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-dark/65 backdrop-blur-md dark:border-light/15 dark:bg-white/5 dark:text-light/65 md:mb-7">
            <MousePointer2 size={13} className="text-brand" />
            Websites built to be remembered
          </div>

          <h1 className="font-heading font-black uppercase leading-[0.82] tracking-[-0.065em] text-dark dark:text-light">
            <span className="hero-slide-left block text-[16vw] sm:text-[13vw] lg:text-[9.4rem]">
              Design that
            </span>
            <span className="hero-slide-right hero-slide-delay-1 relative mx-auto mt-3 flex w-fit items-center justify-center px-4 text-[17vw] text-brand sm:text-[14vw] md:mt-4 lg:text-[10rem]">
              means
            </span>
            <span className="hero-slide-left hero-slide-delay-2 mt-3 block text-[16vw] sm:text-[13vw] md:mt-4 lg:text-[9.4rem]">
              business.
            </span>
          </h1>

          {/* <div className="hero-reveal hero-reveal-delay-3 mx-auto mt-7 grid max-w-5xl items-end gap-6 md:mt-10 md:grid-cols-[1fr_auto_1fr]">
            <a
              href="#work"
              className="group mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-dark text-center text-[10px] font-bold uppercase tracking-[0.16em] text-light shadow-2xl shadow-black/20 transition-all duration-500 hover:scale-105 hover:bg-brand hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-brand md:h-28 md:w-28"
            >
              <span>
                Explore
                <br />
                my work
              </span>
              <ArrowDown
                size={14}
                className="ml-1 transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
