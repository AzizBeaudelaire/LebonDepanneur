/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode colors
        dark: {
          background: '#121212',
          header: '#1F1F1F',
          card: '#242424',
          text: '#E0E0E0',
          primary: '#F5A623',
          hover: '#FFC107',
          border: '#333333'
        },
        // Light mode colors
        light: {
          background: '#F4F4F4',
          header: '#003366',
          card: '#FFFFFF',
          text: '#333333',
          primary: '#FF6600',
          hover: '#FFA500',
          border: '#CCCCCC'
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};