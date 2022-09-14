const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 640px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1280px"
      // => @media
    },
    extend: {
      fontFamily: {
        monospace: ["RobotoFlex", "Shabnam"]
      },
      container: {
        padding: {
          DEFAULT: "1rem"
        }
      },
      colors: {
        amber: colors.amber,
        dark: "rgb(28,28,30)",
        midnight: "#1E293B",
        cardshadow: "rgb(0,0,0,.10)"
      },
      opacity: {
        4: "0.04"
      },
      width: {
        495: "495px"
      },
      height: {
        380: "380px",
        495: "495px",
        351: "351px"
      },
      zIndex: {
        999: 999,
        1001: 1001
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography")
  ]
};
