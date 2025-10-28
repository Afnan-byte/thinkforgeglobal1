import React, { useState } from "react";
import InputField from "../ui/inputField";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  

   const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData((prevState) => ({
        ...prevState,
        [name]: numericValue,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };



  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (!isFormValid) return; 

    const message = `Hello, my name is ${formData.name} from ${formData.company}.\n I'm inquiring about: ${formData.subject}.\n Here is my message: "${formData.message}".\n You can reach me at ${formData.email} or ${formData.phone}.\n Thank you.`;

    const whatsappUrl = `https://wa.me/919745004161?text=${encodeURIComponent(
      message.trim()
    )}`;

    const whatsappTab = window.open(whatsappUrl, "_blank");
    console.log("Form data sent to WhatsApp:", formData);
    if (!whatsappTab) {
      console.error("Popup blocked!");
    }
    
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  
  const baseInputClasses = "w-full bg-zinc-800 rounded-lg p-3 2xl:p-4 text-base 2xl:text-lg text-white placeholder-gray-500 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 invalid:border-red-500 invalid:ring-red-500 focus:invalid:border-red-500 focus:invalid:ring-red-500";

  return (
    <div className="bg-black flex items-center justify-center p-4 2xl:items-stretch 2xl:justify-center">
      <div className="bg-black text-white border border-[#8E8E8E] p-8 md:p-12 rounded-2xl w-full font-sans 2xl:flex 2xl:flex-col">
 
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-12 flex-grow">
            <div className="flex flex-col space-y-6">
              <InputField
                label="Your Name"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={baseInputClasses}
                required 
              />
              <InputField
                label="Company Name"
                id="company"
                name="company"
                placeholder="Enter your company"
                value={formData.company}
                onChange={handleChange}
                className={baseInputClasses}
                required
              />
              <InputField
                label="Email ID"
                id="email"
                name="email"
                type="email" 
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={baseInputClasses}
                required
              />
              <InputField
                label="Phone Number"
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className={baseInputClasses}
                required
              />
              <InputField
                label="Subject"
                id="subject"
                name="subject"
                placeholder="Enter your subject"
                value={formData.subject}
                onChange={handleChange}
                className={baseInputClasses}
                required
              />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col flex-grow">
                <label
                  htmlFor="message"
                  className="block text-md md:text-lg font-normal mb-2"
                >
                  Leave Your Message Here
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your valuable message"
                  // Use base classes + layout classes
                  className={`${baseInputClasses} flex-grow min-h-[200px]`}
                  required
                />
              </div>

              <p className="text-sm text-gray-400 mt-6 mb-4">
                Nb: we will contact you based on the information you have given
              </p>

              <div>
                <button
                  type="submit"
                  disabled={!isFormValid} 
                  className="w-full bg-white text-black text-md md:text-lg font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 
                  disabled:bg-zinc-600 disabled:text-gray-400 disabled:cursor-not-allowed" 
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
      </div>
    </div>
  );
}