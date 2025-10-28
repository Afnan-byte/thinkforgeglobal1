import React from "react";
import InteractiveGridPattern from "../intractiveGrid/intractiveGrid";


const jobPositions = [
  {
    id: "graphic-designer-01",
    title: "Graphic Designer",
    type: "Full Time",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdIrqaGEaJlbIVCACz8qg7HCAIQc-GuPaAWZRK9gGktuJegrg/viewform",
  },
  {
    id: "ui-ux-designer-01",
    title: "UI/UX Designer",
    type: "Full Time",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdIrqaGEaJlbIVCACz8qg7HCAIQc-GuPaAWZRK9gGktuJegrg/viewform",
  },
  {
    id: "digital-marketer-01",
    title: "Digital Marketer",
    type: "Full Time",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdIrqaGEaJlbIVCACz8qg7HCAIQc-GuPaAWZRK9gGktuJegrg/viewform",
  },
  {
    id: "seo-specialist-01",
    title: "SEO Specialist",
    type: "Full Time",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdIrqaGEaJlbIVCACz8qg7HCAIQc-GuPaAWZRK9gGktuJegrg/viewform",
  },
  {
    id: "software-trainee-01",
    title: "Software Trainee",
    type: "Full Time",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdIrqaGEaJlbIVCACz8qg7HCAIQc-GuPaAWZRK9gGktuJegrg/viewform",
  },
  {
    id: "software-developer-01",
    title: "Software Developer",
    type: "Full Time",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdIrqaGEaJlbIVCACz8qg7HCAIQc-GuPaAWZRK9gGktuJegrg/viewform",
  },
];


export default function OpenPositions() {
  return (
    <div className="bg-white py-20 px-6 sm:px-10 relative">
      <InteractiveGridPattern
        className="absolute inset-0 mask-[radial-gradient(400px_circle_at_center,white,transparent)] text-gray-200 z-0"
        width={60}
        height={60}
        squares={[80, 80]}
      />
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
                </div>
              </div>
              <div>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#929292] p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
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
