/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './projects//*.html',
    './src/*.{js,ts}'
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem'
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A0A0A',
          //black: '#222831',
          gray: '#888',
          white: '#eee'
        }
      }
    },
  },
  plugins: [],
}
