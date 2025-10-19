import { fileURLToPath } from 'node:url';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineNuxtConfig({
	modules: ['@nuxtjs/i18n', '@nuxt/eslint', '@nuxt/image', '@pinia/nuxt', '@vee-validate/nuxt'],
	devtools: { enabled: true },
	compatibilityDate: '2025-09-05',
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
	alias: {
		'@components': fileURLToPath(new URL('./app/components', import.meta.url)),
		'@ui': fileURLToPath(new URL('./app/components/ui', import.meta.url)),
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "~/assets/styles/_variables.scss" as *;
						@use "~/assets/styles/_mixins.scss" as *;
						@use "~/assets/styles/_functions.scss" as *;
					  `,
				},
			},
		},
		plugins: [
			createSvgIconsPlugin({
				iconDirs: [fileURLToPath(new URL('./app/assets/icons', import.meta.url))],
				svgoOptions: {
					plugins: [
						'preset-default',
						'removeDimensions',
					],
				},
			}),
		],
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
			{ code: 'ru', language: 'ru-RU', name: 'Русский' },
			{ code: 'en', language: 'en-US', name: 'English' },
		],
		defaultLocale: 'ru',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
		},
		baseUrl: 'https://my-nuxt-app.com',
		vueI18n: '~/i18n/i18n.config.ts',
	},
});
