import { fileURLToPath } from 'node:url';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

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
		plugins: [
			createSvgIconsPlugin({
				iconDirs: [fileURLToPath(new URL('./src/assets/icons', import.meta.url))],
				svgoOptions: {
					plugins: [
						'preset-default',
						'removeDimensions',
						{ name: 'removeAttrs', params: { attrs: '(fill|stroke)' } },
					],
				},
			}),
		],
	},
	alias: {
		'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
		'@ui': fileURLToPath(new URL('./src/components/ui', import.meta.url)),
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
