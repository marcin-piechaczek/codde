module.exports = {
  root: true,
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'eslint-plugin-import-helpers'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'newline-before-return': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'import-helpers/order-imports': [
      2,
      {
        newlinesBetween: 'always',
        groups: [['/^next/', 'module'], '/^@/src/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        caughtErrorsIgnorePattern: '^_',
        caughtErrors: 'all',
        args: 'after-used',
        vars: 'all',
      },
    ],
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
  },
};
