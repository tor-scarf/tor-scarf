/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f5",
          100: "#ffe4ec",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(236,72,153,.25)"
      }
    }
  },
  plugins: []
}
