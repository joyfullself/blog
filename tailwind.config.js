module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'apple-grey': '#35283C',
        'apple-white': '#FBFBFD',
        'apple-blue': '#2997FF',
      },
      backgroundImage: {
        'footer-image' :"url('/public/cropped_about_1.jpg"
      }
    },
  },
  plugins: [],
}
