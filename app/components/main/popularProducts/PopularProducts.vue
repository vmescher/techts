<template>
	<section class="popular-products" aria-labelledby="popular-products-title">
		<UiTitleRow class="popular-products__title-row">
			<UiCaption
				id="popular-products-title"
				:size="SizeType.xxl"
				tag="h2"
				:weight="WeightType.semibold"
				class="popular-products__title"
			>
				{{ t("popular_products_section_title") }}
			</UiCaption>

			<template #actions>
				<UiButton
					class="popular-products__all"
					:theme="ThemeType.whiteLight"
					:size="SizeType.s"
					tag="NuxtLink"
					to="/products"
				>
					{{ t("popular_products_section_all") }}
					<template #icon-right>
						<UiIcon name="arrow_right" :size="UiIconSize.S16" />
					</template>
				</UiButton>
			</template>
		</UiTitleRow>

		<div class="popular-products__list">
			<ProductCard
				v-for="(product, index) in products"
				:key="product.id"
				:is-accent="index === 2"
				:product class="popular-products__item"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
	import ProductCard from '@components/products/productCard/ProductCard.vue';
	import { SizeType } from '@ui/constants/SizeType';
	import { ThemeType } from '@ui/constants/ThemeType';
	import { WeightType } from '@ui/constants/WeightType';
	import { UiIconSize } from '@ui/uiIcon/types';

	await loadDictionary('sections');

	const { t } = useI18n();

	const products = [
		{
			id: useId(),
			name: 'Клиновый',
			image: '/img/products/product.png',
			schemeImage: '/img/products/product-scheme-1.png',
		},
		{
			id: useId(),
			name: 'Вариаторный',
			image: '/img/products/product.png',
			schemeImage: '/img/products/product-scheme-2.png',
		},
		{
			id: useId(),
			name: 'Поликлиновый',
			image: '/img/products/product.png',
		},
		{
			id: useId(),
			name: 'Вариаторный',
			image: '/img/products/product.png',
			schemeImage: '/img/products/product-scheme-3.png',
		},
	];
</script>

<style src="@components/main/popularProducts/styles/popular-products.scss" scoped lang="scss" />
