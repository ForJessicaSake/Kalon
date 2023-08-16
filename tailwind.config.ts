import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D75231",
        form: "#F6F6F6",
        formText: "#000000AB",
        footer: "#EFEBE0",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
