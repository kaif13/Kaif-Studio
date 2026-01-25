import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser"; // Make sure to npm install @emailjs/browser
import { Github, Linkedin, Instagram, X, CheckCircle } from "lucide-react";

// --- POPUP COMPONENT ---
const SuccessPopup = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
    <div className="bg-light dark:bg-dark border border-black/10 dark:border-white/10 p-8 rounded-2xl shadow-2xl max-w-sm w-full transform scale-100 transition-transform">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-heading font-bold text-dark dark:text-light">
          Message Sent!
        </h3>
        <p className="text-gray text-sm">
          Thanks for reaching out. I'll get back to you at your email address
          shortly.
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

  // --- HANDLE SUBMIT ---
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    // Sign up at https://www.emailjs.com/ to get these
    const SERVICE_ID = "service_ctjbsw1";
    const TEMPLATE_ID = "template_wkmkjau";
    const PUBLIC_KEY = "04BYAD5utF95GCb7n";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setIsSending(false);
        setShowPopup(true); // Show the thank you popup
        e.target.reset(); // Clear the form
      },
      (error) => {
        console.log(error.text);
        setIsSending(false);
        alert("Failed to send message. Please try again later.");
      },
    );
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Render Popup if State is true */}
      {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Side: Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="font-heading font-bold text-5xl md:text-7xl mb-8 text-dark dark:text-light">
              Let's work <br />
              <span className="text-gray/50">together.</span>
            </h2>

            <p className="text-lg md:text-xl text-gray mb-12 font-body leading-relaxed max-w-md">
              I help brands and companies build digital solutions that are not
              only functional but also captivating.
            </p>

            <div className="space-y-2 mb-10">
              <p className="text-xs uppercase font-bold text-gray">
                Drop me an email
              </p>
              <a
                href="mailto:mohamaddkaif0602@gmail.com"
                className="text-2xl font-heading font-medium text-dark dark:text-light hover:underline decoration-1 underline-offset-4"
              >
                mohamaddkaif0602@gmail.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <p className="text-xs uppercase font-bold text-gray mb-4">
              Follow Me
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
        </div>

        {/* Right Side: Form */}
        <div className="bg-light dark:bg-dark border border-black/10 dark:border-white/10 p-8 rounded-2xl h-fit">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            {/* NAME INPUT */}
            <div className="group">
              <label className="text-xs uppercase font-bold text-gray mb-2 block">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-lg text-dark dark:text-light focus:outline-none focus:border-dark dark:focus:border-light transition-colors"
                placeholder="Enter your name"
              />
            </div>

            {/* EMAIL INPUT */}
            <div className="group">
              <label className="text-xs uppercase font-bold text-gray mb-2 block">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-lg text-dark dark:text-light focus:outline-none focus:border-dark dark:focus:border-light transition-colors"
                placeholder="Enter your email"
              />
            </div>

            {/* MESSAGE INPUT */}
            <div className="group">
              <label className="text-xs uppercase font-bold text-gray mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-lg text-dark dark:text-light focus:outline-none focus:border-dark dark:focus:border-light transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-4 bg-dark dark:bg-light text-light dark:text-dark font-bold rounded-md hover:opacity-90 transition-opacity uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
