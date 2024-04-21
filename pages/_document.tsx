import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Rasengan.js",
    description: "The modern React Framework.",
    image: "https://beta.rasengan.dev/home.png",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rasenganjs" />
        <meta name="twitter:creator" content="@dilanekombou" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}