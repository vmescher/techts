/** @type {import('stylelint').Config} */
module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-scss',
		'stylelint-config-recommended-vue',
	],

	plugins: ['@stylistic/stylelint-plugin', 'stylelint-order'],
	customSyntax: 'postcss-scss',
	rules: {
		'@stylistic/indentation': 'tab',
		'@stylistic/string-quotes': 'single',
		'@stylistic/color-hex-case': 'lower',
		'order/properties-alphabetical-order': true,
		'font-family-name-quotes': 'always-where-recommended',
		'alpha-value-notation': 'number',
		'color-function-notation': 'modern',
		'selector-id-pattern': [
			'^(?:[a-z0-9]+(?:-[a-z0-9]+)*|__[a-z0-9]+(?:-[a-z0-9]+)*)$',
			{ message: 'Expected id selector to be kebab-case or start with "__" (e.g., __nuxt).' },
		],
	},
	overrides: [
		{
			files: ['**/*.vue'],
			customSyntax: 'postcss-html',
			rules: {
				'@stylistic/indentation': 'tab',
			},
		},
		{
			files: ['**/*.scss'],
			customSyntax: 'postcss-scss',
		},
	],
	ignoreFiles: [
		'src/assets/styles/reset.scss',
		'**/*.min.css',
		'node_modules/**',
		'.output/**',
		'.nuxt/**',
		'dist/**',
	],
};
