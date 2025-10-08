<template>
	<section id="brands" class="top-brands" aria-labelledby="popular-products-title">
		<UiTitleRow class="popular-products__title-row">
			<UiCaption
				id="popular-products-title"
				:size="SizeType.xxl"
				tag="h2"
				:weight="WeightType.semibold"
				class="popular-products__title"
			>
				Наши бренды
			</UiCaption>

			<template #actions>
				<UiButton
					:size="SizeType.s"
					class="popular-products__all"
				>
					Все бренды
					<template #icon-right>
						<UiIcon name="arrow_right" :size="UiIconSize.S16" />
					</template>
				</UiButton>
			</template>
		</UiTitleRow>
	</section>
</template>

<script setup lang="ts">
	import { SizeType } from '@ui/constants/SizeType';
	import { WeightType } from '@ui/constants/WeightType';
	import { UiIconSize } from '@ui/uiIcon/types';
</script>

<style scoped lang="scss">

</style>
