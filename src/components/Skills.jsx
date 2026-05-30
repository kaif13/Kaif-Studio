import React from "react";
import {
  Gauge,
  Layout,
  MessageCircle,
  SearchCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { motion as Motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations";

const valueCards = [
  {
    title: "Premium UI Design",
    desc: "Sharp layouts, refined spacing, and visual systems that make your brand feel established.",
    icon: <Sparkles size={22} />,
  },
  {
    title: "Mobile-First Development",
    desc: "Built for the way customers browse in UAE, India, and global markets.",
    icon: <Smartphone size={22} />,
  },
  {
    title: "Fast Loading Websites",
    desc: "Clean frontend builds that feel responsive and polished across devices.",
    icon: <Gauge size={22} />,
  },
  {
    title: "WhatsApp / Lead Focused",
    desc: "Clear enquiry paths, confident CTAs, and contact flows designed for action.",
    icon: <MessageCircle size={22} />,
  },
  {
    title: "SEO-Friendly Structure",
    desc: "Readable content hierarchy and semantic structure for stronger discoverability.",
    icon: <SearchCheck size={22} />,
  },
  {
    title: "Client-Ready Delivery",
    desc: "A finished website that is clean, responsive, launched, and easy to share.",
    icon: <Layout size={22} />,
  },
];

const Skills = () => {
  return (
    <section className="px-6 py-14 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Motion.div
          variants={fadeUp}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#8a5f12] dark:text-[#d8b45a]">
            Built for business outcomes
          </p>
          <h2 className="font-heading text-4xl font-black text-dark dark:text-light md:text-5xl">
            A website should look premium, load fast, and make contacting you
            obvious.
          </h2>
        </Motion.div>

        <Motion.div
          variants={staggerContainer}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {valueCards.map((card) => (
            <Motion.div
              key={card.title}
              variants={fadeUp}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10 dark:border-white/10 dark:bg-[#0b0b0b]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-dark text-light shadow-lg shadow-black/10 transition-all duration-500 group-hover:bg-brand dark:bg-light dark:text-dark">
                {card.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-dark dark:text-light">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray dark:text-white/60">
                {card.desc}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Skills;
