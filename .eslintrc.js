module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'commonjs': true,
    'jasmine': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    "default-case": 1,
    "dot-location": ["error", "object"],
    "semi": ["error", "never"]
  },
}