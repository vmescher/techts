import { antfu } from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	antfu({
		stylistic: {
			indent: 'tab',
			quotes: 'single',
		},
		vue: {
			overrides: {
				'vue/block-order': [
					'error',
					{
						order: ['template', 'script', 'style'],
					},
				],
			},
		},
	}),
)
