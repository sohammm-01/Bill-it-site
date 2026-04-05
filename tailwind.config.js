/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F4ECD6",
        "cream-soft": "#EEE4C8",
        "cream-deep": "#E5D8B0",
        ink: "#241810",
        "ink-soft": "#4A3524",
        "ink-muted": "#8A7558",
        mustard: "#C9B44A",
        "mustard-deep": "#A89432",
        ember: "#E8743B",
        sage: "#7A8B4F",
        clay: "#B54A3A",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
