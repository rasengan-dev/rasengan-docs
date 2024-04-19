import { Author } from "data/blog";
import useTheme from "hooks/useTheme";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type Props = {
  author: Author
}

export default function BlogAuthorCard({ author }) {
  const { isDark } = useTheme();
  
  return (
    <Link href={author.link} target="_blank">
      <article className={twMerge("flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all", isDark ? "hover:bg-secondary-900":"hover:bg-gray-200")}>
        <Image 
          src={author.avatar}
          alt="Author name"
          width={40}
          height={40}
          className="rounded-full w-[40px] h-[40px] object-cover"
        />

        <div className="flex flex-col justify-center">
          <h3 className="text-md">{author.name}</h3>
          <p className={twMerge(
              "text-sm font-light",
              isDark ? "text-gray-500" : "text-gray-900"
            )}>{author.username}</p>
        </div>
      </article>
    </Link>
  )
}