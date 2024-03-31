import BlogPostCard from "@components/molecules/BlogPostCard";

export default function Posts() {
  return (
    <section className="mx-auto w-full grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-4 mt-12">
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
    </section>
  )
}