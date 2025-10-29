import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";




export function BlogCarouselItem({ slug, imageUrl, title, date, categories}) {
  return (
    <CarouselItem className="pl-4 basis-11/12 md:basis-4/5 lg:basis-3/4">
      <Card className="overflow-hidden bg-black text-white border-2 border-[#2A3234] rounded-2xl shadow-lg h-full">
       <CardContent className="flex flex-col md:flex-row h-full p-0 lg:h-[450px]">
          <div className="relative w-full md:w-[65%] h-64 md:h-full flex-shrink-0">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-[35%] p-6 flex flex-col justify-between flex-grow">
            <div>
              <div className="flex gap-2 mb-4">
                {categories.map((category, index) => (
                  <Badge key={index} variant="secondary" className="bg-[#929292] text-white hover:bg-gray-600 border-none">
                    {category}
                  </Badge>
                ))}
              </div>
              <h3 className="text-lg font-semibold md:text-4xl leading-tight">
                {title}
              </h3>
            </div>
            <p className="text-sm mt-4 text-gray-400">
              {date}
            </p>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
}


export default function BlogCarousel({posts}) {

  return (
    <div className="w-full bg-black min-h-screen pt-24 pl-4 md:p-28">
      <h2 className="text-2xl md:text-3xl font-normal font-sh-ad-grotesk mb-8 p-2 text-white">
        Hey We are <span className="text-red-500">Think Forge Global</span> and these are our thoughts and ideas
      </h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
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
    </div>
  );
}