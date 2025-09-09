<template>
	<nav class="header-contacts">
		<UiLink
			v-for="(item, index) in headerContactsItems"
			:key="`${item.href}-${index}`"
			class="header-contacts__item"
			:to="item.href"
			:additional-attrs="{
				rel: 'nofollow',
			}"
			is-external-link
		>
			<template v-if="item.icon" #icon-left>
				<UiIcon :name="item.icon" :size="UiIconSize.S24" />
			</template>

			{{ item.label }}
		</UiLink>
	</nav>
</template>

<script setup lang="ts">
	import type {
		HeaderContactsItem,
	} from '@components/layout/header/components/headerContacts/types/HeaderContactsItem';
	import { UiIconSize } from '@ui/uiIcon/types';

	const headerContactsItems: HeaderContactsItem[] = [
		{
			label: 'techts@mail.ru',
			href: 'mailto:techts@mail.ru',
		},
		{
			label: '+7 987 654-32-10',
			href: 'tel:+79876543210',
		},
	];
</script>

<style src="@components/layout/header/components/headerContacts/styles/header-contacts.scss" lang="scss" scoped />
