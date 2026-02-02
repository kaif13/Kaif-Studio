import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Instagram, CheckCircle } from "lucide-react";
import { fadeUp } from "../../animations";

// --- POPUP COMPONENT ---
const SuccessPopup = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
    <div className="bg-light dark:bg-dark border border-black/10 dark:border-white/10 p-8 rounded-2xl shadow-2xl max-w-sm w-full">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-heading font-bold text-dark dark:text-light">
          Message Sent Successfully
        </h3>
        <p className="text-gray text-sm">
          Thanks for reaching out. I’ll review your message and reply to your
          email as soon as possible.
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full py-3 bg-dark dark:bg-light text-light dark:text-dark font-bold rounded-md hover:opacity-90 transition-opacity uppercase tracking-widest text-xs"
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
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative">
      {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="font-heading font-bold text-5xl md:text-7xl mb-8 text-dark dark:text-light">
              Start your <br />
              <span className="text-gray/50">project.</span>
            </h2>

            <p className="text-lg md:text-xl text-gray mb-12 font-body leading-relaxed max-w-md">
              Tell me about your business and what you’re looking to build. I’ll
              review your request and let you know the next steps clearly.
            </p>

            <div className="space-y-2 mb-10">
              <p className="text-xs uppercase font-bold text-gray">
                Or email me directly
              </p>
              <a
                href="mailto:mohamaddkaif0602@gmail.com"
                className="text-2xl font-heading font-medium text-dark dark:text-light hover:underline decoration-1 underline-offset-4"
              >
                mohamaddkaif0602@gmail.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase font-bold text-gray mb-4">
              Connect with me
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/kaif13"
                className="p-3 border border-black/10 dark:border-white/10 rounded-full text-dark dark:text-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammadkaif1311/"
                className="p-3 border border-black/10 dark:border-white/10 rounded-full text-dark dark:text-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/__mohammad_kaif/?hl=en"
                className="p-3 border border-black/10 dark:border-white/10 rounded-full text-dark dark:text-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: FORM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-light dark:bg-dark border border-black/10 dark:border-white/10 p-8 rounded-2xl h-fit"
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="text-xs uppercase font-bold text-gray mb-2 block">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-lg text-dark dark:text-light focus:outline-none focus:border-dark dark:focus:border-light transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="text-xs uppercase font-bold text-gray mb-2 block">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-lg text-dark dark:text-light focus:outline-none focus:border-dark dark:focus:border-light transition-colors"
                placeholder="Your email address"
              />
            </div>

            <div>
              <label className="text-xs uppercase font-bold text-gray mb-2 block">
                Project Details
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-lg text-dark dark:text-light focus:outline-none focus:border-dark dark:focus:border-light transition-colors resize-none"
                placeholder="Briefly describe your business and what you need help with"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-4 bg-dark dark:bg-light text-light dark:text-dark font-bold rounded-md hover:opacity-90 transition-opacity uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? "Sending..." : "Request a response"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
