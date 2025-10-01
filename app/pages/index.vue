<template>
	<UiContainer tag="main" class="main-page">
		<HeroBanner class="main-page__section" />
		<AdvantagesSection class="main-page__section" />
	</UiContainer>
</template>

<script setup lang="ts">
	import AdvantagesSection from '@components/main/advantagesSection/AdvantagesSection.vue';
	import HeroBanner from '@components/main/heroBanner/HeroBanner.vue';
</script>

<style src="@/pages/styles/main-page.scss" scoped />
