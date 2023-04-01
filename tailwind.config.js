/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discovery: "#D1C9FF",
        discovery_boite: "#594DA0",
        rose: "#FFC9DC",
        d_jaune: "#FFECC9",
        footer: "#382F87",
        blanc_principal: "#FFFFFF",
        magic: '#C9DCFF',
        vert:'#DCFFC9',
      },                                                                  
      fontFamily: {
        sunwish: ['Sunwish Maverick', 'sans-serif'],
        beatrice: ['Beatrice'],
        proximanov: ['Proximanova'],
        Baba:['Baba'],
      },
    },
  },
  plugins: [],
}