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
        darkPrimary: '#1e293b',
        darkSecondary: '#475569',
        darkTertiary: '#94a3b8',
        lightPrimary: '#f8fafc',
        lightSecondary: '#cbd5e1',
        lightTertiary: '#64748b',
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
