import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Loader from "@/Components/Loader/Loader";

const CareersHero = lazy(() => import("../Components/Careers/CareersHero"));
const OpenPositions = lazy(() => import("../Components/Careers/OpenPositions"));
const ConnectSection = lazy(() => import("../Components/Connect/Connect"));

export default function CareersPage() {
  return (
    <>
      <Helmet>
        <title>ThinkForge Careers | IT Consulting Companies in Kerala</title>
        <meta
          name="description"
          content="Build your career with one of the top IT consulting companies in Kerala. Join ThinkForge Global and grow with our expert tech team."
        />
        <link rel="canonical" href="https://www.thinkforgeglobal.com/careers" />
        <link
          rel="preload"
          as="image"
          href="/Assets/c1.webp"
          fetchpriority="high"
        />
      </Helmet>
      <CareersHero />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <OpenPositions />
        <ConnectSection variant="default" />
      </Suspense>
    </>
  );
}
