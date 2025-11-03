import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "../ui/Badge";
import { Card, CardContent } from "../ui/Card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/Carousel";

export function BlogCarouselItem({ slug, imageUrl, title, date, categories }) {
  return (
    <CarouselItem className="pl-4 basis-11/12 md:basis-4/5 lg:basis-3/4">
      <Card className="overflow-hidden bg-black text-white border border-gray-800 rounded-2xl shadow-lg h-full">
        <CardContent className="flex flex-col md:flex-row h-full p-0 lg:h-[450px]">
          {/* Image Section */}
          <div className="relative w-full md:w-[65%] h-64 md:h-full flex-shrink-0">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-[35%] p-6 flex flex-col justify-between">
            <div>
              <div className="flex gap-2 mb-4 flex-wrap">
                {categories?.map((category, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gray-600 text-white hover:bg-gray-500 border-none"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              <h3 className="text-lg md:text-4xl font-semibold leading-tight">
                {title}
              </h3>
            </div>
            <p className="text-sm text-gray-400 mt-4">{date}</p>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
}

export default function BlogCarousel({ posts }) {
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="w-full bg-black min-h-screen pt-24 px-4 md:p-28">
      <h2 className="text-2xl md:text-3xl font-normal mb-8 text-white">
        Hey, We are{" "}
        <span className="text-red-500 font-semibold">Think Forge Global</span> and
        these are our thoughts and ideas.
      </h2>

      <Carousel
        plugins={[autoplayPlugin.current]}
        opts={{ align: "start", loop: true }}
        className="w-full cursor-grab"
      >
        <CarouselContent className="-ml-4 items-stretch">
          {posts.map((post, index) => (
            <BlogCarouselItem
              key={index}
              slug={post.slug}
              imageUrl={post.imageUrl}
              title={post.title}
              date={post.date}
              categories={post.categories}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
