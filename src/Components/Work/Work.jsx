// import React from 'react';

// const workData = [
//   {
//     id: 1,
//     projectName: "Vanguard",
//     year: "2025",
//     industry: "Crypto",
//     image: 'https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=800&h=600',
//     description: "Vanguard is a cutting-edge cryptocurrency platform designed for seamless asset management and secure trading. Our work focused on creating a premium user experience that simplifies complex blockchain interactions while maintaining a high-end visual aesthetic."
//   },
//   {
//     id: 2,
//     projectName: "Horizon UI",
//     year: "2024",
//     industry: "Fintech",
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
//     description: "Horizon UI is a comprehensive dashboard for financial analytics, providing real-time data visualization and deep insights into market trends. We developed a robust design system that allows for scalable growth and consistent branding across all modules."
//   },
//   {
//     id: 3,
//     projectName: "EcoFlow",
//     year: "2024",
//     industry: "Energy",
//     image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=600',
//     description: "EcoFlow focuses on sustainable energy solutions, helping users track and optimize their power consumption. Our design goal was to make energy data accessible and actionable, encouraging users to make environmentally conscious decisions effortlessly."
//   }
// ];

// const statsData = [
//   { label: "Projects Delivered", value: "50+" },
//   { label: "Technical Experts", value: "10+" },
//   { label: "Success Rate", value: "100%" },
//   { label: "Industry Verticals", value: "5+" }
// ];

// const trustedData = [
//   {
//     id: 1,
//     quote: '"Working with this team has truly pushed our company to improve. Their tailored solutions have made a significant difference in our operations!"',
//     name: "Jake Harrison",
//     avatar: "https://i.pravatar.cc/150?u=jake1"
//   },
//   {
//     id: 2,
//     quote: '"The attention to detail and creative vision ThinkForge brings to the table is unmatched. They transformed our brand identity completely."',
//     name: "Sarah Chen",
//     avatar: "https://i.pravatar.cc/150?u=sarah"
//   },
//   {
//     id: 3,
//     quote: '"Efficient, professional, and incredibly creative. They delivered exactly what we needed, ahead of schedule and beyond expectations."',
//     name: "Michael Scott",
//     avatar: "https://i.pravatar.cc/150?u=michael"
//   }
// ];

// export default function Work() {
//   return (
//     <div className="relative bg-black min-h-screen px-4 py-12 overflow-hidden" id="work">
//       {/* Background elements */}

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-cal-sans text-white mb-4">
//             Our <span className="text-red-500">Work</span>
//           </h1>
//         </div>

//         {/* Project Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
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
//         <div className="relative mb-16">
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

//         {/* Trusted Section Hero */}
//         <div className="relative rounded-[40px] overflow-hidden mb-16 shadow-2xl group">
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
//                   {[1,2,3,4].map(i => (
//                     <img key={i} className="w-10 h-10 rounded-full border-2 border-gray-900" src={`https://i.pravatar.cc/100?u=user${i}`} alt="Avatar" />
//                   ))}
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
