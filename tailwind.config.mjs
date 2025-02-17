/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color: "var(--text-color)",
        flowerPink: "var(--flower-pink)",
        matchaGreen: "var(--matcha-green)",

      },
      fontFamily: {
        primary: "var(--font-primary)",
      },
    },
    screens: {
      'sm': '480px',    // téléphone
      'md': '768px',    // tablette
      'lg': '1024px',   // ordi portable
      'xl': '1440px',   // grands écrans
    },
  },
  plugins: [],
};
