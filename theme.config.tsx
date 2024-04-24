import React, { useMemo } from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Button from 'components/atoms/Button'
import Logo from 'components/atoms/Logo'
import Footer from '@components/layout/Footer'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import ProductHuntButton from '@components/atoms/ProductHuntButton'

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/rasengan-dev/rasenganjs',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/rasengan-dev/rasenganjs',
  footer: {
    // text: 'Rasenganjs © 2024',
    component: <Footer />
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Rasenganjs',
    }
  },

  // Theme colors
  primaryHue: {
    dark: 200,
    light: 216
  },
  primarySaturation: {
    dark: 100,
    light: 100
  },

  // Navbar
  navbar: {
    extraContent: () => {
      return (
        <>
          <Button text="Learn" className="hidden" />
          {/* <ProductHuntButton /> */}
        </>
      )
    }
  },

  // ThemeSwitch
  themeSwitch: {
    component: null
  },

  // Head
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://beta.rasengan.dev' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    let image = useMemo(() => {
      const urlSegments = asPath.split('/');
      const section = urlSegments[1];

      switch (section) {
        case "docs": {
          return 'https://beta.rasengan.dev/docs.png';
        }

        case "showcase": {
          return "https://beta.rasengan.dev/showcase.png";
        }

        case "blog": {
          return "https://beta.rasengan.dev/blog.png";
        }

        default: 
          return "https://beta.rasengan.dev/home.png";
      }
    }, [asPath, url]);
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Welcome to Rasengan.js'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Start building high-quality web applications with Rasengan.js'}
        />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rasenganjs" />
        <meta name="twitter:creator" content="@dilanekombou" />
        <meta name="twitter:title" content={frontMatter.title || 'Welcome to Rasengan.js'} />
        <meta
          name="twitter:description"
          content={frontMatter.description || 'Start building high-quality web applications with Rasengan.js'}
        />
        <meta name="twitter:image" content={image} />
      </>
    )
  }
}

export default config
