// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['"Cormorant Garamond"', ...defaultTheme.fontFamily.serif],
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
      '-1': '0.75rem',
      '-2': '0.563rem',
      '-3': '0.422rem',
      '-4': '0.317rem',
      '-5': '0.178rem',
      '-6': '0.1rem',
      1: '1.333rem',
      2: '1.777rem',
      3: '2.369rem',
      4: '3.157rem',
      5: '4.209rem',
      6: '5.61rem',
      7: '7.478rem',
      base: '1rem',
    },
  },
};
