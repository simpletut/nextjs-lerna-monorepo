module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    'es6': true,
    'node': true,
    'browser': true,
  },
  globals: {
    JSX: true,
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    'indent': ['error', 2],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'curly': 0,
    'no-undef': 2,
    'no-trailing-spaces': 2,
    'no-unused-vars': 0,
    'no-mixed-requires': 0,
    'no-use-before-define': 0,
    'no-console': [2, { 'allow': ['error', 'info'] }],
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': [2, 'last'],
    'jest/no-identical-title': 'off',

    // require or disallow space before blocks
    'space-before-blocks': 'error',

    // enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],

    // disallow padding within blocks
    'padded-blocks': ['error', {
      'blocks': 'never',
      'classes': 'never',
      'switches': 'never'
    }, {
      'allowSingleLineBlocks': true
    }],

    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxBOF': 1, 'maxEOF': 0 }],

    // require space before/after arrow function's arrow
    'arrow-spacing': [2, { 'before': true, 'after': true }],

    // enforce spacing between functions and their invocations
    'func-call-spacing': ['error', 'never'],

    // require a space before & after certain keywords
    'keyword-spacing': ['error', {
      'before': true,
      'after': true,
      'overrides': {
        'return': { 'after': true },
        'throw': { 'after': true },
        'case': { 'after': true }
      }
    }],

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'always'],

    // enforce spacing inside single-line blocks
    'block-spacing': [2, 'always'],
  },
};
