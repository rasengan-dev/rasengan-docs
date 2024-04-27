import useTheme from "hooks/useTheme";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  link: string;
};

export default function NextStepCard({ text, link }: Props) {
  const { isDark } = useTheme();

  return (
    <Link href={link}>
      <div
        className={twMerge(
          "w-full p-4 rounded-lg border-[1px]",
          isDark
            ? `border-gray-900 hover:bg-primary hover:border-primary bg-transparent`
            : "border-gray-200 hover:border-primary"
        )}
      >
        {text}
      </div>
    </Link>
  );
}
