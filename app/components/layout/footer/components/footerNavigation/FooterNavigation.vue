<template>
	<nav class="footer-navigation">
		<UiLink
			v-for="link in footerNavigationLinks"
			:key="link.id"
			class="footer-navigation__link"
			:theme="ThemeType.white"
			:to="link.to"
		>
			{{ t(link.titleKey) }}
		</UiLink>
	</nav>
</template>

<script setup lang="ts">
	import type {
		FooterNavigationItem,
	} from '@components/layout/footer/components/footerNavigation/types/FooterNavigationItem';
	import { ThemeType } from '@ui/constants/ThemeType';

	const { t } = useI18n();

	const footerNavigationLinks: FooterNavigationItem[] = [
		{
			id: useId(),
			titleKey: 'footer_nav_catalog',
			to: '/catalog',
		},
		{
			id: useId(),
			titleKey: 'footer_nav_payment',
			to: '/#payment',
		},
		{
			id: useId(),
			titleKey: 'footer_nav_contacts',
			to: '/#contacts',
		},
		{
			id: useId(),
			titleKey: 'footer_nav_about',
			to: '/#about',
		},
		{
			id: useId(),
			titleKey: 'footer_nav_brands',
			to: '/#brands',
		},
	];
</script>

<style src="@components/layout/footer/components/footerNavigation/styles/footer-navigation.scss" scoped lang="scss" />
