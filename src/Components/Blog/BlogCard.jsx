import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";



export function BlogCardItem({ slug, imageUrl, title, date, categories }) {
  return (

    <Link to={`/blog/${slug}`}>
    <Card className="overflow-hidden shadow-md h-[500px] border-2 border-[#CCCCCC] flex flex-col bg-white">
      
      <div className="relative w-full h-1/2 flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <CardContent className="w-full h-1/2 p-6 flex flex-col">
        <div className="flex gap-2 mb-4">
          {categories.map((category, index) => (
            <Badge key={index} variant="secondary" className="bg-[#929292] text-white">
              {category}
            </Badge>
          ))}
        </div>
        <h3 className="text-lg font-semibold leading-tight text-black mb-4">
          {title}
        </h3>
        <p className="text-sm text-[#929292] mt-auto">
          {date}
        </p>
      </CardContent>
    </Card>
    </Link>

  );
}

export default function BlogCard({content}){
    
    return(
        <div className="w-full bg-gray-50 min-h-screen p-2 md:p-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.map((post,index)=>(
            <BlogCardItem
            key={index}
            slug={post.slug}
            imageUrl={post.imageUrl}
            title={post.title}
            date={post.date}
            categories={post.categories}
            />
        ))}

           </div>
           </div>
        
    )

}