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
  const [isCopied, setIsCopied] = useState(false);
  const [isHover, setIsHover] = useState(false);

  // Using theme
  const { isDark } = useTheme();

  //Effects
  useEffect(() => {
    (async () => {
      if (isCopied) {
        await sleep(2000);

        setIsCopied(false);
      }
    })();
  }, [isCopied]);

  // Handler
  const handleCopyToClipboard = async () => {
    try {
      if ("clipboard" in navigator) {
        await navigator.clipboard.writeText("npx create-rasengan@latest");

        setIsCopied(true);
      }
    } catch (err) {
      console.error(err.name, err.message);
    }
  };

  return (
    <div
      className={twMerge(
        "hero-section h-hero px-[20px] md:px-[50px] flex flex-col items-center justify-center border-b-[1px]",
        isDark ? "border-b-gray-900" : "border-b-gray-200"
      )}
    >
      <h1 className="text-[50px] leading-[50px] md:text-[60px] md:leading-[60px] lg:text-[70px] lg:leading-[70px] font-urbanistBlack text-center">
        <span className={twMerge("", isDark ? "text-white" : "text-primary")}>
          Rasengan.js
        </span>
        , the modern React Framework
      </h1>

      <p className="mt-8 text-lg md:text-xl w-full md:w-[700px] text-center">
        Based on modern tools, Rasengan.js will help you to create{" "}
        <span className="font-bold">high-quality web applications</span> with
        the benefit of React components.
      </p>

      <div className="mt-8 flex flex-col items-center gap-2">
        {/* <div className="flex flex-col sm:flex-row items-center gap-2">
          <Link href="/docs">
            <Button text="Get Started" className="w-[250px] sm:w-auto" />
          </Link>

          <Link href="/learn">
            <Button
              text="Learn Rasengan.js"
              className={twMerge(
                "w-[250px] sm:w-auto",
                isDark
                  ? " bg-primary text-white border-primary hover:bg-primary-600 hover:border-primary-600"
                  : "bg-white text-black border-gray hover:border-gray hover:bg-[#eee]"
              )}
            />
          </Link>
        </div>

        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={handleCopyToClipboard}
          className={twMerge(
            "relative w-[250px] sm:w-auto px-3 py-2 rounded-lg border-[1px] flex items-center justify-center cursor-copy transition-all",
            isDark
              ? " hover:bg-white hover:text-black text-white bg-transparent border-gray-900"
              : "border-gray text-black hover:bg-[#eee]"
          )}
        >
          <Image
            src={isDark ? (isHover ? LogoBlack : LogoWhite) : LogoBlack}
            alt="Rasengan Logo"
            width={10}
            height={10}
          />
          <span className="ml-2">~</span>
          <span className="ml-2 text-sm">npx create-rasengan@latest</span>

          {isHover && (
            <div className="absolute top-2 -right-8">
              {isCopied ? (
                <Icon
                  name="check-circle"
                  size={16}
                  className={twMerge(
                    "opacity-80",
                    isDark ? "text-white" : "text-green-400"
                  )}
                />
              ) : (
                <Icon
                  name="copy"
                  size={16}
                  className={twMerge(
                    "opacity-80",
                    isDark ? "text-white" : "text-black"
                  )}
                />
              )}
            </div>
          )}
        </div> */}

        <div className="flex flex-col sm:flex-row items-center gap-2">
          <Link href="/docs">
            <Button
              text="Get Started"
              className={twMerge(
                "w-[250px] sm:w-auto bg-primary text-white border-primary hover:bg-primary-600 hover:border-primary-600"
              )}
            />
          </Link>

          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={handleCopyToClipboard}
            className={twMerge(
              "relative w-[250px] sm:w-auto px-3 py-2 rounded-lg border-[1px] flex items-center justify-center cursor-copy transition-all",
              isDark
                ? " hover:bg-white hover:text-black text-white bg-transparent border-gray-900"
                : "border-gray text-black hover:bg-[#eee]"
            )}
          >
            <Image
              src={isDark ? (isHover ? LogoBlack : LogoWhite) : LogoBlack}
              alt="Rasengan Logo"
              width={10}
              height={10}
            />
            <span className="ml-2">~</span>
            <span className="ml-2 text-sm">npx create-rasengan@latest</span>

            {isHover && (
              <div className="absolute top-2 -right-8">
                {isCopied ? (
                  <Icon
                    name="check-circle"
                    size={16}
                    className={twMerge(
                      "opacity-80",
                      isDark ? "text-white" : "text-green-400"
                    )}
                  />
                ) : (
                  <Icon
                    name="copy"
                    size={16}
                    className={twMerge(
                      "opacity-80",
                      isDark ? "text-white" : "text-black"
                    )}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
