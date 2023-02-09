/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s ease-out infinite",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(0%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
