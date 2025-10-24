/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          accent: "#f43f5e",
          blue: "#38bdf8",
          muted: "#94a3b8",
          foreground: "#f8fafc",
        },
      },
      borderRadius: {
        xl: "1.25rem",
      },
      boxShadow: {
        glow: "0 24px 80px -32px rgba(244,63,94,0.65)",
      },
    },
  },
  plugins: [],
};
