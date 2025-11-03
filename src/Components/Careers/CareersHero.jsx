import React from "react";
import heroImage from "../Assets/c1.webp";

export default function CareersHero() {
  return (
    <div className="bg-black text-white pt-28">
      <div className="mb-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-sh-ad-grotesk max-w-5xl text-center p-2 px-4 mb-4 mx-auto">
          Here at <span className="text-red-500">Think Forge Global</span> we
          believe the best ideas are forged together. Join the team and start
          forging
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <img
          src={heroImage}
          alt="Think Forge Global - Career Hero"
          className="w-full h-auto object-cover"
          fetchpriority="high"
          loading="eager"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative inline-block p-2 sm:p-4">
            <div className="absolute left-0 top-0 h-full w-6 sm:w-8 md:w-10 border-l-4 sm:border-l-8 border-t-2 sm:border-t-4 border-b-2 sm:border-b-4 border-white"></div>
            <div className="absolute right-0 top-0 h-full w-6 sm:w-8 md:w-10 border-r-4 sm:border-r-8 border-t-2 sm:border-t-4 border-b-2 sm:border-b-4 border-white"></div>
            <div className="px-8 sm:px-10 md:px-12">
              <p className="text-white text-center text-2xl sm:text-3xl md:text-5xl font-sh-ad-grotesk tracking-wider">
                Your Next <span className="font-awesome italic">Big Leap</span>
                <br />
                Starts Here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
