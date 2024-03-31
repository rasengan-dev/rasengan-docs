import Image from "next/image";
import useTheme from "hooks/useTheme";

import logoWhite from "assets/images/logo/logo-text-white.svg";
import logoText from "assets/images/logo/logo-text.svg";
import logoMiniWhite from "assets/images/logo/logo-white.svg";
import logoMini from "assets/images/logo/logo.svg";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Logo() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [logo, setLogo] = useState(logoText);

  const { isDark } = useTheme();

  useEffect(() => {
    if (typeof window === undefined) return;

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      if (isDark) setLogo(logoMiniWhite);
      else setLogo(logoMini);
    } else {
      if (isDark) setLogo(logoWhite);
      else setLogo(logoText);
    }
  }, [isSmallScreen, isDark]);

  const handleResize = () => {
    let isSmall: boolean;

    if (window.innerWidth < 820) {
      isSmall = true;
    } else {
      isSmall = false;
    }

    setIsSmallScreen(isSmall);
  };

  return (
    <div className="relative">
      <Image
        src={logo}
        alt="Logo of Rasengan"
        width={isSmallScreen ? 30 : 180}
        height={isSmallScreen ? 30 : 80}
      />

      <small className={twMerge("flex items-center text-xs absolute bg-blue-50 rounded-full p-1 px-2 text-blue-600 leading-none font-semibold", isSmallScreen ? " top-2 -right-12":" top-3 -right-[50px]")}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-flask-conical w-3 h-3 aspect-square "
        >
          <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path>
          <path d="M8.5 2h7"></path>
          <path d="M7 16h10"></path>
        </svg>{" "} */}
        <span className="ml-0">Beta</span>
      </small>
    </div>
  );
}
