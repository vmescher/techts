<template>
	<component
		:is="tag"
		:class="uiCaptionClasses"
		class="ui-caption"
		v-bind="$attrs"
	>
		<slot></slot>
	</component>
</template>

<script setup lang="ts">
	import type { UiCaptionProps } from '@ui/uiCaption/types';
	import { SizeType } from '@ui/constants/SizeType';
	import { WeightType } from '@ui/constants/WeightType';

	const { tag = 'span', size = SizeType.s, weight = WeightType.medium, inline, noWrap, uppercase } = defineProps<UiCaptionProps>();

	const uiCaptionClasses = computed(() => ({
		[`ui-caption--size-${size}`]: Boolean(size),
		[`ui-caption--weight-${weight}`]: Boolean(weight),
		'ui-caption--uppercase': uppercase,
		'ui-caption--no-wrap': noWrap,
		'ui-caption--inline': inline,
	}));
</script>

<style scoped src="@ui/uiCaption/styles/ui-caption.scss" lang="scss" />
