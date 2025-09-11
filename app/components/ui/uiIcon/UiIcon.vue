<template>
	<svg
		class="ui-icon"
		:width="computedSize"
		:height="computedSize"
		:aria-hidden="decorative ? 'true' : undefined"
		:role="decorative ? undefined : 'img'"
		:aria-label="decorative ? undefined : label"
		:class="{ [`ui-icon--size-${size}`]: size }"
	>
		<use :href="`#icon-${name}`" />
	</svg>
</template>

<script setup lang="ts">
	import type { UiIconProps } from '@ui/uiIcon/types';
	import { ICON_SIZES_MAP } from '@ui/uiIcon/constants';
	import { UiIconSize } from '@ui/uiIcon/types';

	const { size = UiIconSize.S20, decorative = true } = defineProps<UiIconProps>();

	const computedSize = computed(() => {
		return ICON_SIZES_MAP[size];
	});
</script>

<style src="@ui/uiIcon/styles/ui-icon.scss" lang="scss" scoped />
