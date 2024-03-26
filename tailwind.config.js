/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        d_primary: "#0F172A",
        d_secondary: "#0a1018",
        d_textColor: "#E2E8F0",
        l_primary: "#FFFFFF",
        l_secondary: "#cfcfcf",
        l_textColor: "#0F172A",
      },
      backgroundImage: {
        "hero-cover": "url('/image/cover.jpg')",
      },
    },
  },
  plugins: [],
};
