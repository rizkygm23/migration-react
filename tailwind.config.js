/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'move': {
          'from' : {
            opacity:'0',
            transform: 'translateY(100px)'
        },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
        }

        },
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)'
          },
        },
        'border-spins': {
          '100%': {
            transform: 'rotate(-360deg)'
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'translateX(50%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'border-spin': 'border-spin 3s linear infinite',
        'fade-in-right': 'fadeInRight 2s ease-in-out forwards',
        'border-spins': 'border-spin 1s linear infinite',
        'fadein': 'move ease-in-out both'
      }
    },
  },
  plugins: [],
}

