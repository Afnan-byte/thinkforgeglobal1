import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const teamMembers = [
  { name: "CA Praveen P K", title: "Chief Executive Officer", image: "/Image/Team/praveen.webp", linkedin: "https://www.linkedin.com/in/ca-praveen-p-k-96553b10a/" },
  { name: "Mohammed Shafas", title: "Business And Ops", image: "/Image/Team/shafas.webp", linkedin: "https://www.linkedin.com/in/mohammed-shafas/" },
  { name: "Nijith Nirmal", title: "Senior Product Designer", image: "/Image/Team/nijith.webp", linkedin: "https://www.linkedin.com/in/nijith-nirmal-b90044175/" },
  { name: "Ullas Raj", title: "Senior Developer", image: "/Image/Team/ullas.webp", linkedin: "https://www.linkedin.com/in/ullas-raj-4a5808169" },
  { name: "Sadasivan K S", title: "Full Stack Developer", image: "/Image/Team/sadasivan.webp", linkedin: "https://www.linkedin.com/in/sadasivan-ks" },
  { name: "Shiju U K", title: "Junior Full Stack Developer", image: "/Image/Team/shiju.webp", linkedin: "https://www.linkedin.com/in/shiju-uk-1a320620a" },
  { name: "Goutham Sreeram", title: "UI/UX Designer", image: "/Image/Team/goutham.webp", linkedin: "https://www.linkedin.com/in/goutham-sreeram-sb-2b7661241/" },
  { name: "Midhun S Paratharayil", title: "Quality Analyst", image: "/Image/Team/midhun.webp", linkedin: "https://www.linkedin.com/in/midhunsparatharayil" },
  { name: "Afnan Mohammed", title: "Full Stack Developer", image: "/Image/Team/afnan.webp", linkedin: "https://www.linkedin.com/in/afnan-mohammed-094268224/" },
  { name: "Jilsina Parveen", title: "Software Developer Trainee", image: "/Image/Team/jilsina.webp", linkedin: "https://www.linkedin.com/in/jilsina-parveen-k-v-368304315" },
  { name: "Annmariya Wilson", title: "Software Developer Trainee", image: "/Image/Team/Ann.webp", linkedin: "https://www.linkedin.com/in/annmariya-wilson/" },
  { name: "Mohammed Asif", title: "Software Developer Trainee", image: "/Image/Team/asif.webp", linkedin: "https://www.linkedin.com/in/asifap" },
  { name: "Farsin Jabbar", title: "Junior Quality Analyst", image: "/Image/Team/farsin.webp", linkedin: "http://linkedin.com/in/farsin-jabbar-994206313" },
  { name: "Shaimah", title: "Junior Ui/Ux Designer", image: "/Image/Team/shaimah.webp", linkedin: "https://www.linkedin.com/in/fathimathu-shaimah" },
];


export default function Team() {
  return (
    <div className="relative bg-white min-h-screen px-4 py-12 overflow-hidden" id="team">
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
                loading={index < 2 ? "eager" : "lazy"}  /* First 2 preload, rest lazy */
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

          {/* Apply Now Card */}
          <div className="bg-white w-[260px] rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-lg font-semibold mb-2">Think You Belong Here?</h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 my-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c4.418 0 8 1.79 8 4v2H4v-2c0-2.21 3.582-4 8-4zM12 12a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            <Link to="/careers" className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
