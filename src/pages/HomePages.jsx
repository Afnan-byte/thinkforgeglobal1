import Loader from "@/Components/Loader/Loader";
import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

const Hero = lazy(() => import("../Components/Hero/Hero"));
const About = lazy(() => import("../Components/About/About"));
const OurServices = lazy(() => import("../Components/Service/Service"));
const Team = lazy(() => import("../Components/Team/Team"));
const ConnectSection = lazy(() => import("../Components/Connect/Connect"));

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Top-Rated IT Companies in Kerala | ThinkForge Global</title>
        <meta
          name="description"
          content="Looking for reliable IT companies in Kerala or Malappuram? ThinkForge Global provides expert IT services, software development, and digital innovation."
        />
        <link rel="canonical" href="https://www.thinkforgeglobal.com/" />
        <meta name="robots" content="index, follow" />
        <link
          rel="sitemap"
          href="https://www.thinkforgeglobal.com/sitemap.xml"
        />
        <link
          rel="preload"
          as="image"
          href="/Image/hero21.webp"
          fetchpriority="high"
        />
      </Helmet>
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
