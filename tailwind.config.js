/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#A0A4A3",
          "secondary": "#344134",
          "accent": "#1fb2a6",
          "neutral": "#44545C",
          "base-100": "#283135",
          "info": "#6F6D57",
          "success": "#65AC69",
          "warning": "#E39C31",
          "error": "#F43333",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
};
