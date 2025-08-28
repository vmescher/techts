<template>
	<div class="default">
		<Header class="default__header" />

		<main class="default__container">
			<slot />
		</main>

		<Footer class="default__footer" />
	</div>
</template>

<script setup lang="ts">
	import Footer from '~/components/layout/footer/Footer.vue';
	import Header from '~/components/layout/header/Header.vue';
</script>

<style scoped>
    @import "~/layouts/styles/default/default.scss";
</style>
