import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import hero from "../Assets/hero2.webp";
import InteractiveGridPattern from "../intractiveGrid/intractiveGrid";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello, I am ${name} from ${company}. I would like to connect with you.`;
    const whatsappUrl = `https://wa.me/919745004161?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative bg-white min-h-screen px-4 py-32 overflow-hidden" id="hero">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <InteractiveGridPattern
          className="text-gray-400"
          width={60}
          height={60}
          squares={[80, 80]}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-80 z-10 pointer-events-none" />

      {/* Bottom Image */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <img
          src={hero}
          alt="Hero Graphic"
          className="w-full object-cover max-h-[25vh] sm:max-h-[30vh] md:max-h-[40vh]"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 text-center px-6 font-cal-sans font-thin max-w-4xl mx-auto">
        <p className="text-xs sm:text-sm text-gray-600 mb-2 flex items-center justify-center animate-blink">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 inline-block"></span>
          Available for New Projects
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Forging <span className="text-black">Smarter Growth</span>
          <br />
          <span className="text-black font-normal">Through</span>{" "}
          <span className="text-red-500">Technology</span>
        </h1>

        <p className="mt-4 text-gray-700 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
          We don’t just create tech, we solve your brand’s biggest challenges
        </p>

        <div className="mt-12 sm:mt-16">
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-white border border-gray-300 text-black rounded-full shadow hover:shadow-lg transition text-sm sm:text-base"
          >
            Connect With Us
          </button>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
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
                className="w-full bg-green-600 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-green-700 transition"
              >
                <FaWhatsapp className="text-lg" />
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
