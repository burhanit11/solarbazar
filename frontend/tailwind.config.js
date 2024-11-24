/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#ffbb38",
        lightBlue: "#008ecc",
        bgColor: "#f6f6f5",
        bgHomeColor: "#d3cfcd",
      },
    },
  },
  plugins: [],
};
