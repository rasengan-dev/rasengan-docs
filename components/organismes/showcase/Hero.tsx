import { useMemo, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Button from "components/atoms/Button";
import Icon from "components/atoms/Icon";
import sleep from "utils/sleep";
import Image from "next/image";
import LogoWhite from "assets/images/logo/logo-white.svg";
import LogoBlack from "assets/images/logo/logo-black.svg";
import useTheme from "hooks/useTheme";
import Link from "next/link";

export default function Hero() {
  // Local State
  const [isHover, setIsHover] = useState(false);

  // Using theme
  const { isDark } = useTheme();

  return (
    <div
      className={twMerge(
        "hero-section px-[20px] md:px-[50px] border-b-[1px] flex flex-col items-center justify-center",
        isDark ? "border-b-gray-900" : "border-b-gray-200"
      )}
    >
      <div className="max-w-[60rem] mx-auto max-h-[50rem] h-hero flex flex-col items-center justify-center">
        <h1 className="text-[50px] leading-[50px] md:text-[60px] md:leading-[60px] lg:text-[70px] lg:leading-[70px] 2xl:text-[90px] 2xl:leading-[90px] font-urbanistBlack text-center">
          The Framework for modern web applications
        </h1>

        <p className="mt-8 text-lg lg:text-xl w-full lg:w-[700px] 2xl:w-[1100px] text-center 2xl:text-[25px] 2xl:leading-[32px]">
          Do you have an idea for a website or web application? Rasengan.js is the perfect framework to bring your idea to life. 
          With a simple and intuitive API, you can build modern web applications with ease.
        </p>

        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <Link href="/docs">
              <Button
                text="Learn Rasengan.js"
                className={twMerge(
                  "w-[300px] sm:w-auto bg-primary text-white border-primary hover:bg-primary-600 hover:border-primary-600"
                )}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
