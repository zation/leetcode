// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb-base',
  ],

  globals: {
    ListNode: true,
  },

  rules: {
    'no-mixed-operators': 'off',
    'no-continue': 'off',
    'no-restricted-properties': 'off',
    'function-paren-newline': 'off',
  }
};
