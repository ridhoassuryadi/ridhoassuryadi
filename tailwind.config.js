import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
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
  plugins: [import('@tailwindcss/typography'), import('@tailwindcss/forms')],
};

// Helper function for color opacity
const withOpacity = (variable) => {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined)
      return `rgba(var(${variable}), ${opacityValue})`;
    if (opacityVariable !== undefined)
      return `rgba(var(${variable}), var(${opacityVariable}, 1))`;
    return `rgb(var(${variable}))`;
  };
}
