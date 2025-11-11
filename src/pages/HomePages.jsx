import Loader from "@/Components/Loader/Loader";
import React, { lazy, Suspense } from "react";

const Hero = lazy(() => import("../Components/Hero/Hero"));
const About = lazy(() => import("../Components/About/About"));
const OurServices = lazy(() => import("../Components/Service/Service"));
const Team = lazy(() => import("../Components/Team/Team"));
const ConnectSection = lazy(() => import("../Components/Connect/Connect"));

export default function HomePage() {
  return (
    <>
      <title>Top-Rated IT Company in Kerala | ThinkForge Global</title>
      <meta
        name="description"
        content="ThinkForge Global, a top-rated IT company in Kerala, offers innovative software, web, and digital solutions to help businesses grow and succeed globally."
      />
      <link rel="canonical" href="https://www.thinkforgeglobal.com/" />
      <link
        rel="preload"
        as="image"
        href="/Image/hero21.webp"
        fetchpriority="high"
      />

      <div className="pt-6">
        <Hero />
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <Loader />
            </div>
          }
        >
          <About />
          <OurServices />
          <Team />
          <ConnectSection sectionId="connect" />
        </Suspense>
      </div>
    </>
  );
}
