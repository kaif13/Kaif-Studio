import React from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    icon: <Search size={24} />,
    desc: "We hop on a call. I ignore the fluff and dig deep to find the root problem your business needs to solve.",
  },
  {
    id: "02",
    title: "Strategy",
    icon: <PenTool size={24} />,
    desc: "I architect a user flow that guides your visitors exactly where you want them to go.",
  },
  {
    id: "03",
    title: "Development",
    icon: <Code2 size={24} />,
    desc: "I build with React & Tailwind. Clean code, semantic HTML, and accessibility are standard.",
  },
  {
    id: "04",
    title: "Launch",
    icon: <Rocket size={24} />,
    desc: "I deploy your site to the edge. Then, I record a video tutorial showing you exactly how to manage it.",
  },
];

const Process = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 md:text-center max-w-2xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark dark:text-light mb-4">
          How We Build This
        </h2>
        <p className="text-gray text-lg">
          No guessing games. A transparent, four-step process to get you from
          idea to revenue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent -z-10"></div>
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-start p-6 rounded-xl bg-light dark:bg-dark border border-black/10 dark:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-black/30 dark:hover:border-white/30 hover:shadow-xl"
          >
            <div className="absolute -top-4 -right-4 text-6xl font-black text-black/5 dark:text-white/5 font-heading group-hover:text-black/10 dark:group-hover:text-white/10 transition-colors select-none">
              {step.id}
            </div>
            <div className="w-12 h-12 mb-6 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/5 text-dark dark:text-light group-hover:bg-dark group-hover:text-light dark:group-hover:bg-light dark:group-hover:text-dark transition-colors duration-300">
              {step.icon}
            </div>
            <h3 className="text-xl font-heading font-bold text-dark dark:text-light mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-gray/80 dark:text-gray leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
