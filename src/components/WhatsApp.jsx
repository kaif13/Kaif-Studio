import React from "react";

const WhatsAppLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.03 3.2A12.65 12.65 0 0 0 5.14 22.31L3.2 29.2l7.06-1.85A12.65 12.65 0 1 0 16.03 3.2Zm0 22.97a10.36 10.36 0 0 1-5.28-1.45l-.38-.23-4.19 1.1 1.12-4.08-.25-.42A10.35 10.35 0 1 1 16.03 26.17Zm5.67-7.75c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-1 1.22-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.23 3.4 5.4 4.76.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z" />
  </svg>
);

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
      <WhatsAppLogo />
    </a>
  );
};

export default WhatsApp;
