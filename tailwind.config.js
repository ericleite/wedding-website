// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Abril Fatface"', ...defaultTheme.fontFamily.serif],
        stylized: ['Gwendolyn'],
      },
    },
  },
};
