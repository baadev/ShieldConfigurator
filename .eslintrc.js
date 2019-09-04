// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint"
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
  // 'no-param-reassign': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['error', 2, { 'VariableDeclarator': 'first', "MemberExpression": 1 }],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'max-len': ['error', { 'code': 90 }]
  // Broken
  // 'space-infix-ops': 'off'
  // 'vue/require-v-for-key': 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'indent': ["off", 1, { "MemberExpression": 1 }],
        'vue/script-indent': [ 'off', 2, { 'baseIndent': 1 } ]
      }
    }
  ]
}