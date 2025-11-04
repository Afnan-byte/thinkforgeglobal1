import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { fetchBlogBySlug } from "@/utils/blogService";
import Loader from "../Loader/Loader";
import { Badge } from "../ui/Badge";


export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        const data = await fetchBlogBySlug(slug);
        setPost(data);
      } catch (err) {
        console.error("Error loading post:", err);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) return <Loader />;

  if (!post) {
    return (
      <div className="bg-white text-black min-h-screen pt-40 text-center">
        <h1 className="text-4xl font-bold">Post not found</h1>
        <p className="mt-4">
          <Link to="/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-black text-white pt-40 pb-0">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex gap-2 my-4 flex-wrap">
            {post.categories.map((category, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-700 text-white border-none"
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="hidden md:block w-full aspect-video rounded-lg overflow-hidden mt-12 mb-[-180px] relative z-10">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
      <section className="bg-white text-black pt-4 md:pt-48 relative">
        <div className="block md:hidden max-w-6xl mx-auto px-6 mb-4">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

       <article className="prose prose-lg lg:prose-xl max-w-6xl mx-auto px-6 relative z-10">
  <div dangerouslySetInnerHTML={{ __html: post.introduction }} />

  {post.subtitle1 && (
    <>
      <h2 className="font-bold text-2xl py-4">{post.subtitle1}</h2>
      <div className="pb-4" dangerouslySetInnerHTML={{ __html: post.subcontent1 }} />
    </>
  )}
</article>

      </section>
    </div>
  );
}
