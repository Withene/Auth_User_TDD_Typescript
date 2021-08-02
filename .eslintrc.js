module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard'

  ],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
