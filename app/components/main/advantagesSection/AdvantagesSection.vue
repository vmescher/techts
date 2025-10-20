<template>
	<section class="advantages-section">
		<ul class="advantages-section__list">
			<li v-for="advantage in advantages" :key="advantage.id" class="advantages-section__item">
				<UiIcon :name="advantage.icon" :size="UiIconSize.S48" class="advantages-section__icon" />
				<UiCaption tag="p" :size="SizeType.m" class="advantages-section__caption">
					{{ t(advantage.titleKey) }}
				</UiCaption>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
	import { SizeType } from '@ui/constants/SizeType';
	import { UiIconSize } from '@ui/uiIcon/types';

	const { t } = useI18n();

	const advantages = [
		{
			id: useId(),
			titleKey: 'advantages_section_shipping',
			icon: 'abstraction_1',
		},
		{
			id: useId(),
			titleKey: 'advantages_section_discount',
			icon: 'abstraction_2',
		},
		{
			id: useId(),
			titleKey: 'advantages_section_fast_shipping',
			icon: 'abstraction_3',
		},
		{
			id: useId(),
			titleKey: 'advantages_section_experience',
			icon: 'abstraction_5',
		},
		{
			id: useId(),
			titleKey: 'advantages_section_products',
			icon: 'abstraction_4',
		},
	];

	await loadDictionary('sections');
</script>

<style src="@components/main/advantagesSection/styles/advantages-section.scss" scoped lang="scss" />
