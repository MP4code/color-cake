/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
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
}

