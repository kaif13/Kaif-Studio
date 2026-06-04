import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { fadeUp } from "../../animations";

const points = [
  "Clean frontend design and development",
  "Business-first messaging and layout",
  "Responsive delivery for mobile, tablet, and desktop",
];

const About = () => {
  return (
    <section className="px-6 py-14 md:py-16">
      <Motion.div
        variants={fadeUp}
        initial="visible"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-black/10 bg-dark p-7 text-light shadow-2xl shadow-black/15 dark:border-white/10 dark:bg-white dark:text-dark md:grid-cols-2 md:p-10 lg:p-12"
      >
        <div>
          <img
            src="/about-kaif.jpg"
            alt="Mohammad Kaif"
            className="mx-auto w-4/5 rounded-2xl object-cover shadow-2xl shadow-black/20 ring-1 ring-[#B8892E]/30 md:mx-0"
          />
          <p className="mt-3 text-sm text-white/55 dark:text-black/55">
            Mohammad Kaif · Founder, Kaif Web Studio
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#c7850b] dark:text-[#bb8a0f]">
            About Kaif
          </p>
          <h2 className="font-heading text-4xl font-black leading-tight md:text-5xl">
            Frontend design that makes your brand feel more valuable.
          </h2>
          <p className="text-base leading-8 text-white/70 dark:text-black/65 md:text-lg">
            I am Kaif, a frontend web designer and developer helping service
            businesses look premium online through clean design, modern UI, and
            conversion-focused websites.
          </p>

          <div className="mt-8 grid gap-3">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold dark:border-black/10 dark:bg-black/5"
              >
                <CheckCircle2 size={18} className="text-brand" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </Motion.div>
    </section>
  );
};

export default About;
