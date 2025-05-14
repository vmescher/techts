import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/image', '@pinia/nuxt'],
	devtools: { enabled: true },
	srcDir: 'src/',
	css: [
		'~/assets/styles/reset.scss',
		'~/assets/styles/main.scss',
	],
	alias: {
		'~components': fileURLToPath(new URL('./src/app/components', import.meta.url)),
	},
	eslint: {
		config: {
			standalone: false,
		},
	},
	postcss: {
		plugins: {
			'postcss-pxtorem': {
				rootValue: 16,
				propList: ['*'],
				minPixelValue: 4,
			},
		},
	},
})
