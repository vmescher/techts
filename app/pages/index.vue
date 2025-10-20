<template>
	<UiContainer tag="main" class="main-page">
		<HeroBanner class="main-page__section" />
		<AdvantagesSection class="main-page__section" />
		<PopularProducts class="main-page__section" />
		<TopBrands class="main-page__section" />
		<CallbackSection section-id="callback" class="main-page__section" />
	</UiContainer>
</template>

<script setup lang="ts">
	import AdvantagesSection from '@components/main/advantagesSection/AdvantagesSection.vue';
	import CallbackSection from '@components/main/callbackSection/CallbackSection.vue';
	import HeroBanner from '@components/main/heroBanner/HeroBanner.vue';
	import PopularProducts from '@components/main/popularProducts/PopularProducts.vue';
	import TopBrands from '@components/main/topBrands/TopBrands.vue';
</script>

<style src="@/pages/styles/main-page.scss" scoped />
