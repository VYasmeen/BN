/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff8f7',
          100: '#fdecef',
          200: '#f7d8df',
          300: '#edbfca',
          400: '#dc9aad',
          500: '#c7798d',
          600: '#a7576b',
          700: '#874253',
          800: '#693340',
          900: '#4d2630',
        },
        olive: {
          50: '#f7f8ef',
          100: '#edefdc',
          200: '#dce2b5',
          300: '#c4cf88',
          400: '#a8b562',
          500: '#8c9847',
          600: '#737f36',
          700: '#5b652c',
          800: '#465024',
          900: '#343d1e',
        },
        rose: {
          50: '#fff5f6',
          100: '#fce8ec',
          200: '#f4cfd8',
          300: '#e7a9b9',
          400: '#d37a92',
          500: '#b85671',
          600: '#943d57',
          700: '#753144',
          800: '#5d2938',
          900: '#44222c',
        },
      },
    },
  },
  plugins: [],
}
