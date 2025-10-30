import React, { useEffect, useState, lazy, Suspense } from "react";
import { fetchAllBlogs } from "@/utils/blogService";
import Loader from "@/Components/Loader/Loader";


const BlogCarousel = lazy(() => import("@/Components/Blog/BlogCarousel"));
const BlogCard = lazy(() => import("@/Components/Blog/BlogCard"));
const ConnectSection = lazy(() => import("@/Components/Connect/Connect"));

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await fetchAllBlogs();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  const carouselPosts = posts.slice(0, 3);
  const gridPosts = posts;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <BlogCarousel posts={carouselPosts} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <BlogCard content={gridPosts} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <ConnectSection variant="default" />
      </Suspense>
    </>
  );
}

export default BlogPage;
