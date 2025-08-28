import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/image', '@pinia/nuxt'],
	devtools: { enabled: true },
	srcDir: 'src/',
	css: [
		'~/assets/styles/reset.scss',
		'~/assets/styles/variables.scss',
		'~/assets/styles/fonts.scss',
		'~/assets/styles/main.scss',
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "~/assets/styles/_variables.scss" as *;
						@use "~/assets/styles/_mixins.scss" as *;
					  `,
				},
			},
		},
	},
	alias: {
		'~components': fileURLToPath(new URL('./src/components', import.meta.url)),
		'~ui-components': fileURLToPath(new URL('./src/components/ui', import.meta.url)),
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
});
