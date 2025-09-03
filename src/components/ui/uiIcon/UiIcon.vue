<template>
	<svg
		class="ui-icon"
		:width="size"
		:height="size"
		:aria-hidden="decorative ? 'true' : undefined"
		:role="decorative ? undefined : 'img'"
		:aria-label="decorative ? undefined : label"
	>
		<use :href="`#icon-${name}`" />
	</svg>
</template>

<script setup lang="ts">
	import type { UiIconProps } from '@ui/uiIcon/types';
	import { UiIconSize } from '@ui/uiIcon/types';

	withDefaults(defineProps<UiIconProps>(), {
		size: UiIconSize.S20,
		decorative: true,
	});
</script>

<style src="@ui/uiIcon/styles/ui-icon.scss" lang="scss" scoped />
