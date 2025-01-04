/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#1D4C1F",
          "green-hover": "#2A6C2D",
          light: "#EAF0EA",
          black: "#000000",
          "black-light": "#1A1A1A",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1280px",
        },
      },
    },
  },
  plugins: [],
};
