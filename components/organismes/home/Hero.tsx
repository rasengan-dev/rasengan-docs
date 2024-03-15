import { useTheme } from "nextra-theme-docs";
import { useMemo, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Button from "components/atoms/Button";
import Icon from "components/atoms/Icon";
import sleep from "utils/sleep";

export default function Hero() {
  // Local State
  const [isCopied, setIsCopied] = useState(false);
  const [isHover, setIsHover] = useState(false);

  // Using theme
  const { resolvedTheme: theme, ...rest } = useTheme();

  const isDark = useMemo(() => {
    return theme === "dark";
  }, [theme]);

  //Effects
  useEffect(() => {
    (async () => {
      if (isCopied) {
        await sleep(8000);

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
    <div className="hero-section h-hero flex flex-col items-center justify-center">
      <h1 className="text-[50px] leading-[50px] md:text-[60px] md:leading-[60px] lg:text-[70px] lg:leading-[70px] font-urbanistBlack text-center">
        <span className={twMerge("", isDark ? "text-white" : "text-primary")}>
          Rasengan.JS
        </span>
        , the modern React Framework
      </h1>

      <p className="mt-8 text-lg md:text-xl w-full md:w-[700px] text-center">
        Based on modern tools, Rasengan.js will help your to create{" "}
        <span className="font-bold">high-quality web applications</span> with
        the benefit of React components.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-2">
        <Button text="Get Started" className="w-[250px] sm:w-auto" />

        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={handleCopyToClipboard}
          className={twMerge(
            "relative w-[250px] sm:w-auto px-3 py-2 rounded-lg border-[1px] flex items-center justify-center cursor-pointer transition-all",
            isDark
              ? " hover:bg-primary-600 hover:border-primary-600 text-white bg-primary border-primary"
              : "border-gray text-black hover:bg-[#eee]"
          )}
        >
          <span>npx create-rasengan@latest</span>

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
  );
}
