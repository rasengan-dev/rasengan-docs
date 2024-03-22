import Logo from "@assets/images/logo/logo-text.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";
import sleep from "utils/sleep";

export default function LoaderPage() {
  // Refs
  const loaderRef = useRef<HTMLDivElement>(null);

  // Effects
  useEffect(() => {
    const loader = loaderRef.current;

    if (typeof window === undefined || !loader) return;

    // window.addEventListener("DOMContentLoaded", () => {
    //   console.log("yess");
    // });
    handleMask(loader);

    // return () => {
    //   window.removeEventListener("DOMContentLoaded", () => {
    //     handleMask(loader);
    //   });
    // };
  }, []);

  const handleMask = (loader: HTMLDivElement) => {
    sleep(3000).then(() => {
      loader.classList.add("hidden");
      loader.classList.remove("flex");
    });
  };

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-white top-0 left-0 w-full h-full z-50 overflow-hidden flex flex-col items-center justify-center"
    >
      <Image
        src={Logo}
        alt="Logo Image"
        width={300}
        className="animate-pulse"
      />
    </div>
  );
}
