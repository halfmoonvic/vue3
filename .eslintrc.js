module.exports = {
  env: {
    node: true,
  },
  // extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/prettier',
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
};
