/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        redit: ['Reddit Mono', 'monospace'],
      },
      colors: {
        'c-brand': '#3d2052',
        'c-black': '#150d18',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
// #3d2052
