import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "au-burgundy": "#800020",
        "au-white": "#FEFEFE",
        "au-light-purple": "#DEBAD8",
        "au-beige": "#F3E2C5",
        "au-gold": "#D2AE6D",
        "au-light-blue": "#C8D3EB",
        "au-light-grey": "#DCDDDF",
        "au-dark-grey": "#848688",
        "au-100-black": "#373435",
        "au-true-black": "#282828"
      },
    },
  },
  plugins: [],
};
export default config;
