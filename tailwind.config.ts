import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primary: '#01396B',
      },
      boxShadow: {
        'custom': '0 4px 6px 0 rgba(136,144,195,0.2), 0 7px 20px 0 rgba(37,44,97,0.15)',
      }
    },
  },
  plugins: [],
} satisfies Config;
