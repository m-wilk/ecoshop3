
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#34a853",
        "light-green": "rgba(52, 168, 83, 0.06)",
        "medium-green": "rgb(218 239 224)",
        "yellow": "#ffc107;"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        league: ["League Spartan", "sans-serif"],
      },
      boxShadow: {
        "shadow-inner": "inset 300px 0 0 0 rgb(0 0 0);",
        "10xl": "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
      backgroundImage: {
        "vegetable": "url('/src/assets/img/vegetable.png')",
        "fruts-green": "url('/src/assets/img/c-bg-img-1.png')",
        "sale": "url('/src/assets/img/flash_sale.png')",
        "grocery1": "url('/src/assets/img/grocery-bg-1.png')",
        "bestdeal": "url('/src/assets/img/best-deal-bg.png')",
        "pineapple": "url('/src/assets/img/grocery-bg-3.png')",
        "delivery-green": "url('/src/assets/img/footer-top-bg.png')",
        "seler-black": "url('/src/assets/img/sidebar-img.png')",
        "deal-green": "url('/src/assets/img/product-deal-green.png')",
        
      },
    },
  },
  plugins: [],
};
