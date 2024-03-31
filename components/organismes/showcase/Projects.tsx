import ShowcaseProjectCard from "@components/molecules/ShowcaseProjectCard";
import { ShowcaseData } from "data/showcase";
import useTheme from "hooks/useTheme";
import { twMerge } from "tailwind-merge";

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <section className={twMerge(
      "w-full px-[20px] md:px-[50px] py-20 border-b-[1px]",
      isDark ? "border-b-gray-900" : "border-b-gray-200"
    )}>
      <div className="max-w-[90rem] mx-auto flex flex-col items-center">
        <h1 className="text-[30px] leading-[30px] text-center">
          Explore websites and web applications built with Rasengan.js
        </h1>
      
        <div className="w-full grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-4 mt-12">
          {
            ShowcaseData.map(project => (
              <ShowcaseProjectCard 
                key={project.id}
                data={project}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}