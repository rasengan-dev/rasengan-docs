import Icon from "@components/atoms/Icon";
import { CardDataType } from "data/features";
import useTheme from "hooks/useTheme";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  data: CardDataType;
};

export default function FeatureCard({ data }: Props) {
  const { isDark } = useTheme();

  // Local state
  const [isHover, setIsHover] = useState(false);

  return (
    <Link href={data.link} target={data.target}>
      <article
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={twMerge(
          "w-full p-8 rounded-2xl border-[1px] transition-all",
          data.isblog
            ? "bg-primary-800 hover:bg-primary-900 border-primary-800 hover:border-primary-900"
            : isDark
            ? `border-gray-900 ${
                isHover ? "bg-primary border-primary" : "bg-transparent"
              }`
            : "border-gray-200 hover:border-primary"
        )}
      >
        {data.logo && (
          <div
            className={twMerge(
              "rounded-full p-2 w-16 h-16 mb-8 flex items-center justify-center -left-4 border-[1px]",
              isDark ? (isHover ? "bg-white border-white" : "bg-transparent border-gray-900") : (isHover ? "border-primary" : "border-gray-200")
            )}
          >
            <Image
              src={data.logo}
              alt="Logo image"
              width={40}
              height={40}
            />
          </div>
        )}

        <div className="flex items-end gap-4">
          <div className="w-full">
            <h1
              className={twMerge(
                "font-urbanistBold text-2xl",
                data.isblog
                  ? "text-white"
                  : isDark
                  ? `${isHover ? "text-white" : "text-white"}`
                  : ""
              )}
            >
              {data.title}
            </h1>

            <p
              className={twMerge(
                "mt-1 text-md font-urbanistMedium",
                data.isblog
                  ? "text-white"
                  : isDark
                  ? `${isHover ? "text-white" : "text-white"}`
                  : "text-[#555]"
              )}
            >
              {data.description}
            </p>
          </div>

          {data.isblog && (
            <Icon name="arrow-right-circle" size={24} className="text-white" />
          )}
        </div>
      </article>
    </Link>
  );
}
