/** @type {import('tailwindcss').Config} */
module.exports = {

theme: {
    extend: {
      transformStyle: ['3d'],
      perspective: ['1000'],
      rotate: ['y-180'],
      backfaceVisibility: ['hidden'],
    },
  },

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in the app directory
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Include if using Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Include your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
};
