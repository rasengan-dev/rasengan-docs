import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Rasengan.js",
    description: "Documentation website of Rasengan.js Framework",
    image: "",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Official_R_deep" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}