import Image from "next/image";
import LogoWhite from "@assets/images/logo/logo-text-white.svg";
import LogoBlack from "@assets/images/logo/logo-text-black.svg";
import useTheme from "hooks/useTheme";
import Icon from "@components/atoms/Icon";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Button from "@components/atoms/Button";

export default function Footer() {
  const { isDark, theme, setTheme } = useTheme();

  // Handler
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  const isActive = (themeName: string) => {
    return theme === themeName;
  };

  return (
    <footer
      className={twMerge(
        "w-full px-[20px] md:px-[50px] py-8 border-t-[1px]",
        isDark ? "border-t-gray-900" : "border-t-gray-200"
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-8">
        <div>
          <Link href="/">
            <Image
              src={isDark ? LogoWhite : LogoBlack}
              alt="Rasengan Logo"
              width={120}
            />
          </Link>
        </div>

        <div>
          <h3 className="text-lg">Resources</h3>

          <nav className="mt-4">
            <ul className="flex flex-col gap-2">
              <Link href="/docs">
                <li>Docs</li>
              </Link>
              <Link href="/blog">
                <li>Blog</li>
              </Link>
              <Link href="/showcase">
                <li>Showcase</li>
              </Link>
            </ul>
          </nav>
        </div>

        <div>
          <h3 className="text-lg">Community</h3>

          <nav className="mt-4">
            <ul className="flex flex-col gap-2">
              <Link href="https://github.com/rasengan-dev/rasenganjs/discussion">
                <li>Github</li>
              </Link>
              <Link href="/discord.com/rasengan-server">
                <li>Discord</li>
              </Link>
              <Link href="/x.com/rasengan.js">
                <li>X (Twitter)</li>
              </Link>
            </ul>
          </nav>
        </div>

        <div>
          <h3 className="text-lg">Subscribe to the Newsletter</h3>

          <p className="mt-4 text-sm">
            Stay informed to the news about rasengan.js including new releases,
            events, etc...
          </p>

          <div className="w-full mt-4 flex gap-2">
            <input
              className={twMerge(
                "w-full rounded-md p-2 outline-none outline-0 border-[1px] ",
                isDark ? "border-gray-900 bg-transparent" : "border-gray-200"
              )}
              placeholder="yourname@domain.com"
            />
            <Button
              text="subscribe"
              className="bg-primary hover:bg-primary-600 text-white"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-12">
        <p>Rasengan.js © 2024</p>

        <div
          className={twMerge(
            "h-10 px-1 flex items-center rounded-full border-[1px] ",
            isDark ? "border-gray-900" : "border-gray-200"
          )}
        >
          <div
            className={twMerge(
              "h-8 w-8 flex items-center justify-center rounded-full cursor-pointer transition-all",
              isActive("dark") ? (isDark ? "bg-gray-900" : "bg-gray-200") : ""
            )}
            onClick={() => handleThemeChange("dark")}
            title="dark"
          >
            <Icon
              name="moon"
              size={14}
              className={
                !isActive("dark")
                  ? isDark
                    ? "text-gray-500 hover:text-white"
                    : "text-gray-900 hover:text-black"
                  : ""
              }
            />
          </div>

          <div
            className={twMerge(
              "h-8 w-8 flex items-center justify-center rounded-full cursor-pointer transition-all",
              isActive("system") ? (isDark ? "bg-gray-900" : "bg-gray-200") : ""
            )}
            onClick={() => handleThemeChange("system")}
            title="system"
          >
            <Icon
              name="laptop"
              size={14}
              className={
                !isActive("system")
                  ? isDark
                    ? "text-gray-500 hover:text-white"
                    : "text-gray-900 hover:text-black"
                  : ""
              }
            />
          </div>

          <div
            className={twMerge(
              "h-8 w-8 flex items-center justify-center rounded-full cursor-pointer transition-all",
              isActive("light") ? (isDark ? "bg-gray-900" : "bg-gray-200") : ""
            )}
            onClick={() => handleThemeChange("light")}
            title="light"
          >
            <Icon
              name="sun"
              size={14}
              className={
                !isActive("light")
                  ? isDark
                    ? "text-gray-500 hover:text-white"
                    : "text-gray-900 hover:text-black"
                  : ""
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
