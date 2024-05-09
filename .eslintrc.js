module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'], // 절대경로 노드 설정
      },
    },
  },
  parser: '@babel/eslint-parser',

  rules: {
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
    'linebreak-style': 0,
    'prettier/prettier': 0,
    'import/no-unresolved': 0,
    'react/prop-types': 0,

    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
};
