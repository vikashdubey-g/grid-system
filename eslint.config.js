import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': 'error', // Change from 'warn' to 'error'
      'no-unused-vars': 'error', // Also make this strict
      'react/prop-types': 'off',
      'no-debugger': 'error',
      'no-alert': 'warn',
      'no-var': 'error', // Use let/const instead
      'prefer-const': 'error', // Use const when possible
      eqeqeq: ['error', 'always'], // Use === instead of ==
      curly: ['error', 'all'], // Always use curly braces
      'no-duplicate-imports': 'error',
      'no-empty': 'error',
      'no-empty-function': 'warn',

      // React specific
      'react/jsx-key': 'error', // Require key in lists
      'react/no-array-index-key': 'warn', // Avoid using index as key
      'react/self-closing-comp': 'error', // <Component /> not <Component></Component>
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]
