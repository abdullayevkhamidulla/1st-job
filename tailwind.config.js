/** @type {import('tailwindcss').Config} */





module.exports = {
  darkMode: 'class', 
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {},
  extend:{
    backgroundColor:{
      "inputBg":"#B4E0A066"
    },
    boxShadow: {
      'custom-light': '0 2px 4px rgba(6, 6, 6, 0.4)',
      'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.2)',
    }
    
  },
  fontFamily:{
    'your-font': ['YourFontName', 'sans-serif'],
  },
  plugins: [],
};
