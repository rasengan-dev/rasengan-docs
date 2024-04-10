import useTheme from "hooks/useTheme";
import { ComponentProps, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  className?: ComponentProps<"button">["className"];
};

export default function Button({ text, className }: Props) {
  const { isDark } = useTheme();
  const [style, setStyle] = useState("");

  useEffect(() => {
    if (isDark) {
      setStyle("bg-white text-black hover:bg-[#eee]");
    } else {
      setStyle(
        "bg-primary text-white border-[1px] border-primary hover:bg-primary-600 hover:border-primary-600 transition-all"
      );
    }
  }, [isDark]);

  return (
    <button
      className={twMerge(
        "px-3 py-2 rounded-lg font-urbanistBold capitalize",
        style,
        className
      )}
    >
      {text}
    </button>
  );
}
