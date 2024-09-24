import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      yellow: "#F4D04E",
      gray: {
        950: "#111111",
        500: "#6B6B6B",
      },
      white: "#FFFFFF",
    },
    fontFamily: {
      figtree: ["var-(--font-figtree)", "sans-serif"],
    },
    spacing: {
      250: "1.5rem",
      200: "1rem",
      150: "0.75rem",
      100: "0.5rem",
      50: "0.25rem",
    },
    boxShadow: {
      card: "8px 8px 0px 0px #000",
    },
  },
  plugins: [],
};
export default config;
