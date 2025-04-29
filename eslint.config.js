import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'

import js from '@eslint/js'

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
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
      'unused-imports': eslintPluginUnusedImports,
      'simple-import-sort': eslintPluginSimpleImportSort,
      import: eslintPluginImport,
      'jsx-a11y': eslintPluginJsxA11y,
    },
    settings: {
      react: { version: '19.0.0' },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx'],
        },
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx'],
        },
      },
    },
    rules: {
      // 기본 recommended 세팅
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // 프로젝트 맞춤 규칙
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error',

      // unused-imports: 사용되지 않는 import/변수 제거
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // simple-import-sort: import/export 정렬
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 기본 내장 모듈
            ['^node:.*', '^\\w'],
            // 절대경로 (예: @/로 시작하는 것들)
            ['^@/'],
            // 상대경로 (./ ../)
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // jsx-a11y: 접근성 관련 경고
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
    },
  },
]
