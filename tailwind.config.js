// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        darkPrimary: '#292524',
        darkSecondary: '#78716c',
        lightPrimary: '#fafaf9',
        lightSecondary: '#d6d3d1',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        stylized: ['"Great Vibes"'],
      },
    },
    fontSize: {
      base: ['1rem', 1.75],
      h1: ['5.61rem', 1.3],
      h2: ['4.209rem', 1.3],
      h3: ['3.157rem', 1.3],
      h4: ['2.369rem', 1.3],
      h5: ['1.777rem', 1.3],
      h6: ['1.333rem', 1.3],
    },
    spacing: {
      // Typography scale can be found here:
      // https://type-scale.com/?size=16&scale=1.333&text=This%20is%20a%20heading&font=Playfair%20Display&fontweight=600&bodyfont=Montserrat&bodyfontweight=300&lineheight=1.75&backgroundcolor=%23ffffff&fontcolor=%23000000&preview=false
      0: '0rem',
      1: '0.1rem',
      2: '0.178rem',
      3: '0.317rem',
      4: '0.422rem',
      5: '0.563rem',
      6: '0.75rem',
      7: '1.333rem',
      8: '1.777rem',
      9: '2.369rem',
      10: '3.157rem',
      11: '4.209rem',
      12: '5.61rem',
      13: '7.478rem',
      base: '1rem',
      px: '1px',
    },
  },
};
