const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    container:{
      padding: '2rem',
    },
    screens:{
      sm: '640px',
      // => @media (min-width: 640px){...}

      md: '768px',
      // => @media (min-width: 768px){...}

      lg: '1024px',
      // => @media (min-width: 1024px){...}

      xl: '1280px',
      // => @media (min-width: 1280px){...}

      '2xl': '1536px',
      // => @media (min-width: 1536px){...}
    },
  },
  plugins: [],
});