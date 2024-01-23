/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#08090A",
        cool: {
          100: "#8789C0",
          200: "#BEC2E0",
          300: "#F4FAFF",
          400: "#7CC6FE",
          500: "#5DFDCB",
        },
      },
      fontFamily: {
        pop: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
