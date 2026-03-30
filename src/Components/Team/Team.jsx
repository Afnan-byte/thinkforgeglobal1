import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const teamMembers = [
  { name: "CA Praveen P K", title: "Chief Executive Officer", image: "/Image/Team/praveen.webp", linkedin: "https://www.linkedin.com/in/ca-praveen-p-k-96553b10a/" },
  { name: "Mohammed Shafas", title: "Business And Ops", image: "/Image/Team/shafas.webp", linkedin: "https://www.linkedin.com/in/mohammed-shafas/" },
  { name: "Nijith Nirmal", title: "Senior Product Designer", image: "/Image/Team/nijith.webp", linkedin: "https://www.linkedin.com/in/nijith-nirmal-b90044175/" },
  { name: "Fathimath Sithara", title: "Business Development Executive", image: "/Image/Team/sithara.webp", linkedin: "https://www.linkedin.com/in/fathimath-sithara-10676812a" },
  { name: "Ullas Raj", title: "Senior Developer", image: "/Image/Team/ullas.webp", linkedin: "https://www.linkedin.com/in/ullas-raj-4a5808169" },
  {name: "Swadique N", title: "Senior Flutter Developer", image: "/Image/Team/swadique.webp", linkedin: " https://www.linkedin.com/in/swadique-n/"  },
  { name: "Sadasivan K S", title: "Full Stack Developer", image: "/Image/Team/sadasivan.webp", linkedin: "https://www.linkedin.com/in/sadasivan-ks" },
  { name: "Shiju U K", title: "Junior Full Stack Developer", image: "/Image/Team/shiju.webp", linkedin: "https://www.linkedin.com/in/shiju-uk-1a320620a" },
  { name: "Mohammed Shijad", title: "Digital Marketing Executive", image: "/Image/Team/shijad.webp", linkedin: "https://www.linkedin.com/in/mohammed-shijad/" },
  { name: "Goutham Sreeram", title: "UI/UX Designer", image: "/Image/Team/goutham.webp", linkedin: "https://www.linkedin.com/in/goutham-sreeram-sb-2b7661241/" },
  { name: "Midhun S Paratharayil", title: "Quality Analyst", image: "/Image/Team/midhun.webp", linkedin: "https://www.linkedin.com/in/midhunsparatharayil" },
  { name: "Afnan Mohammed", title: "Full Stack Developer", image: "/Image/Team/afnan.webp", linkedin: "https://www.linkedin.com/in/afnan-mohammed-094268224/" },
  { name: "Jilsina Parveen", title: "Junior Full Stack Developer", image: "/Image/Team/jilsina.webp", linkedin: "https://www.linkedin.com/in/jilsina-parveen-k-v-368304315" },
  { name: "Annmariya Wilson", title: "Junior Full Stack Developer", image: "/Image/Team/Ann.webp", linkedin: "https://www.linkedin.com/in/annmariya-wilson/" },
  { name: "Mohammed Asif", title: "Junior Full Stack Developer", image: "/Image/Team/asif.webp", linkedin: "https://www.linkedin.com/in/asifap" },
  { name: "Farsin Jabbar", title: "Junior Quality Analyst", image: "/Image/Team/farsin.webp", linkedin: "http://linkedin.com/in/farsin-jabbar-994206313" },
  { name: "Fathimathu Shaimah", title: "Junior Ui/Ux Designer", image: "/Image/Team/shaimah.webp", linkedin: "https://www.linkedin.com/in/fathimathu-shaimah" },
  { name: "Gokul Kiran R", title: "AI Tools Product Developer Trainee", image: "/Image/Team/gokul.webp", linkedin: "https://www.linkedin.com/in/gokulkiranr" },

];


