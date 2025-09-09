<template>
	<nav class="header-navigation">
		<UiLink
			v-for="(link, index) in headerNavigationLinks"
			:key="`${link.to}-${index}`"
			class="header-navigation__link"
			:to="link.to"
		>
			<template v-if="link.icon" #icon-left>
				<UiIcon :name="link.icon" :size="UiIconSize.S24" />
			</template>

			{{ t(link.titleKey) }}
		</UiLink>
	</nav>
</template>

<script setup lang="ts">
	import type { HeaderNavigationItem } from '@components/layout/header/components/headerNavigation/types/HeaderNavigationItem';
	import { UiIconSize } from '@ui/uiIcon/types';

	const { t } = useI18n();

	const headerNavigationLinks: HeaderNavigationItem[] = [
		{
			titleKey: 'header_nav_catalog',
			to: '/catalog',
			icon: 'menu',
		},
		{
			titleKey: 'header_nav_about',
			to: '#about',
		},
		{
			titleKey: 'header_nav_brands',
			to: '#brands',
		},
		{
			titleKey: 'header_nav_payment',
			to: '#payment',
		},
		{
			titleKey: 'header_nav_contacts',
			to: '#contacts',
		},
	];
</script>

<style src="@components/layout/header/components/headerNavigation/styles/header-navigation.scss" lang="scss" scoped />
