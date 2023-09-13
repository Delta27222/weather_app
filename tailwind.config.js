/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dim-white': '#EFF2FB',
        'dim-card' : '#FEFEFF',
        'dim-selected-mini-card': '#42B1FA',
        'dim-unselected-mini-card': '#FAFAFA',
      },
    },
  },
  plugins: [],
}

