import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Loader from "@/Components/Loader/Loader";

const ConnectSection = lazy(() => import("@/Components/Connect/Connect"));
const ContactForm = lazy(() => import("@/Components/Connect/ConnectForm"));
const FloatingWhatsapp = lazy(() => import("@/Components/FloatingWhatsapp"));

function ConnectPage() {
  return (
    <>
      <Helmet>
        <title>Connect with Top Software Development Companies in Kerala</title>
        <meta
          name="description"
          content="Connect with ThinkForge Global — one of the top software development companies in Kerala. Let’s build your next digital solution together."
        />
        <link rel="canonical" href="https://www.thinkforgeglobal.com/connect" />
        <link rel="preload" as="image" href="/src/Components/Assets/hero21.webp" fetchpriority="high" />


      </Helmet>
      <div className=" bg-black pt-8 pb-20">
        <ConnectSection variant="primary" />
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <Loader />
            </div>
          }
        >
          <ContactForm />
          <FloatingWhatsapp />
        </Suspense>
      </div>
    </>
  );
}

export default ConnectPage;
