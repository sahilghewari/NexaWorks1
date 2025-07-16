/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        doumbar: ['Doumbar', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#23272e', // deep dark grey
          900: '#181a1f',
          800: '#23272e',
          700: '#2d3138',
        },
        offwhite: {
          DEFAULT: '#f5f5f3',
          100: '#f8f8f7',
          200: '#f5f5f3',
        },
        retrored: {
          DEFAULT: '#e63946', // retro red
          700: '#b71c1c',
        },
        // Optionally override blue for accent
        blue: {
          900: '#1a2233',
          800: '#232e45',
          700: '#2c3a5a',
          600: '#3a4a6b',
        },
      },
    },
  },
  plugins: [],
};
