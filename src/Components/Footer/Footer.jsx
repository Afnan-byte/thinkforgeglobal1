import React from "react";

import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

const IconLinkedIn = () => (
  <svg width="20" height="20" fill="white" viewBox="0 0 448 512">
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338C24.9 110 0 85 0 54.4A54.4 54.4 0 0 1 108.8 54.4c0 30.5-24.9 55.5-55 55.5zM447.9 448h-92.8V302.4c0-34.7-12.4-58.3-43.5-58.3-23.7 0-37.8 16-44 31.4-2.3 5.5-2.8 13.2-2.8 20.9V448h-92.8s1.2-241.4 0-266.1h92.8v37.7c12.3-19 34.3-46.3 83.6-46.3 61 0 107 40 107 125.7V448z" />
  </svg>
);

const IconInstagram = () => (
  <svg width="20" height="20" fill="white" viewBox="0 0 448 512">
    <path d="M224.1 141c-63.6 0-114.9 51.2-114.9 114.8s51.3 114.9 114.9 114.9S339 319.4 339 255.8 287.7 141 224.1 141zm89.6-24.8c0 14.9-12 26.8-26.8 26.8-14.8 0-26.8-11.9-26.8-26.8s12-26.8 26.8-26.8c14.8 0 26.8 12 26.8 26.8zM224.1 338c-45.4 0-82.2-36.8-82.2-82.2S178.7 173.7 224.1 173.7 306.3 210.5 306.3 256 269.5 338 224.1 338zm124.7 106.4H99.2c-35.3 0-63.9-28.6-63.9-63.9V131.5c0-35.3 28.6-63.9 63.9-63.9h249.6c35.3 0 63.9 28.6 63.9 63.9v249.6c0 35.3-28.7 63.9-63.9 63.9z" />
  </svg>
);

const IconWhatsapp = () => (
  <svg width="20" height="20" fill="white" viewBox="0 0 448 512">
    <path d="M380.9 97.1C339 55.1 284.6 32 225.6 32 113.9 32 24 121.9 24 233.6c0 36.6 9.6 72.4 27.9 104l-29.4 107 109.7-28.8c30.6 16.6 65 25.4 100.3 25.4h.1c111.7 0 200.5-89.9 200.5-201.6 0-59-23.2-113.4-65.2-155.4zM225.5 403.5h-.1c-31.5 0-62.3-8.5-89.1-24.6l-6.4-3.8-65 17.1 17.4-63.2-4.1-6.5c-17.3-27.4-26.4-59.3-26.4-92 0-94.2 76.7-170.8 170.9-170.8 45.6 0 88.4 17.7 120.7 50 32.3 32.3 50.2 75.2 50.2 120.8 0 94.2-76.7 170.8-170.8 170.8zm96.6-121.7c-5.3-2.6-31.4-15.5-36.3-17.3-4.9-1.8-8.4-2.6-12 2.6-3.6 5.3-13.8 17.3-16.9 20.9-3.1 3.6-6.2 4-11.5 1.3-31.3-15.6-51.8-27.9-72.3-63.3-5.5-9.4 5.5-8.8 15.6-29.3 1.7-3.6.9-6.7-.4-9.3-1.3-2.6-12-28.9-16.4-39.7-4.3-10.3-8.6-8.9-12-9.1-3.1-.2-6.7-.2-10.3-.2-3.6 0-9.3 1.3-14.2 6.7-4.9 5.3-18.7 18.2-18.7 44.5 0 26.3 19.2 51.7 21.9 55.3 2.7 3.6 37.9 57.9 91.9 81 12.4 5.4 22.1 8.7 29.7 11.2 12.5 3.9 23.9 3.3 33-2 10.2-6 31.4-24.6 35.9-48.3 4.5-23.6-3.5-39.3-8.7-42.1z" />
  </svg>
);

const IconLocation = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    fill="#ef4444"
    viewBox="0 0 384 512"
  >
    <path d="M192 0C86 0 0 86 0 192c0 87 122.2 264.9 175 327.4a23.9 23.9 0 0 0 34 0C261.8 456.9 384 279 384 192 384 86 298 0 192 0zm0 272a80 80 0 1 1 80-80 80.2 80.2 0 0 1-80 80z" />
  </svg>
);

import logo from "../Assets/footer.webp";

export default function Footer() {
  const socialLinks = [
    {
      icon: <IconLinkedIn className="text-white" />,
      url: "https://www.linkedin.com/company/think-forge-global",
      color: "hover:bg-blue-600",
    },
    {
      icon: <IconInstagram className="text-white" />,
      url: "https://www.instagram.com/think_forge_global/",
      color: "hover:bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      icon: <IconWhatsapp className="text-white" />,
      url: "https://wa.me/919745004161",
      color: "hover:bg-green-500",
    },
  ];

  const footerLinks = [
    { name: "Work", url: "#work" },
    { name: "About", url: "#about" },
    { name: "Services", url: "#services" },
    { name: "Clients", url: "#clients" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <footer className="bg-white text-black border-t border-gray-200 px-6 py-12 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-4 pr-4 border-b border-gray-300 md:border-r">
              <h3 className="font-bold text-base mb-3 flex items-center">
                <IconLocation className="mr-2 text-red-500" /> Address
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                Think Forge Global LLP <br />
                Second Floor, Ayisha Complex, <br />
                Perinthalmanna, Malappuram, Kerala, <br />
                India - 679322
              </p>
            </div>

            <div className="py-4 md:pl-8 border-b border-gray-300">
              <iframe
                title="Google Map"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.80144487937253!2d76.21926463627273!3d10.976720148350356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd5a48d332c9%3A0x53c4e6fc539a98d!2sThink%20Forge%20Global%20LLP!5e0!3m2!1sen!2sin!4v1759155248199!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* <div className="py-4 pr-4 border-gray-300 md:border-r">
              <h3 className="font-bold text-base mb-3 flex items-center">
                <FaEnvelope className="mr-2 text-red-500" /> Email
              </h3>
              <a
                href="mailto:mail@thinkforgeglobal.com"
                className="text-gray-700 text-sm hover:text-red-500 transition-colors"
              >
                mail@thinkforgeglobal.com
              </a>
            </div> */}

            <div className="py-4 pr-4 border-gray-300 md:border-r">
              <h3 className="font-bold text-base mb-3 flex items-center">
                <FaEnvelope className="mr-2 text-red-500" /> Contact Us
              </h3>

              <form
                action="https://formspree.io/f/mldaeqno"
                method="POST"
                className="flex flex-col gap-2"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:border-red-500"
                />
                <textarea
                  name="message"
                  required
                  placeholder="Your message"
                  rows="2"
                  className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:border-red-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>

            <div className="py-4 md:pl-8">
              <h3 className="font-bold text-base mb-3 flex items-center">
                {" "}
                <FaPhone className="mr-2 text-red-500" /> Phone
              </h3>
              <a
                href="tel:+919745004161"
                className="text-gray-700 text-sm hover:text-red-500 transition-colors"
              >
                +91 974 500 4161
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between h-full">
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-black border border-white hover:text-white transition-all ${social.color} hover:border-transparent shadow-sm`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a href="#hero" className="mt-auto">
              <img
                src={logo}
                alt="Think Forge Global"
                width="224"
                height="64"
                className="w-48 md:w-56 h-auto"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-xs font-medium text-gray-700 hover:text-black uppercase tracking-wider transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-gray-500 text-xs text-center md:text-right">
            <a href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="ml-4 hover:text-black transition-colors">
              Sitemap
            </a>
            <span className="ml-4">
              © {new Date().getFullYear()} Think Forge Global. All Rights
              Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
