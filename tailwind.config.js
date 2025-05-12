/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white-color': '#fff2f2',
        'black-color': '#3f3b49',
        'secondary-color': '#a1bfba',
      },
      fontFamily: {
        'proxima-regular': ['ProximaRegular', 'sans-serif'],
        'proxima-light': ['ProximaLight', 'sans-serif'],
        'proxima-bold': ['ProximaBold', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 10px 10px -3px rgba(92, 85, 82, 0.5)',
        header: '0px 8px 10px 4px rgba(161, 191, 186, 0.3)',
        inner: '4px 4px 8px 0px rgba(34, 60, 80, 0.2) inset',
      },
    },
  },
  plugins: [],
}
