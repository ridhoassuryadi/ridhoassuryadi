const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./apps/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        background: withOpacity("--background-color"),
        main: withOpacity("--main-color"),
        text: withOpacity("--text-color"),
        shadow: withOpacity("--shadow-color"),
        wallpaper: withOpacity("--wallpaper-color"),
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

function withOpacity(variable) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined)
      return `rgba(var(${variable}), ${opacityValue})`;
    if (opacityVariable !== undefined)
      return `rgba(var(${variable}), var(${opacityVariable}, 1))`;
    return `rgb(var(${variable}))`;
  };
}
