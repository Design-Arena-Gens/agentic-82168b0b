/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b1220",
        panel: "#0f172a",
        primary: "#3b82f6",
        muted: "#64748b",
        accent: "#22d3ee"
      },
    },
  },
  plugins: [],
};
