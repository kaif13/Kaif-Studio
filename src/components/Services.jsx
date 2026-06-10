import React, { useState } from "react";
import {
  Check,
  Clock3,
  Gem,
  Globe2,
  Store,
  Utensils,
  Wand2,
} from "lucide-react";
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
    title: "Starter Website Package",
    prices: { INR: 6999, USD: 119 },
    desc: "A polished one-page presence for new businesses that need to look credible fast.",
    delivery: "3-4 days delivery",
    features: [
      "1-page professional website",
      "Mobile responsive design",
      "Hero section",
      "About section",
      "Services / plans section",
      "Gallery section",
      "Contact form",
      "WhatsApp button",
      "Google Maps embed",
      "Basic SEO setup",
    ],
  },
  {
    title: "Growth Website Package",
    prices: { INR: 9999, USD: 179 },
    desc: "A complete service-business website built to explain, build trust, and generate enquiries.",
    featured: true,
    delivery: "5-7 days delivery",
    features: [
      "Up to 5 pages",
      "Home, About, Services, Gallery, Contact",
      "Professional custom design",
      "Lead generation form",
      "WhatsApp enquiry integration",
      "Google Maps integration",
      "Testimonials section",
      "Pricing / packages section",
      "Basic on-page SEO",
      "Speed optimization",
    ],
  },
  {
    title: "Professional Conversion Package",
    prices: { INR: 14999, USD: 299 },
    desc: "An advanced conversion-focused website with the tools to manage leads, bookings, and growth.",
    delivery: "10-12 days delivery",
    features: [
      "Everything in Growth",
      "Up to 8 pages",
      "Advanced professional UI design",
      "Booking / appointment form",
      "Admin lead dashboard",
      "Customer enquiry management",
      "Advanced animation",
      "SEO-friendly page structure",
      "Google Analytics setup",
      "1 year of support and maintenance",
    ],
  },
];

const serviceIcons = [<Globe2 />, <Wand2 />, <Store />, <Utensils />, <Gem />];

const detectCurrency = () => {
  if (typeof navigator === "undefined") return "USD";

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const locale = navigator.language || "";

  return timeZone === "Asia/Calcutta" ||
    timeZone === "Asia/Kolkata" ||
    /(?:^|-)IN$/i.test(locale)
    ? "INR"
    : "USD";
};

const formatPrice = (amount, currency) =>
  new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);

const Services = () => {
  const [currency, setCurrency] = useState(detectCurrency);

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
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-brand">
            Services and pricing
          </p>
          <h2 className="font-heading text-3xl font-black leading-tight text-dark dark:text-light min-[390px]:text-4xl md:text-5xl">
            Professional websites for businesses that need to be taken seriously.
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
              className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10 dark:border-white/10 dark:bg-dark md:p-5"
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
          className="mb-7 flex flex-col justify-between gap-5 md:mb-8 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-brand">
              Pricing in {currency}
            </p>
            <h3 className="font-heading text-2xl font-black leading-tight text-dark dark:text-light min-[390px]:text-3xl md:text-4xl">
              Simple packages for serious business websites.
            </h3>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <div
              className="flex rounded-full border border-black/10 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-white/5"
              aria-label="Select pricing currency"
            >
              {["INR", "USD"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setCurrency(option)}
                  className={`rounded-full px-4 py-2 text-xs font-bold tracking-widest transition-all duration-300 ${
                    currency === option
                      ? "bg-dark text-light shadow-md dark:bg-light dark:text-dark"
                      : "text-gray hover:text-dark dark:text-white/55 dark:hover:text-light"
                  }`}
                  aria-pressed={currency === option}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="max-w-md text-[13px] leading-6 text-gray dark:text-white/55 md:text-right">
              Currency is selected from your browser location. You can switch it
              anytime.
            </p>
          </div>
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
              className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 md:p-6 ${
                plan.featured
                  ? "border-brand/50 bg-dark text-light shadow-2xl shadow-brand/20 dark:bg-light dark:text-dark"
                  : "border-black/10 bg-white text-dark hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/10 dark:border-white/10 dark:bg-dark dark:text-light"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-5 top-5 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-dark">
                  Most chosen
                </div>
              )}

              <p
                className={`max-w-[12rem] text-xs font-bold uppercase tracking-[0.2em] ${
                  plan.featured
                    ? "text-brand"
                    : "text-brand"
                }`}
              >
                {plan.title}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span
                  className={`text-sm font-semibold line-through ${
                    plan.featured
                      ? "text-white/45 dark:text-black/45"
                      : "text-gray/70 dark:text-white/40"
                  }`}
                >
                  {formatPrice(
                    Math.ceil(plan.prices[currency] / 0.7),
                    currency,
                  )}
                </span>
                <span className="rounded-full bg-brand/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-brand">
                  30% off
                </span>
              </div>

              <div className="mt-2 flex items-end gap-2">
                <span className="font-heading text-4xl font-black md:text-5xl">
                  {formatPrice(plan.prices[currency], currency)}
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

              <div
                className={`mt-5 flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold uppercase tracking-[0.14em] ${
                  plan.featured
                    ? "bg-white/10 text-brand dark:bg-black/10"
                    : "bg-brand/10 text-brand"
                }`}
              >
                <Clock3 size={15} />
                {plan.delivery}
              </div>

              <div className="mt-5 flex-1 space-y-2.5 md:mt-7 md:space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        plan.featured
                          ? "bg-white/10 text-brand dark:bg-black/10"
                          : "bg-brand/10 text-brand"
                      }`}
                    >
                      <Check size={15} />
                    </span>
                    <span className="text-sm font-medium leading-6">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3.5 text-center text-sm font-bold uppercase tracking-widest transition-all duration-500 hover:-translate-y-1 md:mt-8 md:py-4 ${
                  plan.featured
                    ? "bg-light text-dark shadow-xl shadow-white/10 dark:bg-dark dark:text-light"
                    : "bg-dark text-light shadow-xl shadow-black/10 hover:shadow-brand/20 dark:bg-light dark:text-dark"
                }`}
              >
                Start with this plan
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
