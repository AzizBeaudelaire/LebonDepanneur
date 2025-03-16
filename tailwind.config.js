/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#121212',
          header: '#1F1F1F',
          card: '#242424',
          text: '#E0E0E0',
          primary: '#F5A623',
          hover: '#FFC107',
          border: '#333333'
        },
        light: {
          background: '#F4F4F4',
          header: '#003366',
          card: '#FFFFFF',
          text: '#333333',
          primary: '#FF6600',
          hover: '#FFA500',
          border: '#CCCCCC'
        }
      }
    },
  },
  plugins: [],
};