import { fileURLToPath } from 'node:url';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineNuxtConfig({
	modules: ['@nuxtjs/i18n', '@nuxt/eslint', '@nuxt/image', '@pinia/nuxt'],
	devtools: { enabled: true },
	runtimeConfig: {
		apiSecret: '',
		public: {
			apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3000',
			http: {
				timeoutMs: 15_000,
				retry: 0,
			},
		},
	},
	srcDir: 'src/',
	css: [
		'~/assets/styles/reset.scss',
		'~/assets/styles/variables.scss',
		'~/assets/styles/fonts.scss',
		'~/assets/styles/main.scss',
	],
	components: [
		{
			path: '~/components/ui',
			extensions: ['vue'],
			pathPrefix: false,
		},
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
	i18n: {
		locales: [
			{ code: 'en', language: 'en-US', name: 'English' },
			{ code: 'ru', language: 'ru-RU', name: 'Русский' },
		],
		defaultLocale: 'ru',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
		},
		vueI18n: '/i18n/i18n.config.ts',
	},
});
