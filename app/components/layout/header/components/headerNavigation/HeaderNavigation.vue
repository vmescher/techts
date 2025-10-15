<template>
	<nav ref="navEl" class="header-navigation">
		<UiLink
			v-for="link in visibleItems"
			:key="link.id"
			class="header-navigation__link"
			:to="link.to"
		>
			<template v-if="link.icon" #icon-left>
				<UiIcon :name="link.icon" :size="UiIconSize.S24" />
			</template>

			{{ t(link.titleKey) }}
		</UiLink>

		<UiDropdown v-if="hasInvisibleItems" class="header-navigation__dropdown">
			<template #trigger="{ attrs }">
				<UiLink is-button v-bind="attrs" class="header-navigation__link">
					{{ t('header_nav_more') }}
					<template #icon-right>
						<UiIcon name="chevron_down" :size="UiIconSize.S24" />
					</template>
				</UiLink>
			</template>

			<template #default>
				<UiLink
					v-for="link in invisibleItems"
					:key="link.id"
					class="header-navigation__link"
					:to="link.to"
				>
					{{ t(link.titleKey) }}
				</UiLink>
			</template>
		</UiDropdown>
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
			id: useId(),
			titleKey: 'header_nav_catalog',
			to: '/catalog',
			icon: 'menu',
		},
		{
			id: useId(),
			titleKey: 'header_nav_payment',
			to: '/#payment',
		},
		{
			id: useId(),
			titleKey: 'header_nav_contacts',
			to: '/#contacts',
		},
		{
			id: useId(),
			titleKey: 'header_nav_about',
			to: '/#about',
		},
		{
			id: useId(),
			titleKey: 'header_nav_brands',
			to: '/#top-brands',
		},
	];

	const { visibleItems, invisibleItems, hasInvisibleItems } = useResizableList({
		target: navEl,
		items: headerNavigationLinks,
		minVisibleAmount: 2,
	});
</script>

<style src="@components/layout/header/components/headerNavigation/styles/header-navigation.scss" lang="scss" scoped />
