<template>
	<header class="header">
		<NuxtLink to="/" class="header__logo">
			<img src="/img/logo.svg" alt="">
		</NuxtLink>

		<nav class="header__nav">
			<UiLink to="/">
				<UiIco name="menu" color="black" />
				Ссылка
			</UiLink>
		</nav>
		<span>HEADER</span>
	</header>
</template>

<script setup lang="ts">
	import UiIco from '@components/ui/uiIco/UiIco.vue';
	import UiLink from '@components/ui/uiLink/UiLink.vue';
</script>

<style scoped>

</style>
