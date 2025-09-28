<template>
	<component :is="component" v-bind="attributes" class="ui-link" :class="classNames">
		<span v-if="$slots['icon-left']" class="ui-link__icon">
			<slot name="icon-left" />
		</span>

		<slot />

		<span v-if="$slots['icon-right']" class="ui-link__icon">
			<slot name="icon-right" />
		</span>
	</component>
</template>

<script setup lang="ts">
	import type { UiLinkAttributes, UiLinkComponent, UiLinkProps } from '@ui/uiLink/types';
	import { NuxtLink } from '#components';

	const { isExternalLink, to, target, disabled, theme = 'default', additionalAttrs, isButton } = defineProps<UiLinkProps>();

	const component = computed<UiLinkComponent>(() => {
		if (isExternalLink) {
			return 'a';
		}

		if (to) {
			return NuxtLink;
		}

		return isButton ? 'button' : 'div';
	});

	const attributes = computed<UiLinkAttributes>(() => {
		const attrs: Record<string, any> = {};
		const isDisabled = disabled || (!isButton && !to);

		if (isDisabled) {
			attrs['aria-disabled'] = 'true';
			attrs.tabindex = -1;
		}

		if (additionalAttrs) {
			Object.assign(attrs, additionalAttrs);
		}

		if (isExternalLink) {
			if (!isDisabled) {
				attrs.href = to;
				attrs.target = target ?? '_blank';

				if ((attrs.target as string) === '_blank') {
					attrs.rel = attrs.rel ? `${attrs.rel} noopener noreferrer` : 'noopener noreferrer';
				}
			}
			return attrs as UiLinkAttributes;
		}

		if (!isDisabled && !isButton) {
			attrs.to = to;

			if (target) {
				attrs.target = target;
			}
		}

		return attrs as UiLinkAttributes;
	});

	const classNames = computed(() => {
		return {
			'ui-link--disabled': disabled,
			[`ui-link--theme-${theme}`]: theme,
		};
	});
</script>

<style scoped src="@ui/uiLink/styles/ui-link.scss" lang="scss" />
