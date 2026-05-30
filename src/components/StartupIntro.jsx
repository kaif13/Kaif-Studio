import React, { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

const StartupIntro = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-light text-dark dark:bg-dark dark:text-light"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          aria-hidden="true"
        >
          <Motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(184,137,46,0.22),transparent_34%),linear-gradient(180deg,rgba(255,255,250,0.96),rgba(247,248,244,1))] dark:bg-[radial-gradient(circle_at_50%_42%,rgba(184,137,46,0.26),transparent_34%),linear-gradient(180deg,rgba(8,10,15,1),rgba(8,10,15,1))]"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <Motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Motion.div
              className="relative mb-5 grid h-20 w-20 place-items-center rounded-full border border-brand/40 bg-white/70 shadow-2xl shadow-brand/20 backdrop-blur-xl dark:bg-white/[0.06]"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-heading text-3xl font-black text-brand">
                K
              </span>
              <Motion.span
                className="absolute inset-[-7px] rounded-full border border-brand/25"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1.18, opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </Motion.div>

            <Motion.p
              className="text-xs font-bold uppercase tracking-[0.32em] text-brand"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              Kaif Web Studio
            </Motion.p>
            <Motion.div
              className="mt-5 h-px w-44 overflow-hidden bg-black/10 dark:bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.3 }}
            >
              <Motion.div
                className="h-full w-full bg-brand"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ delay: 0.35, duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
              />
            </Motion.div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default StartupIntro;
