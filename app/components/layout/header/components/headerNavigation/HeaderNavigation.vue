<template>
	<nav ref="navEl" class="header-navigation">
		<UiLink
			v-for="(link, index) in visibleItems"
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
	import { useResizableList } from '~/features/observers/useResizableList';

	const { t } = useI18n();

	const navEl = useTemplateRef<HTMLElement>('navEl');

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

	const { visibleItems } = useResizableList({
		target: navEl,
		items: headerNavigationLinks,
		minVisibleAmount: 2,
	});
</script>

<style src="@components/layout/header/components/headerNavigation/styles/header-navigation.scss" lang="scss" scoped />
