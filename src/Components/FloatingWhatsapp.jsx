import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  const whatsappNumber = "919745004161"; // your number
  const message = "Hello! I'd like to know more about your services.";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed bottom-6 right-6 z-50
        bg-green-500 hover:bg-green-600 
        text-white rounded-full shadow-lg 
        w-14 h-14 flex items-center justify-center
        transition-transform duration-300 hover:scale-110
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </button>
  );
}
