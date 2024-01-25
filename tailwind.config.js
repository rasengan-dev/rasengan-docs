/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A7FFF",
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
