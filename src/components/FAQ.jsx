import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on the scope. A landing page usually takes 2-3 days. A service business website or redesign typically takes 1-2 weeks. I always confirm the timeline clearly before starting.",
  },
  {
    question: "Do you charge hourly or per project?",
    answer:
      "Most projects are priced at a fixed cost so you know exactly what to expect upfront. Hourly pricing is only used for small updates or ongoing fixes after launch.",
  },
  {
    question: "Can you help with hosting and domain setup?",
    answer:
      "Yes. I can guide you through hosting and domain setup or handle it for you if needed. Everything is kept simple, reliable, and easy to manage.",
  },
  {
    question: "What if I need changes after the website is live?",
    answer:
      "Minor fixes are included after launch. If you need additional updates or new sections later, we can handle them through a simple hourly rate or a small follow-up project.",
  },
  {
    question: "Do I need to provide a design or content?",
    answer:
      "No. I can take care of the design and structure for you. If you already have content or design files, I am happy to work with those as well.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
      <Motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-brand">
          Questions
        </p>
        <h2 className="font-heading text-4xl font-black text-dark dark:text-light md:text-5xl">
          Clear answers before we start.
        </h2>
      </Motion.div>

      <Motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-3"
      >
        {faqs.map((faq, index) => (
          <Motion.div
            key={faq.question}
            variants={fadeUp}
            className={`overflow-hidden rounded-2xl border transition-all duration-500 ease-premium ${
              openIndex === index
                ? "border-brand/40 bg-brand/5"
                : "border-black/10 bg-white hover:border-brand/30 dark:border-white/10 dark:bg-dark"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none"
            >
              <span className="font-heading text-lg font-bold text-dark dark:text-light">
                {faq.question}
              </span>
              <span
                className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  openIndex === index
                    ? "bg-brand text-dark"
                    : "bg-black/[0.04] text-gray dark:bg-white/[0.06]"
                }`}
              >
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>

            <div
              className={`px-5 overflow-hidden transition-all duration-500 ease-premium ${
                openIndex === index
                  ? "max-h-40 pb-5 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="leading-7 text-gray dark:text-white/60">
                {faq.answer}
              </p>
            </div>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
};

export default FAQ;
