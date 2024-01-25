import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Button from 'components/atoms/Button'
import Logo from 'components/atoms/Logo'

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/rasengan-dev/rasenganjs',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/rasengan-dev/rasenganjs',
  footer: {
    text: 'Rasenganjs © 2024',
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
        <Button text="Learn" />
      )
    }
  }
}

export default config
