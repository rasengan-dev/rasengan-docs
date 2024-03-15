import { useTheme } from "nextra-theme-docs";
import { ComponentProps, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  className?: ComponentProps<"button">["className"]
};

export default function Button({ text, className }: Props) {
  const { resolvedTheme: theme, ...rest } = useTheme();

  const themeStyle = useMemo(() => {
    return theme === "dark" ? "bg-white text-black" : "bg-primary text-white border-[1px] border-primary hover:bg-primary-500 hover:border-primary-500 transition-all";
  }, [theme]);

  return (
    <button
      className={twMerge(
        "px-3 py-2 rounded-lg font-urbanistBold capitalize",
        themeStyle,
        className
      )}
    >
      {text}
    </button>
  );
}
