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
        dark: "#191918",
        light: "#FFFCFA",
        red: "#C3315D",
        gray: "#E2E0DF",
        pink: "#ED7DCE",
        orange: "#FF7A42",
        violet: "#7A60B3",
        green: "#00B79F",
        blue: "#32BBCB",
      },
    },
  },
  plugins: [],
};
export default config;
