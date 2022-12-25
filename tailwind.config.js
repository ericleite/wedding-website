/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('@tailwindcss/line-clamp')],
  theme: {
    borderWidth: {
      0: '0',
      1: '0.0625rem',
      2: '0.125rem',
      3: '0.15625rem',
      4: '0.1875rem',
      5: '0.25rem',
      DEFAULT: '0.15625rem',
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
        sand: '#FFF9EF',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        stylized: ['"Great Vibes"'],
      },
    },
    fontSize: {
      base: ['1rem', 1.75],
      h1: ['5.625rem', 1.3125],
      h2: ['4.25rem', 1.3125],
      h3: ['3.125rem', 1.3125],
      h4: ['2.375rem', 1.3125],
      h5: ['1.75rem', 1.3125],
      h6: ['1.3125rem', 1.3125],
      hBase: ['1rem', 1.3125],
      small: ['0.75rem', 1.3125],
    },
    spacing: {
      // Typography scale can be found here:
      // https://type-scale.com/?size=16&scale=1.333&text=This%20is%20a%20heading&font=Playfair%20Display&fontweight=600&bodyfont=Montserrat&bodyfontweight=400&lineheight=1.75&backgroundcolor=%23ffffff&fontcolor=%23000000&preview=false
      0: '0',
      1: '0.0625rem',
      2: '0.125rem',
      3: '0.15625rem',
      4: '0.1875rem',
      5: '0.25rem',
      6: '0.3125rem',
      7: '0.4375rem',
      8: '0.5625rem',
      9: '0.75rem',
      10: '1rem',
      11: '1.3125rem',
      12: '1.75rem',
      13: '2.375rem',
      14: '3.125rem',
      15: '4.25rem',
      16: '5.625rem',
      17: '7.5rem',
      18: '10rem',
      19: '13.25rem',
      20: '17.75rem',
      21: '23.625rem',
      22: '31.5rem',
    },
    transitionDuration: {
      DEFAULT: '300ms',
    },
  },
};
