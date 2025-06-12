/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 07AAB0
        customBlue: "rgb(55,113,126)",
                // #60A3A3
        customBlue2: "rgb(97,162,163)",
// BADBDA
        customBlue3: "rgb(186,219,218)",

      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
