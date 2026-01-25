import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is your typical timeline for a project?",
    answer:
      "It depends on the scope. A simple landing page takes 2-4 days. A full multi-page website takes 2-3 weeks. Complex web applications can take 1-2 months. I provide a strict timeline before we start.",
  },
  {
    question: "Do you charge by the hour or per project?",
    answer:
      "I prefer fixed project pricing. This is better for you because you know exactly what you're paying upfront—no surprise bills. My packages start at $200 for simple tasks.",
  },
  {
    question: "Do you provide hosting and domain setup?",
    answer:
      "Yes. I can handle the technical setup for you. I usually recommend Vercel or Netlify for hosting (often free) and can guide you on where to buy your domain.",
  },
  {
    question: "What if I need changes after the site is finished?",
    answer:
      "I include 1 week of free support after launch to fix any bugs. For new features or design changes later on, we can discuss an hourly maintenance rate or a new project scope.",
  },
  {
    question: "Do I need to have the design ready?",
    answer:
      "No! I can design the UI/UX for you. If you already have a Figma file, that's great too—I can build directly from that.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark dark:text-light mb-4">
          Common Questions
        </h2>
        <p className="text-gray text-lg">
          Everything you need to know before we start.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
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
                className={`font-heading font-bold text-lg ${openIndex === index ? "text-brand" : "text-dark dark:text-light"}`}
              >
                {faq.question}
              </span>
              <span
                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180 text-brand" : "text-gray"}`}
              >
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>

            <div
              className={`
                px-6 overflow-hidden transition-all duration-300 ease-in-out
                ${openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <p className="text-gray leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
