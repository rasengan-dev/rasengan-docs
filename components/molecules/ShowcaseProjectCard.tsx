import { ShowcaseDataType } from "data/showcase";
import useTheme from "hooks/useTheme";
import Image from "next/image";
import { Link } from "nextra-theme-docs";
import { twMerge } from "tailwind-merge";

type Props = {
  data: ShowcaseDataType;
};

export default function ShowcaseProjectCard({ data }: Props) {
  const { isDark } = useTheme();

  const handleParseDescription = (desc: string) => {
    const description = desc.split(" ");

    const newDescription = description.map((word, index) => {
      if (word.startsWith("@")) {
        return (
          <a
            key={index}
            href={data.twitterProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            {" "}
            {word}{" "}
          </a>
        );
      }

      return word + " ";
    });

    return newDescription;
  };

  return (
    <Link href={data.link} className="no-underline-forced">
      <article
        className={twMerge(
          "w-full hover:cursor-pointer border-[1px] rounded-lg transition-all no-underline",
          isDark ? "border-gray-900 hover:border-primary" : "border-gray-200 hover:border-primary"
        )}
      >
        <Image
          src={data.image}
          alt={data.title}
          height={300}
          className="rounded-lg object-cover w-full"
        />

        <div className="mt-2 px-4 pb-4">
          <h3 className="text-lg mb-2">{data.title}</h3>
          <p>{handleParseDescription(data.description)}</p>
        </div>
      </article>
    </Link>
  );
}
