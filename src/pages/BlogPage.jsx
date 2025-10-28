import React, { useEffect, useState } from "react";
import BlogCarousel from "@/components/blog/BlogCarousel";
import BlogCard from "@/components/blog/BlogCard";
import ConnectSection from "@/components/connect/Connect";
import { fetchAllBlogs } from "@/utils/blogService";
import Loader from "@/components/loader/Loader";


function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await fetchAllBlogs();
        console.log("asduhasdui",data)
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
  const gridPosts = posts
  return (
    <>
      <BlogCarousel posts={carouselPosts} />
      <BlogCard content={gridPosts} />
      <ConnectSection  variant="default" />
    </>
  );
}

export default BlogPage;
