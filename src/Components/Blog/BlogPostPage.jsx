import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from 'lucide-react';
import InteractiveGridPattern from '../intractiveGrid/intractiveGrid';
import { fetchBlogBySlug } from '@/utils/blogService';
import Loader from '../loader/loader';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        const data = await fetchBlogBySlug(slug);
        console.log("sadasdaa",data)
        setPost(data)
        console.log("Data",data)
      } catch (err) {
        console.error("Error loading post:", err);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
     <Loader/>
    );
  }

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
      <div className="bg-black text-white pt-40 pb-0">
        <div className="max-w-6xl mx-auto px-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {post.title}
          </h1>

          <div className="flex gap-2 my-8">
            {post.categories.map((category, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-700 text-white border-none">
                {category}
              </Badge>
            ))}
          </div>

          <div className="w-full aspect-video rounded-lg overflow-hidden mt-12 relative z-10 mb-[-180px]">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>

      <div className="bg-white text-black pt-48 pb-20 relative">
        <InteractiveGridPattern
          className="absolute inset-0 mask-[radial-gradient(400px_circle_at_center,white,transparent)] text-gray-200 z-0"
          width={60}
          height={60}
          squares={[80, 80]}
        />

        <div className="prose prose-lg lg:prose-xl max-w-6xl mx-auto px-6 relative z-10">
          <p>{post.introduction}</p>

          {post.subtitle1 && (
            <>
              <h2 className='font-bold text-2xl mt-6'>{post.subtitle1}</h2>
              <p>{post.subcontent1}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
