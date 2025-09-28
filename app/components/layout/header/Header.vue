<template>
	<header class="header">
		<UiContainer fluid class="header__container">
			<NuxtLink to="/" class="header__logo">
				<img src="/img/logo.svg" alt="">
			</NuxtLink>

			<HeaderNavigation class="header__navigation" />
			<HeaderContacts class="header__contacts" />

			<UiButton class="header__callback">
				{{ t('header_callback_btn') }}
			</UiButton>
		</UiContainer>
	</header>
</template>

<script setup lang="ts">
	import HeaderContacts from '@components/layout/header/components/headerContacts/HeaderContacts.vue';
	import HeaderNavigation from '@components/layout/header/components/headerNavigation/HeaderNavigation.vue';

	await loadDictionary('header');

	const { t } = useI18n();
</script>

<style src="@components/layout/header/styles/header.scss" scoped />
