<template>
	<article itemscope itemtype="https://schema.org/Brand" class="brand-card">
		<figure class="brand-card__logo">
			<img
				:src="brand.logoUrl"
				width="228"
				height="192"
				:alt="brand.name"
				loading="lazy"
				decoding="async"
				itemprop="logo"
				class="brand-card__img"
			/>
		</figure>

		<div class="brand-card__content">
			<UiCaption
				tag="h3"
				:size="SizeType.xl"
				:weight="WeightType.semibold"
				itemprop="name"
				class="brand-card__title"
			>
				{{ brand.name }}
			</UiCaption>

			<UiCaption
				tag="p"
				:size="SizeType.l"
				:weight="WeightType.light"
				itemprop="description"
				class="brand-card__description"
			>
				{{ brand.description }}
			</UiCaption>

			<UiLink
				:size="SizeType.s"
				:to="`/products?brand=${brand.id}`"
				:aria-label="`Продукция бренда ${brand.name}`"
				class="brand-card__link"
			>
				{{ t("brands_products_link") }}

				<template #icon-right>
					<UiIcon name="arrow_right" :size="UiIconSize.S16" />
				</template>
			</UiLink>
		</div>
	</article>
</template>

<script setup lang="ts">
	import { SizeType } from '@ui/constants/SizeType';
	import { WeightType } from '@ui/constants/WeightType';
	import { UiIconSize } from '@ui/uiIcon/types';

	defineProps<{
		brand: {
			id: number | string;
			name: string;
			logoUrl: string;
			description: string;
		};
	}>();

	const { t } = useI18n();
</script>

<style src="@components/brands/brandCard/styles/brand-card.scss" scoped lang="scss" />
