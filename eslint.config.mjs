import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default tseslint.config(
  { ignores: ['node_modules', 'dist'] },
  {
    extends: [
      js.configs.recommended,
      ...compat.extends('airbnb'),
      ...compat.extends('airbnb/hooks'),
      ...tseslint.configs.recommended,
      ...compat.extends('prettier'),
    ],
    files: ['**/*.{js,mjs,cjs,mts,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx', '.tsx'] },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      'lines-between-class-members': ['error', 'always'],
      'import/no-extraneous-dependencies': 'off',
      'comma-dangle': ['off', 'never'],
      'no-underscore-dangle': 'off',
      semi: ['warn', 'always'],
      quotes: ['warn', 'single'],
    },
  }
);
