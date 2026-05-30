import React from "react";
import { Check, Gem, Globe2, Store, Utensils, Wand2 } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations";

const services = [
  "Business Website",
  "Landing Page",
  "Portfolio Website",
  "Cafe / Restaurant Website",
  "Real Estate Website",
  "Jewellery / Luxury Brand Website",
  "Website Redesign",
];

const pricing = [
  {
    title: "Starter Website",
    price: "$199",
    desc: "A polished one-page presence for new businesses that need to look credible fast.",
    features: ["1-page website", "Mobile responsive", "CTA sections", "Basic SEO structure"],
  },
  {
    title: "Business Website",
    price: "$399",
    desc: "A complete service-business website built to explain, build trust, and generate enquiries.",
    featured: true,
    features: [
      "Up to 5 sections/pages",
      "Premium responsive UI",
      "WhatsApp/contact CTA",
      "Project-ready launch support",
    ],
  },
  {
    title: "Premium Website",
    price: "$699+",
    desc: "A more elevated website for luxury brands, real estate, hotels, and richer showcases.",
    features: [
      "Custom visual direction",
      "Advanced sections",
      "Case-study style layout",
      "Priority polish and launch",
    ],
  },
];

const serviceIcons = [<Globe2 />, <Wand2 />, <Store />, <Utensils />, <Gem />];

const Services = () => {
  return (
    <section className="px-4 py-12 min-[390px]:px-5 md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Motion.div
          variants={fadeUp}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 max-w-3xl md:mb-10"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#8a5f12] dark:text-[#d8b45a]">
            Services and pricing
          </p>
          <h2 className="font-heading text-3xl font-black leading-tight text-dark dark:text-light min-[390px]:text-4xl md:text-5xl">
            Premium websites for businesses that need to be taken seriously.
          </h2>
        </Motion.div>

        <Motion.div
          variants={staggerContainer}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2 md:mb-12 md:gap-4 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <Motion.div
              key={service}
              variants={fadeUp}
              className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10 dark:border-white/10 dark:bg-[#0b0b0b] md:p-5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-dark text-light transition-all duration-500 group-hover:bg-brand dark:bg-light dark:text-dark md:mb-5 md:h-11 md:w-11">
                {React.cloneElement(serviceIcons[index % serviceIcons.length], {
                  size: 19,
                })}
              </div>
              <h3 className="font-heading text-base font-bold leading-snug text-dark dark:text-light md:text-lg">
                {service}
              </h3>
            </Motion.div>
          ))}
        </Motion.div>

        <Motion.div
          variants={fadeUp}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-7 flex flex-col justify-between gap-4 md:mb-8 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#8a5f12] dark:text-[#d8b45a]">
              Pricing in USD
            </p>
            <h3 className="font-heading text-2xl font-black leading-tight text-dark dark:text-light min-[390px]:text-3xl md:text-4xl">
              Simple packages for serious business websites.
            </h3>
          </div>
          <p className="max-w-md text-[15px] leading-7 text-gray dark:text-white/65">
            Choose a clear starting point, then we can adjust scope around your
            business goals.
          </p>
        </Motion.div>

        <Motion.div
          variants={staggerContainer}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-3"
        >
          {pricing.map((plan) => (
            <Motion.div
              key={plan.title}
              variants={fadeUp}
              className={`relative overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 md:p-6 ${
                plan.featured
                  ? "border-brand/50 bg-dark text-light shadow-2xl shadow-brand/20 dark:bg-light dark:text-dark"
                  : "border-black/10 bg-white text-dark hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/10 dark:border-white/10 dark:bg-[#0b0b0b] dark:text-light"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-5 top-5 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-widest text-dark">
                  Most chosen
                </div>
              )}
              <p
                className={`text-xs font-bold uppercase tracking-[0.24em] ${
                  plan.featured
                    ? "text-[#d8b45a] dark:text-[#8a5f12]"
                    : "text-[#8a5f12] dark:text-[#d8b45a]"
                }`}
              >
                {plan.title}
              </p>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-heading text-4xl font-black md:text-5xl">
                  {plan.price}
                </span>
                <span
                  className={`pb-2 text-sm ${
                    plan.featured
                      ? "text-white/55 dark:text-black/55"
                      : "text-gray"
                  }`}
                >
                  fixed scope
                </span>
              </div>
              <p
                className={`mt-4 text-[15px] leading-7 md:mt-5 ${
                  plan.featured
                    ? "text-white/65 dark:text-black/65"
                    : "text-gray dark:text-white/60"
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-5 space-y-2.5 md:mt-7 md:space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${
                        plan.featured
                          ? "bg-white/10 text-brand dark:bg-black/10"
                          : "bg-brand/10 text-brand"
                      }`}
                    >
                      <Check size={15} />
                    </span>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-500 hover:-translate-y-1 md:mt-8 md:py-4 ${
                  plan.featured
                    ? "bg-light text-dark shadow-xl shadow-white/10 dark:bg-dark dark:text-light"
                    : "bg-dark text-light shadow-xl shadow-black/10 hover:shadow-brand/20 dark:bg-light dark:text-dark"
                }`}
              >
                Start with {plan.title}
              </a>
            </Motion.div>
          ))}
        </Motion.div>

        <p className="mt-8 text-center text-sm text-gray dark:text-white/55">
          Every plan is structured to improve brand trust and make customer
          enquiries easier.
        </p>
      </div>
    </section>
  );
};

export default Services;
