// import React from 'react';
// import Marquee from '@/Components/ui/Marquee';


// const workData = [
//   {
//     id: 1,
//     projectName: "Salmara",
//     year: "2025",
//     industry: "E-commerce",
//     image: '/Image/Projects/salmara.webp',
//     description: "Salmara is a premium Ayurveda e-commerce platform seamlessly integrated with Shopify. It offers a curated selection of authentic Ayurvedic products, bringing traditional wellness to the modern digital marketplace with a focus on purity and performance."
//   },
//   {
//     id: 2,
//     projectName: "Maxtron",
//     year: "2024",
//     industry: "ERP Solutions",
//     image: '/Image/Projects/maxtron.webp',
//     description: "Maxtron is a comprehensive multi-tenant ERP platform designed to streamline business operations. Featuring integrated modules for CRM, HRM, and financial management, it provides a scalable, centralized solution that empowers multiple companies to manage their entire enterprise ecosystem from a single interface."
//   },
//   {
//     id: 3,
//     projectName: "Event Forge",
//     year: "2024",
//     industry: "Event Management",
//     image: '/Image/Projects/eventForge.webp',
//     description: "Event Forge is an all-in-one event management software designed to handle the complexities of modern event operations. From planning and logistics to execution and attendee management, it provides every tool necessary to deliver seamless, high-impact events with precision and ease."
//   }
// ];

// const statsData = [
//   { label: "Projects Delivered", value: "50+" },
//   { label: "Technical Experts", value: "10+" },
//   { label: "Success Rate", value: "100%" },
//   { label: "Industry Verticals", value: "5+" }
// ];

// const logos = [
//   { name: "Divetoai", path: "/Image/Logo/Divetoai.svg" },
//   { name: "Hearingaide", path: "/Image/Logo/Hearingaide.svg" },
//   { name: "IPT Smart", path: "/Image/Logo/IPT Smart.svg" },
//   { name: "Maxtron", path: "/Image/Logo/Maxtron.svg" },
//   { name: "Mediture", path: "/Image/Logo/Mediture.svg" },
//   { name: "Suryakiran", path: "/Image/Logo/Suryakiran.svg" },
//   { name: "Yacht Hub", path: "/Image/Logo/Yacht Hub.svg" },
//   { name: "Zyvest Logo", path: "/Image/Logo/Zyvest Logo Dark (1) 2.svg" },
//   { name: "Day Off", path: "/Image/Logo/day off 2.svg" },
//   { name: "Drydocks", path: "/Image/Logo/drydocks 2.svg" },
// ];

// const trustedData = [
//   {
//     id: 1,
//     quote: '"ThinkForge transformed our traditional business into a digital powerhouse. Their ERP solution is exactly what we needed to scale across Kerala."',
//     name: "Rahul Krishnan",
//     avatar: "/Image/People/People1.webp"
//   },
//   {
//     id: 2,
//     quote: '"The Salmara project was handled with exceptional care. Their integration with Shopify for our Ayurveda products was flawless and truly reflects our heritage."',
//     name: "Anjali Nair",
//     avatar: "/Image/People/People3.webp"
//   },
//   {
//     id: 3,
//     quote: '"Event Forge has simplified our entire operation. From managing local temple festivals to high-end weddings, it\'s the most reliable software we\'ve used."',
//     name: "Adarsh Vijayan",
//     avatar: "/Image/People/People2.webp"
//   }
// ];

// export default function Work() {
//   return (
//     <div className="relative bg-black min-h-screen px-4 py-12 overflow-hidden" id="work">
//       {/* Background elements */}

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-cal-sans text-white">
//             Our <span className="text-red-500">Work</span>
//           </h1>
//         </div>

//         {/* Project Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//           {workData.map((project, index) => (
//             <div 
//               key={project.id} 
//               className={`group flex flex-col border border-white/10 transition-all duration-500 hover:transform hover:-translate-y-2 bg-white/5 rounded-3xl overflow-hidden
//                 ${index === 2 ? "md:col-span-2 lg:col-span-1 md:flex-row lg:flex-col" : "flex-col"}`}
//             >
//               {/* Project Image Container */}
//               <div className={`relative aspect-[16/10] overflow-hidden ${index === 2 ? "md:w-1/2 lg:w-full" : "w-full"}`}>
//                 <img 
//                   src={project.image} 
//                   alt={project.projectName} 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                
//                 {/* Industry Tag Overlay */}
//                 <div className="absolute top-4 left-4">
//                   <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
//                     <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
//                     <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">
//                       {project.industry}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Project Info */}
//               <div className={`p-6 flex flex-col flex-grow space-y-4 ${index === 2 ? "md:w-1/2 md:justify-center lg:w-full lg:justify-start" : "w-full"}`}>
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors">
//                     {project.projectName}
//                   </h2>
//                   <span className="text-gray-500 text-sm font-medium">{project.year}</span>
//                 </div>
                
