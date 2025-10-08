<template>
	<div class="product-page">
		PRODUCT {{ productId }}
	</div>
</template>

<script setup lang="ts">
	const route = useRoute();

	const productId = Number(route.params.id);
</script>

<style scoped lang="scss">

</style>
