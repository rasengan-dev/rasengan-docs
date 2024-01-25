import { useConfig } from "nextra-theme-docs";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  const { darkMode } = useConfig();

  return (
    <button
      className={twMerge(
        "px-3 py-2 rounded-lg font-urbanistBold capitalize",
        darkMode ? "bg-white text-black" : "bg-primary text-white"
      )}
    >
      {text}
    </button>
  );
}
