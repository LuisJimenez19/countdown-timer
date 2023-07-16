/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        "grayish-blue": "hsl(237, 18%, 59%)",
        "soft-red": "hsl(345, 95%, 68%)",
        "dark-desaturated-blue": "hsl(236, 21%, 26%)",
        "very-dark-blue": "hsl(234, 17%, 12%)",
      },
      fontFamily: {
        "red-hat-text": ["Red Hat Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
