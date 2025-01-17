/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#ffffff",
          dark: "#090D1F",
        },
        card: {
          light: "#ffffff",
          dark: "#111527",
        },
      },
    },
  },
  plugins: [],
};
