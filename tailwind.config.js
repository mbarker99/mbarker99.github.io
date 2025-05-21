/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      height: {
        144: '36rem'
      },
      animation: {
        drift: 'drift 20s ease-in-out infinite alternate',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(30px, 20px)' },
        },
      },
    },
  },
  plugins: [],
}

