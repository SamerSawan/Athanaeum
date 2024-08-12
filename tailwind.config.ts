import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': {
          50: "#112031",
          100: "#032A3F", //0 contributions
          200: "#044953", //1 contribution
          300: "#046B74", //2 contributions
          400: "#04A4A8", //3 contributions
          500: "#04C8CC" //4 contributions
        },
        'secondary': {
          100: "#718CC0",
          200: "#5F76B1"
        }

      }
    },
  },
  plugins: [],
};
export default config;
