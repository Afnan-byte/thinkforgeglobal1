import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import hero from "../Assets/hero2.webp";
import InteractiveGridPattern from "../IntractiveGrid/IntractiveGrid";

export default function ConnectSection({ variant = "default" }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      variant === "default"
        ? `Hello, I am ${name} from ${company}. I would like to connect with you.`
        : messageText;
    const whatsappUrl = `https://wa.me/919745004161?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative bg-black overflow-hidden px-4 py-16 font-cal-sans">
      <div
        className="relative bg-white min-h-screen px-4 py-12 overflow-hidden rounded-xl"
        id="team"
      >
        <InteractiveGridPattern
          className="absolute inset-0 mask-[radial-gradient(400px_circle_at_center,white,transparent)] text-gray-100 z-10 pointer-events-auto"
          width={60}
          height={60}
          squares={[80, 80]}
        />
        <InteractiveGridPattern
          className="absolute inset-0 text-gray-300 z-10 pointer-events-auto"
          width={60}
          height={60}
          squares={[80, 80]}
        />

        <img
          src={hero}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-20 pointer-events-none"
        />
       <div className="absolute top-[25%] left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 w-full max-w-xl space-y-10">
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl text-black leading-tight text-center">
            <span className="text-red-500 text-4xl md:text-7xl">Connect</span><br/>
            <span className="block sm:inline"> with us</span>
          </h2>

          {variant === "default" ? (
            <button
              onClick={() => setShowForm(true)}
              className="inline-block font-sfpro bg-black border border-white text-white font-bold 
               py-4 px-10 rounded-full text-xl shadow-md 
               hover:bg-white hover:text-black 
               transition-all duration-300
               sm:py-3 sm:px-8 sm:text-lg"
            >
              Send a message
            </button>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mt-6"
            >
              <input
                type="text"
                placeholder="Send a message"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="font-sfpro bg-black border border-white text-white placeholder-white font-semibold 
                 py-3 px-6 text-base rounded-full shadow-md 
                 transition-all duration-300
                 w-full sm:w-[30%] md:w-[70%] lg:w-[90%]
                 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </form>
          )}
        </div>

        <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white text-lg md:text-5xl font-semibold z-30">
          Forging Smarter Growth <br />
          Through Technology
        </p>
      </div>

      {variant === "default" && showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-sfpro">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
              onClick={() => setShowForm(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded flex items-center justify-center gap-2 text-lg"
              >
                <FaWhatsapp className="text-xl" />
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
