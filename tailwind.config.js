/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#176D81',
        'secondary': '#71ADB5',
        'txt-color': 'black',
      }
    },
  },
  plugins: [],
}

