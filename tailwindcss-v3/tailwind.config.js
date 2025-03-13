/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        grayf6: "#F6F7F9",
        gray90: "#90A3BF",
        errored: "#ED3F3F",
        primary: "#3563E9",
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
