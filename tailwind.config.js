/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fredoka", "system-ui", "sans-serif"],
        sans: ["Nunito", "system-ui", "sans-serif"],
      },
      colors: {
        // Paleta temática: índigo amable + acentos cálidos y frescos.
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        sun: { 400: "#fbbf24", 500: "#f59e0b" },
        coral: { 400: "#fb7185", 500: "#f43f5e" },
        mint: { 400: "#34d399", 500: "#10b981" },
      },
    },
  },
  plugins: [],
};
