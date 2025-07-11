import { defineConfig } from 'eslint/config'
import pluginImport from 'eslint-plugin-import'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

import js from '@eslint/js'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      js,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
      prettier: pluginPrettier,
      import: pluginImport,
      'simple-import-sort': pluginSimpleImportSort,
      'jsx-a11y': pluginJsxA11y,
    },
    settings: {
      react: {
        version: 'detect',
        jsxRuntime: 'automatic',
      },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.css', '.module.css'],
        },
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.css', '.module.css'],
        },
      },
    },
    extends: [
      'js/recommended',
      pluginReact.configs.flat.recommended,
      pluginReact.configs.flat['jsx-runtime'],
    ],
    rules: {
      ...js.configs.recommended.rules,

      // JSX a11y 접근성 권장 규칙
      ...pluginJsxA11y.configs.recommended.rules,

      // React Hooks 권장 설정
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React Refresh 권장 규칙
      'react-refresh/only-export-components': 'warn',

      // 의존성 배열 규칙
      'react-hooks/exhaustive-deps': 'warn',

      // Prettier 규칙
      'prettier/prettier': 'warn',

      // Import 규칙
      'import/no-unresolved': ['error', { ignore: ['\\?react$'] }],
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-duplicates': 'warn',

      // Simple Import Sort 규칙
      'simple-import-sort/imports': [
        'error',
        { groups: [['^node:.*', '^\\w'], ['^@/'], ['^\\.']] },
      ],
      'simple-import-sort/exports': 'error',

      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      'react/prop-types': 'off',
    },
  },
  { files: ['**/*.{js,mjs,cjs,jsx}'], languageOptions: { globals: globals.browser } },
  { ignores: ['dist/**', '/node_modules/**', '.git/**'] },
])
