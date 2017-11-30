// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb-base',
  ],

  rules: {
    'no-mixed-operators': 'off',
    'no-continue': 'off',
  }
};
