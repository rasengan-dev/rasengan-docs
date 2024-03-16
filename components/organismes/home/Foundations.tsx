import FeatureCard from "@components/molecules/FeatureCard";
import { FoundationsData } from "data/foundations";
import useTheme from "hooks/useTheme";
import { twMerge } from "tailwind-merge";

export default function Foundations() {
  const { isDark } = useTheme();

  return (
    <section
      className={twMerge(
        "w-full px-[20px] md:px-[50px] flex-col items-center py-20 border-b-[1px] border-b-gray-200",
        isDark ? "border-b-gray-900" : "border-b-gray-200"
      )}
    >
      <h1 className="text-[30px] leading-[30px] text-center">
        Build on top of a great foundation
      </h1>

      <div className="w-full grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-4 mt-12">
        {FoundationsData.map((foundation) => (
          <FeatureCard key={foundation.id} data={foundation} />
        ))}
      </div>
    </section>
  );
}
