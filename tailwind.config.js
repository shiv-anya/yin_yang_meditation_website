/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px",
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      colors: {
        primary: "#2e8b57",
        secondary: "#3cb371",
        tertiary: "#f3f3f3",
        overlay: "rgb(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};
