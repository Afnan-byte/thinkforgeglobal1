import { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

const HomePage = lazy(() => import("./pages/HomePages"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./Components/Blog/BlogPostPage"));
const ConnectPage = lazy(() => import("./pages/ConnectPage"));

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Suspense>
    </div>
  );
}
