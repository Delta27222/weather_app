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
        'dim-selected-mini-card-down': '#F4F7F9',
      },
      keyframes: {
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'move-sidebar_RL': {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(250px)' },
        },
        'move-sidebar_LR': {
          '0%': { transform: 'translateX(250px)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
      animation: {
        'move-sidebar_RL': 'move-sidebar_RL .5s ease-in-out forwards',
        'move-sidebar_LR': 'move-sidebar_LR .5s ease-in-out forwards',
        'fade-out': 'fade-out .5s ease-in-out forwards',
        'fade-in': 'fade-in .5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}