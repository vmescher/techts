import { antfu } from '@antfu/eslint-config';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	antfu({
		stylistic: {
			indent: 'tab',
			quotes: 'single',
			semi: true,
		},
		vue: {
			overrides: {
				'vue/block-order': [
					'error',
					{
						order: ['template', 'script', 'style'],
					},
				],
				'vue/script-indent': ['error', 'tab', {
					baseIndent: 1,
					switchCase: 1,
					ignores: [],
				}],
				'@stylistic/indent': 'off',
				'vue/html-self-closing': 'off',
				'antfu/top-level-function': 'off',
			},
		},
		rules: {
			'no-console': 'warn',
			'node/prefer-global/process': 'off',
		},
		typescript: {
			strict: true,
		},
		jsonc: false,
		yaml: false,
	}),
);
