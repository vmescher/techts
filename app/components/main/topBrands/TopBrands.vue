<template>
	<section id="top-brands" class="top-brands" aria-labelledby="top-brands-title">
		<UiTitleRow class="top-brands__title-row">
			<UiCaption
				id="top-brands-title"
				:size="SizeType.xxl"
				tag="h2"
				:weight="WeightType.semibold"
				class="top-brands__title"
			>
				{{ t("top_brands_section_title") }}
			</UiCaption>

			<template #actions>
				<UiButton
					:theme="ThemeType.whiteLight"
					:size="SizeType.s"
					class="top-brands__all"
					tag="NuxtLink"
					to="/brands"
				>
					{{ t("top_brands_section_all") }}
					<template #icon-right>
						<UiIcon name="arrow_right" :size="UiIconSize.S16" />
					</template>
				</UiButton>
			</template>
		</UiTitleRow>

		<ul role="list" class="top-brands__list">
			<li
				v-for="brand in brands"
				:key="brand.id"
				class="top-brands__item"
			>
				<BrandCard :brand />
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
	import BrandCard from '@components/brands/brandCard/BrandCard.vue';
	import { SizeType } from '@ui/constants/SizeType';
	import { ThemeType } from '@ui/constants/ThemeType';
	import { WeightType } from '@ui/constants/WeightType';
	import { UiIconSize } from '@ui/uiIcon/types';

	const { t } = useI18n();

	const brands = [
		{
			id: useId(),
			name: 'Optibelt',
			logoUrl: '/img/brands/optibelt.png',
			description: 'Группа компаний Arntz Optibelt из Гремании является ведущим мировым производителем высокопроизводительных ременных приводов. Продукция Optibelt используется там, где требуется долговечность и качество без каких-либо компромиссов: в машиностроении, в автомобильной',
		},
		{
			id: useId(),
			name: 'Globelt (Hanse)',
			logoUrl: '/img/brands/globelt.png',
			description: 'Чешская торговая марка «HANSE» уверенно позиционирует себя на рынке как качественный и надежный продукт. Продукция HANSE Group s.r.o. – это пример соответствия заявленного и реального качества изделия. В производстве автозапчастей «HANSE» мы придерживаемся определенных',
		},
	];

	await loadDictionaries(['sections', 'brands']);
</script>

<style src="@components/main/topBrands/styles/top-brands.scss" scoped lang="scss" />
