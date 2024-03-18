import FeatureCard from "@components/molecules/FeatureCard";
import { FoundationsData } from "data/foundations";
import useTheme from "hooks/useTheme";
import { twMerge } from "tailwind-merge";

export default function Foundations() {
  const { isDark } = useTheme();

  return (
    <section
      className={twMerge(
        "w-full px-[20px] md:px-[50px] py-20"
      )}
    >
      <div className="max-w-[90rem] mx-auto flex flex-col items-center">
        <h1 className="text-[30px] leading-[30px] text-center">
          Built on top of a great foundation
        </h1>

        <div className="w-full grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-4 mt-12">
          {FoundationsData.map((foundation) => (
            <FeatureCard key={foundation.id} data={foundation} />
          ))}
        </div>
      </div>
    </section>
  );
}
