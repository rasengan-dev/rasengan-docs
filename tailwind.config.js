/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2A7FFF",
          100: "#EAF2FF",
          200: "#D4E5FF",
          300: "#BFD9FF",
          400: "#AACCFF",
          500: "#5599FF",
          600: "#2266CC",
          700: "#113366",
          800: "#0D264D",
          900: "#081933",
        },

        secondary: {
          DEFAULT: "#6F70EB",
          100: "#E2E2FB",
          200: "#D4D4F9",
          300: "#C5C6F7",
          400: "#8C8DEF",
          500: "#5A5BC5",
          600: "#45469F",
          700: "#303078",
          800: "#262665",
          900: "#1B1B52",
        },

        alert: {
          info: {
            DEFAULT: "#6BA4FA",
            light: "#f2f6fc",
            dark: "#1d2529"
          },
          success: {
            DEFAULT: "#0F9D58",
            light: "#f2f6fc",
            dark: "#1d2529"
          },
          warning: {
            DEFAULT: "#F2B200",
            light: "#f2f6fc",
            dark: "#1d2529"
          },
          error: {
            DEFAULT: "#FF6666",
            light: "#f2f6fc",
            dark: "#1d2529"
          },
        },

        gray: {
          DEFAULT: "#AAA7AD",
          500: "#AAAAAA"
        }
      },

      fontFamily: {
        urbanistThin: ["Urbanist-Thin"],
        urbanistLight: ["Urbanist-Light"],
        urbanistRegular: ["Urbanist-Regular"],
        urbanistMedium: ["Urbanist-Medium"],
        urbanistBold: ["Urbanist-Bold"],
        urbanistBlack: ["Urbanist-Black"],
      },
    },
  },
  plugins: [],
};
