// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const faqs = [
//   {
//     id: "01",
//     question: "Do I need any design or coding experience?",
//     answer: "No, the templates are designed to be user-friendly and require no prior design or coding experience.",
//   },
//   {
//     id: "02",
//     question: "What happens after I purchase a template?",
//     answer: "You'll receive access to the template and instructions to start customizing it.",
//   },
//   {
//     id: "03",
//     question: "Do I need a Framer subscription?",
//     answer: "Yes, a Framer subscription is required to publish your site.",
//   },
//   {
//     id: "04",
//     question: "How long does it take to set up my website?",
//     answer: "You can have your website ready within minutes, depending on customization.",
//   },
//   {
//     id: "05",
//     question: "What kind of support is included?",
//     answer: "Email support is included to help with any template-related issues.",
//   },
//   {
//     id: "06",
//     question: "Do you offer refunds if I'm not satisfied?",
//     answer: "Yes, we offer a 7-day refund policy if you're not satisfied.",
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleIndex = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-gradient-to-b bg-black text-white py-24 px-4 sm:px-6 text-center">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-16">
//           <span className="text-sm font-medium text-gray-400 mb-2 inline-block">FAQS</span>
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 font-cal-sans bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//             Everything you need to know about our templates. Can't find an answer? 
//           </p>
//           <a 
//             href="#" 
//             className="group mt-4 text-sm font-medium text-gray-400 inline-flex items-center hover:text-white transition-colors"
//           >
//             Ask a question
//             <span className="ml-1 group-hover:translate-x-1 transition-transform">↗</span>
//           </a>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
//           {faqs.map((faq, index) => (
//             <div
//               key={faq.id}
//               className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 ${
//                 openIndex === index ? "ring-2 ring-indigo-500/30 shadow-lg" : "hover:border-gray-600"
//               }`}
//             >
//               <div
//                 className="p-6 flex items-start justify-between cursor-pointer"
//                 onClick={() => toggleIndex(index)}
//               >
//                 <div className="text-left pr-4">
//                   <div className="flex items-center mb-2">
//                     <span className="text-xs font-bold text-gray-400 mr-2">{faq.id}</span>
//                     <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
//                   </div>
//                   {openIndex === index && (
//                     <p className="mt-3 text-gray-300 text-sm animate-fadeIn">
//                       {faq.answer}
//                     </p>
//                   )}
//                 </div>
//                 <ChevronDown
//                   size={20}
//                   className={`mt-1 flex-shrink-0 transition-transform duration-300 ${
//                     openIndex === index ? "rotate-180 text-gray-400" : "text-gray-400"
//                   }`}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// }