module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      'prettier',
      'prettier/vue',
    ],
    plugins: ['vue', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'error'
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
  };
  