import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '640px',    // Telas pequenas
        md: '768px',    // Tablets
        lg: '1024px',   // Laptops
        xl: '1280px',   // Desktops
        // '2xl': '1536px' // Telas grandes
      },
    },
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
