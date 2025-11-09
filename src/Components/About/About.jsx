import React from "react";

export default function About() {
  return (
    <div
      className="bg-black text-white py-10 sm:py-24 font-sh-ad-grotesk"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 space-y-16 md:space-y-28">
        <section className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              <span className="text-red-500">About</span> Our Company
            </h2>
            <p className="text-gray-400 text-xs mt-2">
              Understand the principles that guide our decisions.
            </p>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            At Think Forge Global, we believe technology should make business
            easier, not more complicated. As one of the growing IT Companies in
            Kerala, we started this journey because, as entrepreneurs ourselves,
            we have experienced the day-to-day challenges business owners face.
            We noticed that many businesses struggle to find reliable,
            high-quality technology partners who genuinely understand their
            needs. This realization inspired the creation of Think Forge Global
            in Perinthalmanna, the entrepreneurship hub of Malappuram district,
            Kerala. Today, we proudly stand among the trusted IT Companies in
            Malappuram delivering meaningful digital transformation. Our purpose
            is simple: use smart technology to solve real business problems.
          </p>
        </section>
        <section className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              <span className="text-red-500">What</span> we do
            </h2>
            <p className="text-gray-400 text-xs mt-2">
              Understand the impact of technology on your decisions.
            </p>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed text-sm sm:text-base">
            <li>
              We work closely with businesses to understand their workflow,
              challenges, and growth plans.
            </li>
            <li>
              We help automate manual tasks and eliminate inefficiencies,
              allowing teams to focus on what truly matters.
            </li>
            <li>
              We build custom software tailored to each business rather than
              adjusting to generic off-the-shelf tools.
            </li>
            <li>
              We provide CRM and ERP solutions that integrate all business
              processes into one seamless system.
            </li>
            <li>
              Our dedicated IT back-office support ensures smooth,
              uninterrupted operations.
            </li>
            <li>
              Through digital marketing, SEO, and website development, we help
              businesses enhance their digital presence and reach more
              customers.
            </li>
            <li>
              At Think Forge Global, we are passionate about helping businesses
              grow with confidence. We aim to be the trusted partner
              entrepreneurs rely on and the most effective problem solvers using
              technology for business success.
            </li>
          </ul>
        </section>
        <section className="relative flex flex-col md:flex-row items-start justify-between gap-10 md:gap-14">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4">
              Our <span className="text-red-500">Mission</span>
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed text-sm sm:text-base">
              <li>
                Empower businesses with technology that simplifies operations,
                enhances productivity, and drives sustainable growth.
              </li>
              <li>
                Operate as the leading IT solution provider in Perinthalmanna,
                Kerala.
              </li>
              <li>
                Deliver: – Custom software solutions – Websites – CRM systems –
                ERP systems – Accounting tools.
              </li>
              <li>
                Provide technology tailored to the unique requirements of every
                client.
              </li>
              <li>
                Work closely with established business owners, MSMEs, and
                startup founders.
              </li>
              <li>
                Understand business challenges and offer practical and
                results-focused digital solutions.
              </li>
              <li>
                Bridge the technological gap for businesses across sectors.
              </li>
              <li>
                Ensure every organization operates with greater confidence,
                smarter systems, and improved efficiency through technology.
              </li>
            </ul>
          </div>

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white opacity-40 transform -translate-x-1/2"></div>

          <div className="flex-1 md:pl-10">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4">
              Our <span className="text-red-500">Vision</span>
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed text-sm sm:text-base">
              <li>
                Become one of the world’s most trusted IT and software solution
                providers.
              </li>
              <li>
                Solve complex business challenges across industries through
                innovative technology.
              </li>
              <li>
                Strengthen expertise in identifying pain points and diagnosing
                business problems accurately.
              </li>
              <li>
                Design solutions that transform how businesses operate and
                scale.
              </li>
              <li>
                Expand globally while proudly representing the excellence of IT
                Companies in Kerala.
              </li>
              <li>Stay firmly rooted in customer success at all times.</li>
              <li>
                Build a future where technology becomes the simplest and most
                reliable partner for every business.
              </li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Our <span className="text-red-500">Values</span>
            </h2>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed text-sm sm:text-base">
            <li>Our clients are at the heart of everything we do.</li>
            <li>Their success defines our purpose and direction.</li>
            <li>
              Commit to simplifying and streamlining business management for all
              clients.
            </li>
            <h6><strong>Core Values:</strong></h6>
            <li>Integrity: honesty and ethics in every action</li>
            <li>
              Trustworthiness: earning confidence through consistent delivery
            </li>
            <li>Loyalty: building long-term dependable relationships</li>
            <li>Strive for excellence in every project.</li>
            <li>
              Deliver products and services that exceed expectations in: –
              Quality – Reliability – Support
            </li>
            <li>
              Uphold these values every day, defining who we are as one of the
              most reliable IT Companies in Malappuram and an emerging leader
              among IT Companies in Kerala.
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
