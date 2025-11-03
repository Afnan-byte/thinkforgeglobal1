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

  // ✅ Fetch with localStorage cache
  useEffect(() => {
    const cacheKey = "blogs_cache_v3";
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      setPosts(JSON.parse(cached));
      setLoading(false);
    } else {
      (async () => {
        try {
          const data = await fetchAllBlogs();
          setPosts(data);
          localStorage.setItem(cacheKey, JSON.stringify(data));
        } catch (error) {
          console.error("Error fetching blogs:", error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, []);

  
  if (loading) {
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