//                 <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 md:line-clamp-4 lg:line-clamp-3 font-light">
//                   {project.description}
//                 </p>

//                 <div className="pt-4 mt-auto">
//                   <button className="flex items-center gap-2 text-white text-sm font-bold group/btn">
//                     Explore Project
//                     <div className="relative flex items-center">
//                       <span className="w-6 h-px bg-red-500 transition-all group-hover/btn:w-10"></span>
//                       <span className="absolute -right-1 opacity-0 group-hover/btn:opacity-100 transition-opacity translate-x-1 group-hover/btn:translate-x-0">
//                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M4 2L8 6L4 10" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                       </span>
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Data Stats Section */}
//         <div className="relative mb-8">
//           <div className="absolute inset-0 bg-red-500/5 blur-[120px] rounded-full"></div>
//           <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border border-white/10 bg-white/5 backdrop-blur-sm rounded-[40px] px-8">
//             {statsData.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="text-3xl md:text-4xl font-bold mb-2 text-red-500 transition-colors">
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-500 text-sm md:text-base uppercase tracking-widest font-medium">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Logo Marquee Section */}
//         <div className="relative mb-8 overflow-hidden">
//           <div className="max-w-4xl mx-auto text-center">
//             <p className="text-gray-500 text-sm uppercase tracking-[0.3em] font-medium">
//               Trusted by Industry Leaders
//             </p>
//           </div>
//           <div className="relative flex flex-col items-center justify-center gap-4 py-4">
//             <Marquee className="[--duration:30s]" pauseOnHover>
//               {logos.map((logo, idx) => (
//                 <div key={idx} className="flex items-center justify-center px-6 md:px-8 w-[140px] md:w-[180px] h-20 md:h-24">
//                   <img 
//                     src={logo.path} 
//                     alt={logo.name} 
//                     className="max-h-full max-w-full object-contain transition-all duration-300 pointer-events-none select-none"
//                   />
//                 </div>
//               ))}
//             </Marquee>
//             {/* Gradient overlays for smooth fade effect */}
//             <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
//             <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-transparent to-transparent z-10"></div>
//           </div>
//         </div>

//         {/* Trusted Section Hero */}
//         <div className="relative rounded-[40px] overflow-hidden mb-8 shadow-2xl group">
//           <div className="h-[550px] md:h-[550px] w-full relative">
//             <img 
//               src="/Image/work-related.webp" 
//               alt="Trusted Banner" 
//               className="w-full h-full object-cover grayscale opacity-50 transition-opacity"
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 border border-white/10">
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-cal-sans text-white leading-tight max-w-2xl">
//                 Trusted by <br /> companies and Brands
//               </h2>
//               <p className="text-gray-400 mt-6 text-sm md:text-lg max-w-sm">
//                 Real feedback from users who've built smarter, faster, and better with us.
//               </p>
              
//               {/* Ratings Badge */}
//               <div className="absolute bottom-10 right-10 flex items-center gap-4 bg-white/5 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/10">
//                 <div className="flex -space-x-2">
//                   {['People1.webp', 'People2.webp', 'People3.webp'].map((img, i) => (
//                     <img key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover" src={`/Image/People/${img}`} alt="Avatar" />
//                   ))}
//                   <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-red-500 flex items-center justify-center text-[10px] text-white font-bold">
//                     +2k
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-white font-bold">4.9/5</span>
//                     <div className="flex text-yellow-500">
//                       {[1,2,3,4,5].map(i => <span key={i} className="text-xs">★</span>)}
//                     </div>
//                   </div>
//                   <p className="text-[11px] text-gray-400 mt-0.5">2,600+ Global Partners</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Testimonial Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {trustedData.map((item) => (
//             <div key={item.id} className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-3xl transition-all hover:bg-white/10 group">
//               <p className="text-gray-300 text-lg italic leading-relaxed mb-8">
//                 {item.quote}
//               </p>
//               <div className="flex items-center gap-4">
//                 <img 
//                   src={item.avatar} 
//                   alt={item.name} 
//                   className="w-12 h-12 rounded-full ring-2 ring-red-500/20"
//                 />
//                 <div>
//                   <h4 className="text-white font-bold">{item.name}</h4>
//                   <p className="text-gray-500 text-xs uppercase tracking-widest">Client Testimonial</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
