/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        elements: "repeat(auto-fit, minmax(120px, 130px))",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
}
