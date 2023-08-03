/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-bebas-neue)"],
        body: ["var(--font-oswald)"],
        logo: ["var(--font-compacta-bt)"],
      },
    },
  },
  plugins: [],
};
