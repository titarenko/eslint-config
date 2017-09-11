module.exports = {
  plugins: ['require-path-exists'],
  extends: ['standard', 'plugin:require-path-exists/recommended'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-mixed-operators': ['off'],
    'no-return-assign': ['off'] // implement 'except-this'
  }
}
