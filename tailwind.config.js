/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        text: "#e6e7f0",
        background: "#0a0b12",
        primary: "#a4a8c9",
        secondary: "#6e426d",
        accent: "#b27f9e",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          text: "#e6e7f0",
          background: "#0a0b12",
          primary: "#a4a8c9",
          secondary: "#6e426d",
          accent: "#b27f9e",
          "base-100": "#f683ae",
          "base-100": "#0d0107",
          neutral: "#0000ff",
          info: "#0000ff",
          success: "#00ff00",
          warning: "#00ff00",
          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
