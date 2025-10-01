<template>
	<div class="default">
		<Header class="default__header" />

		<slot />

		<Footer class="default__footer" />
	</div>
</template>

<script setup lang="ts">
	import Footer from '~/components/layout/footer/Footer.vue';
	import Header from '~/components/layout/header/Header.vue';
</script>

<style lang="scss" src="~/layouts/styles/default/default.scss" scoped />
