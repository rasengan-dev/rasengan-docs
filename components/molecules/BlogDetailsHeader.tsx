import BackToBlogButton from "@components/atoms/BackToBlogButton";
import BlogAuthorCard from "@components/molecules/BlogAuthorCard";
import useTheme from "hooks/useTheme";
import { twMerge } from "tailwind-merge";
import { BlogData } from "data/blog";
import { useMemo } from "react";

type Props = {
  children: React.ReactNode;
  link: string
};

export default function BlogDetailsHeader({ link }: Props) {
  const { isDark } = useTheme();

  const { title, authors, postedAt } = useMemo(() => {
    return BlogData.find((blog) => blog.link === link);
  }, [link]);

  return (
    <header className="mb-8">
      <BackToBlogButton />

      <div className="flex flex-col-reverse md:flex-row items-start w-full md:items-start md:justify-between gap-4 md:gap-8 mt-8">
        <h1 className="text-[2.5rem]">{title}</h1>

        <span
          className={twMerge(
            "text-sm font-light w-[160px] text-nowrap md:mt-4",
            isDark ? "text-gray-500" : "text-gray-900"
          )}
        >
          posted on {postedAt}
        </span>
      </div>

      <div className={twMerge("border-b-[1px] mt-6", isDark ? "border-b-gray-900" : "border-b-gray-200")}>
        <span className="text-sm font-light">posted by</span>

        <div className="py-2 flex flex-wrap gap-2">
          {authors.map((author, index) => (
            <BlogAuthorCard key={index} author={author} />
          ))}
        </div>
      </div>
    </header>
  );
}
