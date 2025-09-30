<template>
	<address
		itemscope
		itemtype="https://schema.org/Organization"
		class="header-contacts"
	>
		<UiLink
			v-for="contact in headerContactsItems"
			:key="contact.id"
			class="header-contacts__item"
			:to="contact.href"
			:itemprop="contact.itemProp"
			is-external-link
		>
			<template v-if="contact.icon" #icon-left>
				<UiIcon :name="contact.icon" :size="UiIconSize.S24" />
			</template>

			{{ contact.label }}
		</UiLink>
	</address>
</template>

<script setup lang="ts">
	import type {
		HeaderContactsItem,
	} from '@components/layout/header/components/headerContacts/types/HeaderContactsItem';
	import { UiIconSize } from '@ui/uiIcon/types';

	const headerContactsItems: HeaderContactsItem[] = [
		{
			id: useId(),
			label: 'techts@mail.ru',
			href: 'mailto:techts@mail.ru',
			itemProp: 'email',
		},
		{
			id: useId(),
			label: '+7 987 654-32-10',
			href: 'tel:+79876543210',
			itemProp: 'telephone',
		},
	];
</script>

<style src="@components/layout/header/components/headerContacts/styles/header-contacts.scss" lang="scss" scoped />
