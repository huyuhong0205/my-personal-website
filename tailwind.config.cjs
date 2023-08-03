/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        primary:
          " 'm plus rounded 1c', 'noto sans tc', 'Verdana', 'sans-serif' ",
        code: " Menlo, Consolas, 'IBM Plex Mono', monospace ",
      },
    },
  },
  plugins: [],
};
