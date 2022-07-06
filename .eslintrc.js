module.exports = {
  env: {
    es2021: true,
    node: true
  },
  plugins: [
    '@typescript-eslint',
    'cypress',
    'chai-friendly'
  ],
  extends: [
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/no-async-tests': 'error'
  }
}
