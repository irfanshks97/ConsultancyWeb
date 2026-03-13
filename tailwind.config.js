/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#07111b",
        midnight: "#0d1f31",
        ocean: "#12324a",
        aqua: "#3fd2da",
        signal: "#7ce7e2",
        slate: "#0f1e2d",
        cloud: "#d8e2ea",
        ice: "#f4f8fb",
      },
      boxShadow: {
        card: "0 20px 60px rgba(11, 28, 43, 0.08)",
        panel: "0 30px 90px rgba(0, 0, 0, 0.28)",
      },
      fontFamily: {
        display: ['"Franklin Gothic Medium"', '"Trebuchet MS"', '"Segoe UI"', "sans-serif"],
        body: ['"Aptos"', '"Segoe UI"', "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
