import useTheme from "hooks/useTheme";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import img from "assets/images/backgrounds/bg2.jpg"
import Button from "@components/atoms/Button";

export default function BlogPostCard() {
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
      <Image
        src={img}
        alt="something"
        width={64}
        height={64}
        className="rounded-full object-cover w-10 h-10"
        title="Avatar of Dilane Kombou"
      />

      <div className="mt-2">
        <h3 className="text-lg mb-2">Rasengan 1.0.0-beta: First beta version</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero in dui bibendum, ac ultricies dui ultricies. Donec
          fermentum, libero sit amet egestas tincidunt, nunc tortor fermentum
          justo, nec fermentum sapien ex nec metus. Sed nec nulla et nunc
          fermentum luctus. Donec id nunc vel turpis tincidunt tincidunt. Donec
          nec turpis in nunc ultricies ultricies. Nulla facilisi.
        </p>
      </div>

      <div className="flex items-center justify-between mt-8">
        <small>31 March, 2024</small>

        <Button text="Read More" />
      </div>
    </article>
  );
}
