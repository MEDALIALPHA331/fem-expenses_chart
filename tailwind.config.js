/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "ec-primary-soft-red": "hsl(10, 79%, 65%)",
        "ec-primary-cyan": "hsl(186, 34%, 60%)",
        "ec-neutral-dark-brown": "hsl(25, 47%, 15%)",
        "ec-neutral-medium-brown": "hsl(28, 10%, 53%)",
        "ec-neutral-cream": "hsl(27, 66%, 92%)",
        "ec-neutral-very-pale-orange": "hsl(33, 100%, 98%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [],
};
