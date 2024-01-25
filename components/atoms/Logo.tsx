import Image from "next/image";
import { useConfig } from "nextra-theme-docs";

import logoWhite from "assets/images/logo/Rasengan-with-text-white.png";
import logoBlack from "assets/images/logo/Rasengan-with-text-black.png";

export default function Logo() {
  const { darkMode } = useConfig();

  return (
    <div>
      <Image
        src={!darkMode ? logoWhite : logoBlack}
        alt="Logo of Rasengan"
        width={200}
        height={80}
      />
    </div>
  );
}
