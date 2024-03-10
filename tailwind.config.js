/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF5700",
        blue: "#6A5CFF",
        background: "#0B1416",
        "background-light": "#1A282D",
        "background-dark": "#04090A",
        "background-hover": "#223237",
        "text-secondary": "#82959B",
        "text-neutral": "#B8C5C9",
        "post-hover": "#131F23",
        border: "rgba(255,255,255,.1)",
      },
      fontFamily: {
        logo: ["Quicksand", "sans-serif"],
        text: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
