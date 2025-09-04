<template>
	<component
		:is="tag"
		class="ui-container"
		:class="containerClasses"
	>
		<slot />
	</component>
</template>

<script setup lang="ts">
	const props = withDefaults(defineProps<{
		fluid?: boolean;
		tag?: keyof HTMLElementTagNameMap | Component;
		noGutter?: boolean;
	}>(), {
		tag: 'div',
	});

	const containerClasses = computed(() => ({
		'ui-container--fluid': props.fluid,
		'ui-container--clear': props.noGutter,
	}));
</script>

<style scoped src="@ui/uiContainer/styles/ui-container.scss" lang="scss" />
