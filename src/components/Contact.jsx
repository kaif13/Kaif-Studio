import React, { useState, useRef } from "react";
import { motion as Motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Instagram, CheckCircle } from "lucide-react";
import { fadeUp } from "../../animations";

// --- POPUP COMPONENT ---
const SuccessPopup = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity">
    <div className="w-full max-w-sm rounded-2xl border border-black/10 bg-white p-8 shadow-2xl dark:border-white/10 dark:bg-[#0b0b0b]">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
          <CheckCircle size={32} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-dark dark:text-light">
          Message Sent Successfully
        </h3>
        <p className="text-sm text-gray">
          Thanks for reaching out. I will review your message and reply to your
          email as soon as possible.
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full rounded-full bg-dark py-3 text-xs font-bold uppercase tracking-widest text-light transition-opacity hover:opacity-90 dark:bg-light dark:text-dark"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const formRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_ctjbsw1";
    const TEMPLATE_ID = "template_wkmkjau";
    const PUBLIC_KEY = "04BYAD5utF95GCb7n";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setIsSending(false);
        setShowPopup(true);
        e.target.reset();
      },
      () => {
        setIsSending(false);
        alert("Failed to send message. Please try again later.");
      },
    );
  };

  return (
    <section id="contact" className="relative px-6 py-14 md:py-16">
      {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}

      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-brand/10 to-transparent" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT SIDE */}
        <Motion.div
          variants={fadeUp}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between rounded-2xl border border-black/10 bg-dark p-8 text-light shadow-2xl shadow-black/20 dark:border-white/10 dark:bg-white dark:text-dark md:p-10"
        >
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-brand">
              Book a free website review
            </p>
            <h2 className="mb-8 font-heading text-5xl font-black leading-none md:text-6xl">
              Let's make your business look premium online.
            </h2>

            <p className="mb-10 max-w-md text-base leading-8 text-white/65 dark:text-black/65 md:text-lg">
              Tell me about your business and what you are looking to build. I
              will review your request and suggest the clearest next step.
            </p>

            <div className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-5 dark:border-black/10 dark:bg-black/5">
              <p className="text-xs font-bold uppercase tracking-widest text-white/45 dark:text-black/45">
                Direct email
              </p>
              <a
                href="mailto:mohamaddkaif0602@gmail.com"
                className="mt-2 block break-all font-heading text-xl font-bold hover:underline md:text-2xl"
              >
                kaifwebstudio@gmail.com
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/45 dark:text-black/45">
              Connect with me
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/kaif13"
                className="rounded-full border border-white/10 p-3 transition-all hover:-translate-y-1 hover:bg-white hover:text-dark dark:border-black/10 dark:hover:bg-dark dark:hover:text-light"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammadkaif1311/"
                className="rounded-full border border-white/10 p-3 transition-all hover:-translate-y-1 hover:bg-white hover:text-dark dark:border-black/10 dark:hover:bg-dark dark:hover:text-light"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/__mohammad_kaif/?hl=en"
                className="rounded-full border border-white/10 p-3 transition-all hover:-translate-y-1 hover:bg-white hover:text-dark dark:border-black/10 dark:hover:bg-dark dark:hover:text-light"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </Motion.div>

        {/* RIGHT SIDE: FORM */}
        <Motion.div
          variants={fadeUp}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="h-fit rounded-2xl border border-black/10 bg-white p-6 shadow-2xl shadow-black/10 dark:border-white/10 dark:bg-[#0b0b0b] md:p-8"
        >
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand">
              Project enquiry
            </p>
            <h3 className="mt-3 font-heading text-3xl font-black text-dark dark:text-light">
              Share the essentials. I will take it from there.
            </h3>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-base text-dark outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/10 dark:border-white/10 dark:bg-white/5 dark:text-light"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-base text-dark outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/10 dark:border-white/10 dark:bg-white/5 dark:text-light"
                placeholder="Your email address"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray">
                Project Details
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full resize-none rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-base text-dark outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/10 dark:border-white/10 dark:bg-white/5 dark:text-light"
                placeholder="Tell me your business type, website goal, and timeline"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full rounded-full bg-brand py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-brand/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-brand/40 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Request Website Review"}
            </button>
          </form>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;
