import React, { useEffect, useState } from "react";

const StartupIntro = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 1550);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="startup-intro fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-light text-dark dark:bg-dark dark:text-light"
      aria-hidden="true"
    >
      <div className="startup-intro-bg absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(184,137,46,0.22),transparent_34%),linear-gradient(180deg,rgba(255,255,250,0.96),rgba(247,248,244,1))] dark:bg-[radial-gradient(circle_at_50%_42%,rgba(184,137,46,0.26),transparent_34%),linear-gradient(180deg,rgba(8,10,15,1),rgba(8,10,15,1))]" />

      <div className="startup-intro-content relative flex flex-col items-center">
        <div className="startup-intro-mark relative mb-5 grid h-20 w-20 place-items-center rounded-full border border-brand/40 bg-white/70 shadow-2xl shadow-brand/20 backdrop-blur-xl dark:bg-white/[0.06]">
          <span className="font-heading text-3xl font-black text-[#8a5f12] dark:text-[#d8b45a]">
            K
          </span>
          <span className="startup-intro-ring absolute inset-[-7px] rounded-full border border-brand/25" />
        </div>

        <p className="startup-intro-title text-xs font-bold uppercase tracking-[0.32em] text-[#8a5f12] dark:text-[#d8b45a]">
          Kaif Web Studio
        </p>
        <div className="startup-intro-line mt-5 h-px w-44 overflow-hidden bg-black/10 dark:bg-white/10">
          <div className="h-full w-full bg-brand" />
        </div>
      </div>
    </div>
  );
};

export default StartupIntro;
