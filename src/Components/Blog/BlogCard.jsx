import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Skeleton } from "../ui/Skeleton";

export function BlogCardItem({ post }) {
  if (!post) {
    return (
      <Card className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Skeleton className="w-full h-52" />
        <CardContent className="p-6 space-y-3">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-5 w-1/2" />
        </CardContent>
      </Card>
    );
  }

  function stripHTML(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
}

  const { slug, imageUrl, title, date, categories, introduction } = post;

  return (
    <Link
      to={`/blog/${slug}`}
      className="block transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
    >
      <Card className="overflow-hidden flex flex-col h-[500px] border border-gray-200 bg-white rounded-2xl shadow-md">
        <div className="relative w-full h-1/2 flex-shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <CardContent className="w-full h-1/2 p-6 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {categories?.map((category, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-[#929292] text-white border-none hover:bg-gray-700"
                >
                  {category}
                </Badge>
              ))}
            </div>

            <h3 className="text-lg font-semibold leading-tight text-black mb-2 line-clamp-2">
              {title}
            </h3>

            {introduction && (
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                {stripHTML(introduction)}
              </p>
            )}
          </div>

          <p className="text-xs text-gray-500 mt-auto">{date}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function BlogCard({ content = [] }) {
  return (
    <section className="w-full bg-gray-50 min-h-screen py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-900">
          Explore Our Latest <span className="text-red-500">Articles</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.length > 0
            ? content.map((post, i) => <BlogCardItem key={i} post={post} />)
            : Array.from({ length: 6 }).map((_, i) => (
                <BlogCardItem key={i} post={null} />
              ))}
        </div>
      </div>
    </section>
  );
}
