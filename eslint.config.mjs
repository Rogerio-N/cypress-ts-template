import typescriptEslint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import cypress from 'eslint-plugin-cypress'
import chaiFriendly from 'eslint-plugin-chai-friendly'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	...compat.extends(
		'plugin:cypress/recommended',
		'plugin:chai-friendly/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	),
	{
		plugins: {
			'@typescript-eslint': typescriptEslint,
			prettier,
			cypress,
			'chai-friendly': chaiFriendly,
		},

		languageOptions: {
			globals: {
				...globals.node,
			},

			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
		},

		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'cypress/no-unnecessary-waiting': 'error',
			'cypress/no-async-tests': 'error',
		},
	},
]
