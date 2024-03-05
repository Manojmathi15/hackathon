/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        text: "#fde4ef",
        background: "#0d0107",
        primary: "#f683ae",
        secondary: "#a2a00b",
        accent: "#9df135",
        "base-100": "#f683ae",
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
          text: "#fde4ef",
          background: "#0d0107",
          primary: "#f683ae",
          secondary: "#a2a00b",
          accent: "#9df135",
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
