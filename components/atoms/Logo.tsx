import Image from "next/image";
import { useTheme } from "next-themes";

import logoWhite from "assets/images/logo/logo-text-white.svg";
import logo from "assets/images/logo/logo-text.svg";
import { useEffect, useMemo } from "react";

export default function Logo() {
  const { resolvedTheme: theme, setTheme } = useTheme();

  const isDark = useMemo(() => theme === "dark", [theme]);

  return (
    <div>
      <Image
        src={isDark ? logoWhite : logo}
        alt="Logo of Rasengan"
        width={180}
        height={80}
      />
    </div>
  );
}
