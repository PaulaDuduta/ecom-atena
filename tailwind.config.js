/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        'screen-1/3': '33vw',
      },
      colors: {
        'design-black': '#1d1d1d',
      },
    },
  },
  plugins: [],
};
