import React, { useEffect, useState, lazy, Suspense } from "react";
import { fetchAllBlogs } from "@/utils/blogService";
import { Skeleton } from "@/Components/ui/Skeleton";
import Loader from "@/Components/Loader/Loader";

const BlogCarousel = lazy(() => import("@/Components/Blog/BlogCarousel"));
const BlogCard = lazy(() => import("@/Components/Blog/BlogCard"));
const ConnectSection = lazy(() => import("@/Components/Connect/Connect"));

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const cacheKey = "blogs_cache_v3";
    const cached = localStorage.getItem(cacheKey);

  
    if (cached) {
      setPosts(JSON.parse(cached));
    }

  
    (async () => {
      try {
        const freshData = await fetchAllBlogs();
        setPosts(freshData);
        localStorage.setItem(cacheKey, JSON.stringify(freshData));
      } catch (error) {
        console.error("Error fetching fresh data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading && posts.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col gap-8 p-6 animate-pulse">
        <Skeleton className="w-full h-64 rounded-xl" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-60 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  const carouselPosts = posts.slice(0, 3);

  return (
    <>
      <title>Blog | Think Forge</title>
      <meta
        name="description"
        content="Insights from a top software development and AI company in Kerala. Read about AI, IT, and tech trends from our team in Perinthalmanna."
      />
      <link rel="canonical" href="https://www.thinkforgeglobal.com/blog" />

      <Suspense fallback={<Loader />}>
        <BlogCarousel posts={carouselPosts} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <BlogCard content={posts} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <ConnectSection variant="default" />
      </Suspense>
    </>
  );
}

export default BlogPage;
