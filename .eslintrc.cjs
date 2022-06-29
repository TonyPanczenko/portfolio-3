/* eslint-env node */
module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'node': true,
    'es2022': true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'off',
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  },
  'ignorePatterns': ['dist/*'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      }
    }
  }
};
