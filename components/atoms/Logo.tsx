import Image from "next/image";
import useTheme from "hooks/useTheme";

import logoWhite from "assets/images/logo/logo-text-white.svg";
import logoText from "assets/images/logo/logo-text.svg";
import logoMiniWhite from "assets/images/logo/logo-white.svg";
import logoMini from "assets/images/logo/logo.svg";

import { useEffect, useState } from "react";

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
  }, [isSmallScreen, isDark])

  const handleResize = () => {
    let isSmall: boolean;

    if (window.innerWidth < 768) {
      isSmall = true;
    } else {
      isSmall = false;
    }

    setIsSmallScreen(isSmall);
  };

  return (
    <div>
      <Image
        src={logo}
        alt="Logo of Rasengan"
        width={isSmallScreen ? 30 : 180}
        height={isSmallScreen ? 30 : 80}
      />
    </div>
  );
}
