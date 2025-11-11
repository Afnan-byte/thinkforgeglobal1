import React from "react";

const jobPositions = [
  {
    id: "App-developer-1",
    title: "Mobile App Developer",
    type: "Full Time",
    experience: "1–2 years",
    skills: ["Flutter", "JavaScript", "REST APIs", "UI Development"],
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdIrqaGEaJlbIVCACz8qg7HCAIQc-GuPaAWZRK9gGktuJegrg/viewform",
  },
  {
    id: "ui-ux-designer-01",
    title: "UI/UX Designer",
    type: "Full Time",
    experience: "1–3 years",
    skills: [
      "Figma",
      "Adobe XD",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Interaction Design",
      "Design Systems",
    ],
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdIrqaGEaJlbIVCACz8qg7HCAIQc-GuPaAWZRK9gGktuJegrg/viewform",
  },
  {
    id: "digital-marketer-01",
    title: "Digital Marketer",
    type: "Full Time",
    experience: "1–3 years",
    skills: [
      "Social Media Marketing",
      "Google Ads",
      "Email Marketing",
      "Content Strategy",
      "Analytics & Reporting",
      "SEO Basics",
    ],
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdIrqaGEaJlbIVCACz8qg7HCAIQc-GuPaAWZRK9gGktuJegrg/viewform",
  },
  {
    id: "seo-specialist-01",
    title: "SEO Specialist",
    type: "Full Time",
    experience: "1–3 years",
    skills: [
      "Keyword Research",
      "On-page SEO",
      "Off-page SEO",
      "Google Analytics",
      "Search Console",
      "Content Optimization",
      "Technical SEO",
    ],
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdIrqaGEaJlbIVCACz8qg7HCAIQc-GuPaAWZRK9gGktuJegrg/viewform",
  },
  {
    id: "software-trainee-01",
    title: "Software Trainee",
    type: "Full Time",
    experience: "Fresher / 0–1 year",
    skills: [
      "Basic Programming (JavaScript, Python, or Java)",
      "Problem Solving",
      "HTML & CSS",
      "Version Control (Git)",
    ],
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdIrqaGEaJlbIVCACz8qg7HCAIQc-GuPaAWZRK9gGktuJegrg/viewform",
  },
  {
    id: "software-developer-01",
    title: "Software Developer",
    type: "Full Time",
    experience: "1–3 years",
    skills: [
      "JavaScript / TypeScript",
      "React.js or Node.js",
      "RESTful APIs",
      "Database Management (MySQL, MongoDB)",
      "Git & Version Control",
      "Problem Solving",
      "Clean Code Practices",
    ],
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdIrqaGEaJlbIVCACz8qg7HCAIQc-GuPaAWZRK9gGktuJegrg/viewform",
  },
];

export default function OpenPositions() {
  return (
    <div id="open-positions" className="bg-white py-20 px-6 sm:px-10 relative">
      {/* <InteractiveGridPattern
        className="absolute inset-0 mask-[radial-gradient(400px_circle_at_center,white,transparent)] text-gray-200 z-0"
        width={60}
        height={60}
        squares={[80, 80]}
      /> */}
      <div className="absolute inset-0 bg-grid"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl leading-tight font-cal-sans mb-14">
          <span className="text-red-500">Open</span> Positions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobPositions.map((job) => (
            <div
              key={job.id}
              className=" border-[3px] border-[#ED1B24] rounded-lg p-6 bg-white shadow-sm h-72 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl leading-tight font-sh-ad-grotesk font-semibold mb-2 text-left md:text-2xl lg:text-4xl">
                  {job.title}
                </h3>
                <div className="flex items-center space-x-2 mb-8">
                  <span className="bg-[#929292] text-[#FFFFFF] text-xs font-medium font-sh-ad-grotesk px-2.5 py-0.5 rounded-lg">
                    {job.type}
                  </span>
                  <span className="bg-[#F87171] text-white text-xs font-medium font-sh-ad-grotesk px-2.5 py-0.5 rounded-lg">
                    {job.experience}
                  </span>
                </div>
                <div className="text-sm text-gray-700 mb-8">
                  <strong>Skills:</strong> {job.skills.join(", ")}
                </div>
              </div>
              <div>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#000000] p-2 border-2 border-black rounded-full hover:bg-red-500 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
