/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      base: "18px",
      lg: "20px",
      xl: "22px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "32px",
      "5xl": "52px",
      "6xl": "60px",
      "7xl": "70px",
      "8xl": "86px",
    },
    extend: {
      width: {
        "6xl": "1180px"
      },
      maxWidth: {
        "6xl": "1180px"
      },
      fontFamily: {
        title: ["var(--font-bebas-neue)"],
        body: ["var(--font-oswald)"],
        logo: ["var(--font-compacta-bt)"],
      },
      letterSpacing: {
        wide: ".02em",
        wider: ".03em",
        widest: ".04em",
      },
      colors: {
        primary: "#FF6136",
        "primary-black": "#010101",
        orange: {
          50: "#F6EFE7",
          100: "#FBEAD8",
          400: "#F8A941",
          500: "#ED6801",
        },
        yellow: {
          300: "#F9E427",
        },
        neutral: {
          100: "#FDFAF9",
          300: "#F0F0F0",
          400: "#DBD1C7"
        },
        brown: {
          100: "#CEB49B",
          "100-transparent": "#CEB49B60",
          900: "#9F3C13"
        },
        gray: {
          800: "#484848",
          950: "#1A1A1A"
        },
        slate: {
          400: "#F0F0F0"
        }
      },
    },
  },
  plugins: [],
};
