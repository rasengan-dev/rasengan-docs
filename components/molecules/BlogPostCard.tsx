import useTheme from "hooks/useTheme";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import img from "assets/images/backgrounds/bg2.jpg"
import Button from "@components/atoms/Button";
import { BlogDataType } from "data/blog";
import { Link } from "nextra-theme-docs";

type Props = {
  data: BlogDataType
}

export default function BlogPostCard({ data }: Props) {
  const { isDark } = useTheme();

  return (
    <article
      className={twMerge(
        "w-full hover:cursor-pointer border-[1px] rounded-lg transition-all p-4",
        isDark
          ? "border-gray-900 hover:border-primary"
          : "border-gray-200 hover:border-primary"
      )}
    >
      <div className="relative flex items-center h-[50px]">
        {
          data.authors.map((author, index) => (
            <Image
              key={author.id}
              src={author.avatar}
              alt={`Avatar of ${author.name}`}
              width={64}
              height={64}
              className={twMerge("absolute rounded-full object-cover w-10 h-10")}
              style={{
                left: index * 20
              }}
              title={author.name}
            />
          ))
        }
      </div>

      <div className="mt-2">
        <h3 className="text-lg mb-2">{data.title}</h3>

        <p>
          {data.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-8">
        <small>posted on {data.postedAt}</small>

        <Link href={data.link}>
        <Button text="Read More" />
        </Link>
      </div>
    </article>
  );
}
