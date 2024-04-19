import useTheme from "hooks/useTheme";
import Icon from "./Icon";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

export default function BackToBlogButton() {
  const { isDark } = useTheme();
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/blog");
  }

  return (
    <div onClick={handleGoBack} className={twMerge("flex items-center cursor-pointer", isDark ? "text-gray-200":"text-gray-900")}>
      <Icon 
        name="arrow-left"
        size={18}
        className="mr-2"
      />

      <span className="no-underline text-md">Back to Blog</span>
    </div>
  )
}