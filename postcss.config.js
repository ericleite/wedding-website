module.exports = {
  plugins: {
    /* eslint-disable sort-keys-fix/sort-keys-fix */
    // The order of these plugins matters, so don't auto-sort keys
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    /* eslint-enable sort-keys-fix/sort-keys-fix */
  },
};
