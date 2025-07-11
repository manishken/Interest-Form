/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spidr-black': '#000000',
        'spidr-white': '#ffffff',
        'spidr-gray': '#f5f5f5',
        'spidr-dark-gray': '#333333',
      },
      fontFamily: {
        'spidr': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 