<template>
	<div class="footer-contacts">
		<UiCaption tag="p" :size="SizeType.xl" class="footer-contacts__caption">
			{{ t('footer_contacts_title') }}
		</UiCaption>

		<address
			itemscope
			itemtype="https://schema.org/Organization"
			class="footer-contacts__container"
		>
			<UiLink
				v-for="contact in footerContactsItems"
				:key="contact.id"
				class="footer-contacts__contact"
				:theme="ThemeType.white"
				:to="contact.href"
				:itemprop="contact.itemProp"
				is-external-link
			>
				{{ contact.label }}
			</UiLink>

			<div class="footer-contacts__messengers">
				<UiLink
					v-for="messenger in footerMessengerItems"
					:key="messenger.id"
					class="footer-contacts__messenger"
					:theme="ThemeType.white"
					:to="messenger.href"
					:additional-attrs="{
						rel: 'nofollow',
					}"
					is-external-link
				>
					<template v-if="messenger.icon" #icon-left>
						<UiIcon :name="messenger.icon" :size="UiIconSize.S22" />
					</template>

					{{ t(messenger.titleKey) }}
				</UiLink>
			</div>

			<UiCaption
				tag="p"
				class="footer-contacts__address"
				itemprop="address"
				itemscope
				itemtype="https://schema.org/PostalAddress"
			>
				<span itemprop="addressLocality">{{ t('footer_contacts_city') }}</span>,
				<span itemprop="streetAddress">{{ t('footer_contacts_address') }}</span>
			</UiCaption>
		</address>
	</div>
</template>

<script setup lang="ts">
	import type {
		FooterContactsItem,
	} from '@components/layout/footer/components/footerContacts/types/FooterContactsItem';
	import type {
		FooterMessengerItem,
	} from '@components/layout/footer/components/footerContacts/types/FooterMessengerItem';
	import { SizeType } from '@ui/constants/SizeType';
	import { ThemeType } from '@ui/constants/ThemeType';
	import { UiIconSize } from '@ui/uiIcon/types';

	const { t } = useI18n();

	const footerContactsItems: FooterContactsItem[] = [
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

	const footerMessengerItems: FooterMessengerItem[] = [
		{
			id: useId(),
			titleKey: 'common_whatsapp',
			href: 'https://wa.me/79876543210',
			icon: 'whatsapp',
		},
		{
			id: useId(),
			titleKey: 'common_viber',
			href: 'viber://chat?number=79876543210',
			icon: 'viber',
		},
	];
</script>

<style src="@components/layout/footer/components/footerContacts/styles/footer-contacts.scss" scoped lang="scss" />
