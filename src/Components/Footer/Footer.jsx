import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../Assets/footer.webp";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaLinkedinIn className="text-white" />,
      url: "https://www.linkedin.com/company/think-forge-global",
      color: "hover:bg-blue-600",
    },
    {
      icon: <FaInstagram className="text-white"  />,
      url: "https://www.instagram.com/think_forge_global/",
      color: "hover:bg-gradient-to-r from-purple-500 to-pink-500",
    },
     {
      icon: <FaWhatsapp className="text-white" />,
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
                <FaMapMarkerAlt className="mr-2 text-red-500" /> Address
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

            <div className="py-4 pr-4 border-gray-300 md:border-r">
              <h3 className="font-bold text-base mb-3 flex items-center">
                <FaEnvelope className="mr-2 text-red-500" /> Email
              </h3>
              <a
                href="mailto:mail@thinkforgeglobal.com"
                className="text-gray-700 text-sm hover:text-red-500 transition-colors"
              >
                mail@thinkforgeglobal.com
              </a>
            </div>

            <div className="py-4 md:pl-8">
              <h3 className="font-bold text-base mb-3 flex items-center">
                {" "}
                <FaPhoneAlt className="mr-2 text-red-500" /> Phone
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
                className="w-48 md:w-56"
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
