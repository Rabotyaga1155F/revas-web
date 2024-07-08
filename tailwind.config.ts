import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smob: "320px",
      avmob: "375px",
      bmob: "425px",
      bbmob: "470px",
      bbbmob: "530px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lg2: "1216px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1750px",
      "4xl": "2000px",
      "5xl": "2250px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        orange: "#F04D23",
        "orange-white": "#F0613C",
      },
    },
  },
  plugins: [],
};
export default config;
