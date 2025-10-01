<template>
	<component
		:is="buttonComponent"
		v-bind="safeAttrs"
		class="ui-button"
		:class="classNames"
		@click="onClickHandler"
	>
		<span v-if="$slots['icon-left']" class="ui-button__icon">
			<slot name="icon-left" />
		</span>

		<slot />

		<span v-if="$slots['icon-right']" class="ui-button__icon">
			<slot name="icon-right" />
		</span>
	</component>
</template>

<script setup lang="ts">
	import type { UiButtonProps } from '@ui/uiButton/types';
	import { NuxtLink } from '#components';
	import { ThemeType } from '@ui/constants/ThemeType';

	const { tag = 'button', type = 'button', disabled, attrs, to, target, theme = ThemeType.default,
	} = defineProps<UiButtonProps>();

	const buttonComponent = computed(() => {
		if (tag === 'NuxtLink') {
			return NuxtLink;
		}

		return tag;
	});

	const safeAttrs = computed(() => {
		const attributes: Record<string, any> = { ...(attrs || {}) };

		if (disabled) {
			attributes['aria-disabled'] = 'true';
			attributes.tabindex = -1;
		}

		if (tag === 'button') {
			attributes.type = type;
			if (disabled) {
				attributes.disabled = true;
			}
		}
		else if (tag === 'a') {
			if (!disabled) {
				if (to) {
					attributes.href = to;
				}
				if (target) {
					attributes.target = target;
				}
				if (attributes.target === '_blank') {
					attributes.rel = attributes.rel ? `${attributes.rel} noopener noreferrer` : 'noopener noreferrer';
				}
			}
		}
		else if (tag === 'NuxtLink') {
			if (!disabled) {
				if (to) {
					attributes.to = to;
				}
				if (target) {
					attributes.target = target;
				}
			}
		}

		return attributes;
	});

	const classNames = computed(() => {
		return {
			'ui-button--disabled': disabled,
			[`ui-button--theme-${theme}`]: Boolean(theme),
		};
	});

	function onClickHandler(e: Event) {
		if (disabled) {
			e.preventDefault();
			e.stopPropagation();
		}
	}
</script>

<style scoped src="@ui/uiButton/styles/ui-button.scss" lang="scss" />
