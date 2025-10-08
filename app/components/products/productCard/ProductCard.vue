<template>
	<NuxtLink
		:to="productLink" itemscope
		itemtype="https://schema.org/Product"
		itemprop="url"
		:aria-labelledby="productLabelId"
		class="product-card"
		:class="{
			'product-card--type-accent': isAccent,
		}"
	>
		<div class="product-card__image-wrapper">
			<picture class="product-card__image">
				<img
					:src="product.image"
					:alt="product.name"
					class="product-card__img"
					:class="{
						'product-card__img--shown': !hasSchemeImage,
					}"
					width="293"
					height="298"
					loading="lazy"
					itemprop="image"
				/>
			</picture>

			<img
				v-if="product.schemeImage"
				:src="product.schemeImage"
				alt=""
				class="product-card__scheme"
				aria-hidden="true"
				width="293"
				height="298"
				loading="lazy"
			/>
		</div>

		<div class="product-card__info">
			<UiCaption :id="productLabelId" :size="SizeType.l" class="product-card__name" itemprop="name">
				{{ product.name }}
			</UiCaption>

			<span class="product-card__link">
				<UiIcon name="arrow_right" :size="UiIconSize.S20" class="product-card__link-icon" />
			</span>
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
	import { SizeType } from '@ui/constants/SizeType';
	import { UiIconSize } from '@ui/uiIcon/types';

	const props = defineProps<{
		product: {
			id: string;
			name: string;
			image: string;
			schemeImage?: string;
		};
		isAccent?: boolean;
	}>();

	const productLink = computed(() => `/products/${props.product.id}`);
	const productLabelId = computed(() => `product-${props.product.id}`);

	const hasSchemeImage = computed(() => Boolean(props.product.schemeImage));
</script>

<style src="@components/products/productCard/styles/product-card.scss" scoped lang="scss" />
