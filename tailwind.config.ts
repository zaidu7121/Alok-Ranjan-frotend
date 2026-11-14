
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { navy: { DEFAULT: "#3B4A6B", deep: "#26334F", soft: "#596987" }, cream: "#F7EDE3", ink: "#1F2937" },
    fontFamily: { sans: ["var(--font-inter)"], serif: ["var(--font-playfair)"] },
    boxShadow: { soft: "0 12px 36px rgba(31,41,55,.08)" },
    maxWidth: { content: "1200px" }
  }},
  plugins: []
};
export default config;
