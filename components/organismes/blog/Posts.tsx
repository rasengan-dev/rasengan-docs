import BlogPostCard from "@components/molecules/BlogPostCard";
import { BlogData } from "data/blog";

export default function Posts() {
  return (
    <section className="mx-auto w-full grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-4 mt-12">
      {
        BlogData.map((post) => (
          <BlogPostCard key={post.id} data={post} />
        ))
      }
    </section>
  )
}