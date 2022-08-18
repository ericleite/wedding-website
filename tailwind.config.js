// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    borderWidth: {
      0: '0',
      1: '0.0625rem',
      2: '0.1rem',
      3: '0.134rem',
      4: '0.178rem',
      5: '0.238rem',
      DEFAULT: '0.134rem',
    },
    extend: {
      colors: {
        // Color palette can be found here:
        // https://coolors.co/243a47-eff1f3-e09f3e-eecb95-540b0e-e6ad9e
        darkPrimary: '#142028',
        darkSecondary: '#335466',
        darkTertiary: '#667F8C',
        goldPrimary: '#996D2A',
        goldSecondary: '#E09F3E',
        goldTertiary: '#F5D18F',
        lightPrimary: '#FAFAFA',
        lightSecondary: '#E2E6E9',
        lightTertiary: '#C4CED2',
        maroonPrimary: '#270506',
        maroonSecondary: '#540B0E',
        maroonTertiary: '#7F4749',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        stylized: ['"Great Vibes"'],
      },
    },
    fontSize: {
      base: ['1rem', 1.777],
      h1: ['5.61rem', 1.333],
      h2: ['4.209rem', 1.333],
      h3: ['3.157rem', 1.333],
      h4: ['2.369rem', 1.333],
      h5: ['1.777rem', 1.333],
      h6: ['1.333rem', 1.333],
      hBase: ['1rem', 1.333],
      small: ['0.75rem', 1.333],
    },
    spacing: {
      // Typography scale can be found here:
      // https://type-scale.com/?size=16&scale=1.333&text=This%20is%20a%20heading&font=Playfair%20Display&fontweight=600&bodyfont=Montserrat&bodyfontweight=400&lineheight=1.75&backgroundcolor=%23ffffff&fontcolor=%23000000&preview=false
      0: '0',
      1: '0.0625rem',
      2: '0.1rem',
      3: '0.134rem',
      4: '0.178rem',
      5: '0.238rem',
      6: '0.317rem',
      7: '0.422rem',
      8: '0.563rem',
      9: '0.75rem',
      10: '1rem',
      11: '1.333rem',
      12: '1.777rem',
      13: '2.369rem',
      14: '3.157rem',
      15: '4.209rem',
      16: '5.61rem',
      17: '7.478rem',
      18: '9.969rem',
      19: '13.288rem',
      20: '17.713rem',
    },
    transitionDuration: {
      DEFAULT: '300ms',
    },
  },
};
