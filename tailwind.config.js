/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/src/assets/images/home.jpg')",
        'best': "url('/src/assets/images/best.jpg')",
        'boys': "url('/src/assets/images/boys.jpg')",
        'women': "url('/src/assets/images/wommen.jpg')",
        'casual': "url('/src/assets/images/cassual.jpg')",
      }
    },
  },
  plugins: [],
}