const logos = [
  { name: "AAL Solutions", src: "/Image/Logo/AAL_Solutions.png" },
  { name: "Ammayi", src: "/Image/Logo/Ammayi.png" },
  { name: "Architect Interior", src: "/Image/Logo/Architect_interior.png" },
  { name: "Bareera", src: "/Image/Logo/Bareera.png" },
  { name: "Chill Master", src: "/Image/Logo/Chill_Master.png" },
  { name: "Cloud Cakes", src: "/Image/Logo/Cloud_cakes.png" },
  { name: "Depro", src: "/Image/Logo/Depro.png" },
  { name: "Divetoai", src: "/Image/Logo/Divetoai.png" },
  { name: "Eminent", src: "/Image/Logo/Eminent.png" },
  { name: "Family Lounge", src: "/Image/Logo/Family_Lounge.png" },
  { name: "Form Field", src: "/Image/Logo/Form_Field.png" },
  { name: "Frootcane", src: "/Image/Logo/Frootcane.png" },
  { name: "Hearingaide", src: "/Image/Logo/Hearingaide.png" },
  { name: "Imara", src: "/Image/Logo/Imara.png" },
  { name: "KPH", src: "/Image/Logo/KPH.png" },
  { name: "Maxtron", src: "/Image/Logo/Maxtron.png" },
  { name: "Mediture", src: "/Image/Logo/Mediture.png" },
  { name: "Niyaan", src: "/Image/Logo/Niyaan.png" },
  { name: "Oruva", src: "/Image/Logo/Oruva.png" },
  { name: "Realcut", src: "/Image/Logo/Realcut.png" },
  { name: "Scaleup Dubai", src: "/Image/Logo/Scaleup%20dubai.png" },
  { name: "Suryakiran", src: "/Image/Logo/Suryakiran.png" },
  { name: "Techbot", src: "/Image/Logo/TECHBOT_2_LOGO.jpg-removebg-preview.png" },
  { name: "WFSK", src: "/Image/Logo/Wfsk.png" },
  { name: "Yacht Hub", src: "/Image/Logo/Yacht%20Hub.png" },
  { name: "Zyvest", src: "/Image/Logo/Zyvest.png" },
  { name: "Gnom", src: "/Image/Logo/Gnom.png" },
  { name: "Day Off", src: "/Image/Logo/dayOff.png" },
    { name: "Salmara", src: "/Image/Logo/salamara_icon.jpg" },
];

export default function Team() {
  return (
    <div className="relative bg-white min-h-screen px-4 py-20 overflow-hidden" id="team">
      <div className="absolute inset-0 bg-grid"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-cal-sans mb-4">
          Meet Our <span className="text-red-500">Team</span>
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto font-sfpro">
          With years of experience in varying fields, our team is ready to help your brand grow.
        </p>

        <div className="flex flex-wrap justify-center gap-6 font-sfpro">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white w-[260px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                width="260"
                height="240"
                loading={index < 2 ? "eager" : "lazy"}  
                className="w-full h-60 object-cover object-top rounded-xl"
              />

              <div className="p-4 text-center pb-12 space-y-1">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-700">{member.title}</p>
              </div>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 p-2"
                >
                  <FaLinkedinIn className="text-gray-500 hover:text-blue-600 transition" />
                </a>
              )}
            </div>
          ))}

          <div className="bg-white w-[260px] rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-lg font-semibold mb-2">Think You Belong Here?</h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 my-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c4.418 0 8 1.79 8 4v2H4v-2c0-2.21 3.582-4 8-4zM12 12a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
           <HashLink
  smooth
  to="/careers#open-positions"
  className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
>
  Apply Now
</HashLink>

          </div>
        </div>

        {/* Trusted by Industry Leaders Section */}
        <div className="mt-10 md:mt-12 lg:mt-14 xl:mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cal-sans mb-8">
            Trusted by <span className="text-red-500">Industry Leaders</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-7xl mx-auto bg-white overflow-hidden rounded-3xl border-2 border-gray-200 shadow-sm">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="group flex items-center justify-center p-6 sm:p-8 md:p-10 transition-all duration-300 hover:bg-red-50/30"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-12 md:max-h-14 lg:max-h-16 w-auto object-contain transition-all duration-300 group-hover:scale-110 filter brightness-100 hover:brightness-110"
                  loading="lazy"
                />
              </div>
            ))}

            {/* Creative CTA Slot to fill the grid (29 logos + 1 CTA = 30 slots / 5 cols = 6 full rows) */}
            <HashLink 
              smooth
              to="/connect#connect"
              className="group flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 bg-red-50/10 hover:bg-red-500 hover:text-white transition-all duration-500 text-center"
            >
              <h3 className="text-sm sm:text-base font-cal-sans text-gray-800 group-hover:text-white transition-colors">
                Think You <br /> <span className="text-red-500 group-hover:text-white">Belong Here?</span>
              </h3>
              <p className="text-[10px] uppercase tracking-widest mt-2 opacity-60 group-hover:opacity-100 group-hover:text-white">Join Our Network</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 mt-2 group-hover:text-white group-hover:scale-125 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}
