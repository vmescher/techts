<template>
	<header class="header">
		<NuxtLink to="/" class="header__logo">
			<img src="/img/logo.svg" alt="">
		</NuxtLink>

		<HeaderNavigation />

		<NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
			{{ locale.name }}
		</NuxtLink>
	</header>
</template>

<script setup lang="ts">
	import HeaderNavigation from '@components/layout/header/HeaderNavigation.vue';

	const { locale, locales } = useI18n();
	const switchLocalePath = useSwitchLocalePath();

	const availableLocales = computed(() => {
		return locales.value.filter(i => i.code !== locale.value);
	});
</script>

<style scoped>

</style>
