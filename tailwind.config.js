/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#6366f1',
        },
        secondary: {
          500: '#8b5cf6',
        }
      }
    },
  },
  plugins: [],
}
