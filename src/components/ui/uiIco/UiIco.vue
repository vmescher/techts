<template>
	<svg
		class="ui-ico"
		:class="[`ui-ico--${name}`]"
		:width="sizePx"
		:height="sizePx"
		:aria-hidden="decorative ? 'true' : undefined"
		:role="decorative ? undefined : 'img'"
		:aria-label="decorative ? undefined : label"
	>
		<use :href="`#icon-${name}`" />
	</svg>
</template>

<script setup lang="ts">
	type SizeToken = 'sm' | 'md' | 'lg' | number | `${number}px` | `${number}rem`;

	const props = withDefaults(defineProps<{
		name: string;
		size?: SizeToken;
		label?: string; // для скрин-ридеров, если иконка смысловая
		decorative?: boolean; // если true — иконка скрывается от SR
	}>(), {
		size: 'lg',
		decorative: true,
	});

	const sizePx = computed(() => {
		const map = { sm: 16, md: 20, lg: 24 } as const;
		if (typeof props.size === 'number')
			return props.size;
		if (typeof props.size === 'string') {
			if (props.size.endsWith('px') || props.size.endsWith('rem'))
				return props.size;
			return map[props.size as keyof typeof map] ?? 20;
		}
		return 20;
	});
</script>

<style scoped>
.ui-ico {
	display: inline-block;
	vertical-align: middle;
	fill: currentColor;
	flex-shrink: 0;
}
</style>
