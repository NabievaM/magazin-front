/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3BB77E",
        yellow: "rgb(255,255,0)",
        green: "#bce3c9",
        orange: "#feaf00",
      },
    },
  },
  plugins: [],
};
