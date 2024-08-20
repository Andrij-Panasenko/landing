/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/index.html', './src/**/*.html'],
  theme: {
    extend: {
      colors: {
        textPrimary: '#001e41',
        textSecondary: '#909090',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        laoto: ['Laoto', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
