import { useTheme } from "nextra-theme-docs";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  const { resolvedTheme: theme, ...rest } = useTheme();

  const themeStyle = useMemo(() => {
    return theme === "dark" ? "bg-white text-black" : "bg-primary text-white";
  }, [theme]);

  return (
    <button
      className={twMerge(
        "px-3 py-2 rounded-lg font-urbanistBold capitalize",
        themeStyle
      )}
    >
      {text}
    </button>
  );
}
