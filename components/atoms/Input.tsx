import useTheme from "hooks/useTheme";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  name?: string;
  value: string;
  placeholder?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: ComponentProps<"input">["className"];
  message?: string;
};

export default function Input({
  name,
  value,
  placeholder,
  onChange,
  className,
  message,
}: Props) {
  const { isDark } = useTheme();

  return (
    <div>
      <input
        name={name}
        className={twMerge(
          "w-full rounded-md p-2 outline-none outline-0 border-[1px]",
          className,
          isDark ? "border-gray-900" : "border-gray-300"
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <small>{message}</small>
    </div>
  );
}

export const TextArea = ({
  name,
  value,
  placeholder,
  onChange,
  className,
  message,
}: Props) => {
  const { isDark } = useTheme();

  return (
    <div>
      <textarea
        name={name}
        className={twMerge(
          "w-full rounded-md p-2 outline-none outline-0 border-[1px] h-20",
          className,
          isDark ? "border-gray-900" : "border-gray-300"
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <small>{message}</small>
    </div>
  );
};
