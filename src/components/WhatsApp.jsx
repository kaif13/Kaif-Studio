import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const phoneNumber = "918112351108";
  const message = "Hello! I would like to know more about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-6 
        right-6 
        z-50 
        flex 
        items-center 
        justify-center 
        w-16 
        h-16 
        bg-green-500 
        text-white 
        rounded-full 
        shadow-lg 
        hover:bg-green-600 
        transition-colors 
        duration-300
        animate-wiggle-3s
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsApp;
