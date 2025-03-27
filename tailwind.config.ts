/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px", // Previously [@media(min-width:1400px)]
        "3xl": "1600px", // Previously [@media(min-width:1600px)]
        "4xl": "2000px", // Previously [@media(min-width:2000px)]
      },
      fontFamily: {
        custom: ["Bricolage", "sans-serif"],
        heading: ["Bricolage", "sans-serif"],
        gordita: ["Gordita", "sans-serif"],
      },
      colors: {
        cream: "rgb(255 248 229)",
        maroon: "#4d1c1c",
      },
    },
  },
  plugins: [],
};
