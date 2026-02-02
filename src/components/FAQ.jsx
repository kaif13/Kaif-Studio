import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on the scope. A landing page usually takes 2–3 days. A service business website or redesign typically takes 1–2 weeks. I always confirm the timeline clearly before starting.",
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
      "No. I can take care of the design and structure for you. If you already have content or design files, I’m happy to work with those as well.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark dark:text-light mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray text-lg">
          Clear answers to help you decide with confidence.
        </p>
      </motion.div>

      {/* FAQ List */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className={`
              border rounded-2xl overflow-hidden transition-all duration-300
              ${
                openIndex === index
                  ? "border-brand bg-brand/5 dark:bg-brand/5"
                  : "border-black/10 dark:border-white/10 bg-light dark:bg-dark hover:border-brand/50"
              }
            `}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <span
                className={`font-heading font-bold text-lg ${
                  openIndex === index
                    ? "text-brand"
                    : "text-dark dark:text-light"
                }`}
              >
                {faq.question}
              </span>
              <span
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-brand" : "text-gray"
                }`}
              >
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>

            <div
              className={`
                px-6 overflow-hidden transition-all duration-300 ease-in-out
                ${
                  openIndex === index
                    ? "max-h-40 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <p className="text-gray leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQ;
