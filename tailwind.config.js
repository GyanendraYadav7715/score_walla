/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      primary: '#030014',
      secondary: '#ff6347',
      light: {
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',

      },
      dark: {
        100: '#212121',
        200: '#424242',
        300: '#616161',
      },
      accent:"#82b1ff "
    },
  },
  plugins: [],
}