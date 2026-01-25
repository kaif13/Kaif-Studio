import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Kaif is a rare breed of developer who understands design. He delivered our platform ahead of schedule and the code was spotless.",
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "TechFlow",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
    logo: (
      <div className="flex items-center gap-2 text-xl font-bold font-heading">
        <div className="w-6 h-6 bg-dark dark:bg-light rounded-sm"></div>{" "}
        TechFlow
      </div>
    ),
  },
  {
    id: 2,
    quote:
      "We struggled with site performance for months. Kaif came in and optimized our Core Web Vitals in just two weeks. Incredible work.",
    name: "David Chen",
    role: "CTO",
    company: "Onyx Systems",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
    logo: (
      <div className="flex items-center gap-2 text-xl font-bold font-heading">
        <div className="w-6 h-6 rounded-full border-2 border-current"></div>{" "}
        ONYX
      </div>
    ),
  },
  {
    id: 3,
    quote:
      "The attention to detail in the animations and interactions completely transformed our user experience. Highly recommended.",
    name: "Elena Rodriguez",
    role: "Founder",
    company: "Studio Alpha",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
    logo: (
      <div className="flex items-center gap-2 text-xl font-bold font-heading">
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-current border-r-[10px] border-r-transparent"></div>{" "}
        ALPHA
      </div>
    ),
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide useEffect removed.

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto border-t border-black/5 dark:border-white/10">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark dark:text-light">
          Testimonials
        </h2>
      </div>

      <div
        className="
        relative bg-light dark:bg-dark 
        
        /* BRIGHTER DEFAULT BORDER (Increased opacity to 20%) */
        border border-black/20 dark:border-white/20 
        
        rounded-2xl p-8 md:p-16 text-center 
        transition-all duration-500 ease-out
        
        /* GLOW + VERY BRIGHT BORDER ON HOVER */
        hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] 
        dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]
        hover:scale-[1.01]
        
        /* On hover, border becomes 50% opacity (Very visible) */
        hover:border-black/50 dark:hover:border-white/50
      "
      >
        <div className="absolute top-8 left-8 opacity-10">
          <Quote size={40} className="text-dark dark:text-light" />
        </div>

        <div className="flex flex-col items-center animate-fade-in">
          <div className="mb-8 opacity-60 grayscale text-dark dark:text-light">
            {testimonials[current].logo}
          </div>

          <p className="text-xl md:text-2xl font-heading font-medium leading-relaxed text-dark dark:text-light mb-10 max-w-2xl">
            "{testimonials[current].quote}"
          </p>

          <div className="flex items-center gap-4">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-14 h-14 rounded-full object-cover border-2 border-black/10 dark:border-white/10 grayscale"
            />
            <div className="text-left">
              <h4 className="font-bold text-dark dark:text-light leading-tight">
                {testimonials[current].name}
              </h4>
              <p className="text-xs font-mono text-gray uppercase tracking-wider">
                {testimonials[current].role}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-dark dark:text-light transition-colors"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-dark dark:text-light transition-colors"
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-dark dark:bg-light w-6"
                  : "bg-black/20 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
